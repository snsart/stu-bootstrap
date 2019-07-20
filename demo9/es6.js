"use strict"

/*Proxy:代理器,用与对原对象的某些操作进行拦截,并用自己定义的操作代替;
 * 用法如下:
 * 1:定义代理器
 * let proxy=new Proxy(target,handler);
 * Proxy的构造函数有两个参数，target指原对象，handler是一个对象，里面定义了被拦截方法的替代方法;
 * 2:定义handler
 * 下面定义了get方法的替代方法:
 * let handler={
 * 	get(target,propkey){
 * 		
 * 	}
 * }
 * 3:使用proxy当作原对象使用，不过handler中定义的方法会拦截掉原对象的方法
 * 
 * 下面是一个示例：
 * 示例中:拦截器handler中的get方法取代了obj的get方法;
*/

let obj={
	x:20,
	print(){
		console.log(this.x);
	}
}

let handler={
	get(target,propkey){
		if(propkey==='print'){
			return function(){
				console.log(target.x*2);
			}
		}
	}
}

let proxy=new Proxy(obj,handler);
proxy.print();//40;//get取到拦截器中的print属性;
obj.print();//20;proxy不改变原对象，只是在原对象外包裹了一层;
console.log(proxy.x);//undefined。handler中的get方法覆盖了obj的get，所以取不到x的值;

/*proxy支持的拦截操作共有13种，常用的为get和set:
get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。

set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。

deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。

ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。

getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。

isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。

setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 * 
 * */

/*下面是set的一个示例
 *假定Person对象有一个age属性，该属性应该是一个不大于 200 的整数，那么可以使用Proxy保证age的属性值符合要求。
 */

let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);

person.age=100;

person.age // 100
//person.age = 'young' // 报错
//person.age = 300 // 报错

/*
 上面代码中，由于设置了存值函数set，任何不符合要求的age属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。利用set方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。
 * */



/*apply方法拦截函数的调用、call和apply操作。下面是拦截函数apply方法的示例*/
let proxyFun=new Proxy(function(){
	console.log("targetFun")
},{
	apply(){
		console.log("handlerFun");
	}
});

proxyFun();//handlerFun

