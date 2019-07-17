"use strict"

/*字符串的遍历器接口*/
for(let codePoint of 'foo'){
	console.log(codePoint);
}
//f f 0

/*模板字符串*/
/*模板字符串是增强版的字符串，用反引号标识。它可以当做普通字符串使用，也可以用来定义多行字符串，并且可以在字符串中插入变量*/
let name = "Bob", time = "today";
let c=`Hello ${name}, how are you ${time}?`;
console.log(c);

/*大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。还可以调用函数*/
function fn() {
  return "Hello World";
}

`foo ${fn()} bar`