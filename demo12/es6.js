"use strict"

/*Generator函数
 * 语法:函数定义时，在function后面加*;
 * 函数返回一个迭代器
 * 迭代器迭代的是Generator函数的状态
 * 函数内部使用yield标注函数的状态
 * 
 * 执行过程：函数从头至尾执行，直到遇见yield表达式或return语句，
 * 执行迭代器的next方法，函数从上次暂停的地方继续执行，直到遇到下一个yield
 * 执行next方法，返回的是一个对象，对象有两个属性：value指yield或return后面的表达式，done:布尔值，表示是否迭代完毕;
 * */
function* helloword(){
	console.log("start");
	yield 'hello';//调用迭代器的第一个next后，程序在这里暂停
	console.log("insert");//调用迭代器的第二个next后，执行这句
	yield function(){
		console.log("test");
	}
	return "end";
	yield '.....';//不会执行
}

let fun=helloword();//执行这句后Generator函数并不会执行，只有在执行迭代器的next后函数才会执行，可以把第一个next当做函数的启动命令;

console.log("start next");
console.log("1:",fun.next());//这里函数才第一次执行，所以先输出start next 再输出函数体内的start,函数体内第一个yield表达式执行完后，再执行本句的输出;
let con=fun.next().value;
con();
console.log(3,fun.next());
console.log(4,fun.next());
console.log(fun.next());
console.log(fun.next());


/*next方法的参数
 * next方法的参数会设置yield表达式的返回值;
 * 注意:next方法的参数表示上一个yield表达式的返回值
 * */

function* f(){
	let a=yield "xx";
	console.log(a);//注意:这里会输出helloworld而不是hello
	let b=yield "xx";
	console.log(b);//第二次next不会执行这句
}

let fn=f();
let obj=fn.next("hello");
console.log(fn.next("helloworld"));//指上一次next函数执行时，yield的返回值为helloworld

/*注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。*/


/*yield* 表达式*/

/*yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。*/
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}

// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}

/*如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。*/
function* gen(){
  yield* ["a", "b", "c"];
}

gen().next() // { value:"a", done:false }

/*实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
*/


/*如果一个对象的属性是 Generator 函数，可以简写成下面的形式。*/
let obj = {
  * myGeneratorMethod() {
    ···
  }
};

//等同于
let obj = {
  myGeneratorMethod: function* () {
    // ···
  }
};


