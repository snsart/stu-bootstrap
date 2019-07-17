"use strict"

/*一、数组结构赋值*/
let [a,b,c,...d]=[1,2,3,4,5,6,7,8,9];
console.log(a,b,c,d);
//输出 1,2,3,[4,5,6,7,8,9]

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

//可以为变量制定默认值
let [x, y = 'b'] = ['a']; // x='a', y='b'
//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

console.log([1][0]);//1，[1][0]代表数组[1]中的第一个元素，即1;


/*二、对象的结构赋值*/
let { bar, foo ,foe} = { foo: 'aaa', bar: 'bbb' };
console.log(bar)//bbb
console.log(foo)//aaa
console.log(foe)//
/*总结1.结构变量必须和对象的属性同名，2.和顺序无关。结构失败，值为undefined
 */

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
const { log } = console;
log('hello') // hello

/*对象的解构赋值是下面形式的简写，也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。*/
//let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };

//默认值
var {x = 3} = {};
x // 3
//默认值生效的条件是，对象的属性值严格等于undefined。



/*三、字符串的解构赋值*/
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
len // 5

/*四、函数参数的解构*/

function add([x, y]){
  return x + y;
}
add([1,2])//3

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]

/*用途*/

//1.交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

//2.从函数返回多个值
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

//3. 提取json数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

//4. 遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

//5. 输入模块的指定方法
//加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");