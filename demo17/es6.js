/*
 *ES6模块加载规则：
 * 1. 异步加载
 * 2. type='module'
 * 3. 多个模块按顺序加载;
 * 4. 先渲染页面再执行
 * 5. 同一模块加载多次但只执行一次
 * */

/*
 *ES6模块性质：
 * 1. 内部顶层变量外部不可见，必须导出
 * 2. this执向undefined
 * */

/*ES6输出的是值的引用，只要原始模块值变了，import加载的值也会变化
 * 下面是一个例子：m1模块的count值一秒后从0变为1，impot导入的count的值1s后也会发生变化;
 * */

import {count} from './m1.js';

console.log(count);//0
setTimeout(function(){
	console.log(count);//1
},1000)

/*ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。*/

//count=10;//TypeError






