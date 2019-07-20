"use strict"

/*promise
 *Promise对象包装了一个异步任务，并且会根据异步任务的执行情况，来改变自身状态[执行->成功或执行->失败],当自身状态改变时，会执行相应的回调函数 
 * */

/*
用法如下
*/

let promise=new Promise(function(resolve,){
	//异步任务...
	
	if (/* 异步操作成功 */){
    	resolve(value);//把value作为参数传递给then的回调函数
	} else {
	    reject(error);//把error作为参数传递给catch的回调函数
	}
})


/*异步任务执行成功*/
promise.then(function(value){
	
})

/*异步任务执行失败*/
promise.catch(function(error){
	
})

//promise创建后,作为参数的函数就会立即执行，then和catch中的回调函数会在当前脚步的同步任务全部执行完毕后才会执行;