/*
 *异步遍历器：next方法返回一个Promise对象 
 * 我们知道，一个对象的同步遍历器的接口，部署在Symbol.iterator属性上面。同样地，对象的异步遍历器接口，部署在Symbol.asyncIterator属性上面。不管是什么样的对象，只要它的Symbol.asyncIterator属性有值，就表示应该对它进行异步遍历。
 * 
 * */

const asyncIterable = createAsyncIterable(['a', 'b']);//创建一个可异步遍历的对象
const asyncIterator = asyncIterable[Symbol.asyncIterator]();//获取对象的遍历器;
asyncIterator.next().then(iterResult1=>{
	console.log(iterResult1);//{ value: 'a', done: false }
})




