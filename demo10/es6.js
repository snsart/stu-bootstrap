"use strict"

/*Reflect和Math一样没有构造函数,不能实例化， 是ES6为了操作对象而提供的新 API,把原本属于Object的静态方法移动在了Reflect上。Reflect上的静态方法和Proxy拦截器上能重新定义的方法一一对应，Reflect静态方法可以帮助拦截器上的方法实现对象的默认操作，下面是一个示例：*/

var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);//获取对象属性
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);//删除属性
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});

/*和proxy一样，Reflect上共有13个静态方法*/

Reflect.apply(target, thisArg, args)
Reflect.construct(target, args)
Reflect.get(target, name, receiver)
Reflect.set(target, name, value, receiver)
Reflect.defineProperty(target, name, desc)
Reflect.deleteProperty(target, name)
Reflect.has(target, name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)

