"use strict";
/*对象冻结,冻结后的对象名所指向的地址不能修改，不过其属性指向的地址可以修改*/

require("core-js/modules/web.dom.iterable");

let obj = {
  x: {}
};
Object.freeze(obj);
obj.y = 255; //报错

obj.y.x = 200; //不报错

/*将对象内部的属性也冻结*/

var constantize = obj => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key]);
    }
  });
}; //Object.keys(obj)返回一个表示给定对象的所有可枚举属性的字符串数组。