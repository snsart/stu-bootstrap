"use strict"

/*一、==,===,Object.is()*/
console.log(1=="1");//true
console.log(1==="1");//false
console.log(undefined==null)//true
console.log(undefined===null)//false

console.log(NaN===NaN)//false
console.log(Object.is(NaN,NaN))//true

console.log(+0===-0)//true
console.log(Object.is(+0,-0))//false


/*二、Object.assign()
 Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。若源对象和目标对象有同名属性，目标对象属性会被覆盖。
 * */

let obj={
	a:10,
}

Object.assign(obj,{b:20},{a:15,c:30});
console.log(obj);//{a:15,b:20,c:30}

//Object.assign为浅复制；
let obj2={};
let sobj={
	p:{x:10,y:10}
}
Object.assign(obj2,sobj);
sobj.p.x=50;
console.log(obj2);

/*Object.assign可以用来处理数组，但是会把数组视为对象。*/
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
//运用Object.assign可以为对象添加属性和方法;
function SomeClass(){
	
}
Object.assign(SomeClass.prototype, {
	//对象方法的简易写法
  	someMethod(arg1, arg2) {
    	//···
  	},
  	anotherMethod() {
   	 	//···
  	}
});

/*三、Object.getOwnPropertyDescriptors(obj),返回一个对象，这个对象的属性为原对象属性，值为原对象属性的描述*/
console.log(Object.getOwnPropertyDescriptors(obj));

/*四、为对象添加原型*/
Object.setPrototypeOf(object, prototype);

Object.getPrototypeOf(obj);//读取对象的原型对象
Object.entries()//方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
bject.fromEntries() //将键值对数组转为对象

Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }

//该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

