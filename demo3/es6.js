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


/*标签模板*/
/*将模板字符串紧跟在一个函数名后面，该函数将被调用，来处理这个模板字符串*/
alert`123`
// 等同于
alert(123)

/*当模板字符串里面含有变量时，将先将模板字符串分割为多个参数，再传入函数进行处理，参数分割原则如下：
 *1. 以变量为分割点，将字符串分为多段,若变量在首位，则第一段字符串为'',若变量在末尾，最后一段字符串为'';
 *2. 将分割后的多段字符串放在一个数组中，作为函数的第一个参数
 *3. 变量作为剩余的参数依次排在第一个数组参数后面
 * 举例：`Hello ${ a + b } world ${ a * b }` 被分割为参数 ['hello','world'],a+b,a*b;
 * 
 * */

/*算法：对模板字符串变量中的特殊字符进行转义，转义规则如下：&替换为&amp; <替换为&lt; >替换为&gt;*/

function saferHTML(templateData){
	let s=templateData[0];
	for(let i=1;i<arguments.length;i++){
		let arg=arguments[i];
		s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        s+=templateData[i];
	}
	return s;
}

let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = saferHTML`<p>${sender} has sent you a message.</p>`;

console.log(message);
