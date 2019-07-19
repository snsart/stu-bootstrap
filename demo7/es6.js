"use strict"

/*
 *Symbol类型，表示独一无二的值；感觉没什么用
 * */

let symMethod=Symbol();
console.log(symMethod);
let obj={
	method(){
		console.log("methodInit");
	},
	[symMethod](){
		console.log("symMethod");
	}
}

obj.method();

obj.method=function(){
	console.log("newMethod")
}
obj.method();

obj[symMethod]();
obj[symMethod]=function(){
	console.log("newsymMethod");
}
obj[symMethod]();
