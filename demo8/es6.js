"use strict"

/*
 *一、set
 * set和数组类似，区别是set中存的值是独一无二的
 * */

let set=new Set([1,1,2,3,3,4,5]);
set.add(4);
set.add(6);
console.log(set);//{1,2,3,4,5,6}

/*数组去重*/
let arr=[1,2,2,3,4,5,5,5];
arr=[...new Set(arr)];
console.log(arr);//[1,2,3,4,5];

/*实现并集，交集和差集*/
let a=[1,2,3,4],b=[2,4,6,8];
let union=new Set([...a,...b]);
let intersect=new Set(a.filter(x=>new Set(b).has(x)));
let difference=new Set(a.filter(x=>!new Set(b).has(x)));
console.log(union,intersect,difference);

/*二、map
 * Object对象本质上是键-值对的集合，但只能用字符串当作键，而map结构的“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 * */

a={},b={};
let map=new Map([
	[a,"a"],
	[b,"b"]
]);
console.log(map.get(a));//a

//Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键
