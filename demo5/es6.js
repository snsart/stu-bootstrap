"use strict"

/*对象的属性和方法简写*/
let x=30,y=40;
let simplyObj={
	x,
	y,
	print(){
		console.log("x:"+this.x,"y:"+this.y);
	}
}
console.log(simplyObj.print())

/*以上写法相当于
let simplyObj={
	x:x,
	y:y,
	print:function(){
		console.log("x:"+this.x,"y:"+this.y);
	}
}
 * */

/*属性名表达式*/
let print="print"
let obj={
	/*
	 *
	 * */
	["x"]:120,//x:120
	["y"]:360,//y:360
	[print]:function(){
		console.log("x:"+this.x,"y:"+this.y);
	}
}
obj.print();

/*name属性：函数和方法的name属性返回函数和方法名*/
function funName(){};
console.log(funName.name);//funName
console.log(obj.print.name);//print

console.log(Object.keys(obj),Object.values(obj));

/*对象方法的super 关键字
 * super指向当前方法所在对象的原型对象
 * */
const proto = {
  foo: 'hello'
};

const proObj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(proObj, proto);
proObj.find() // "hello"