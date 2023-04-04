/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 09:41:36
 */
// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过 @ 符号来使用

function testDecorator(flag: boolean) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log('dell');
      };
    };
  } else {
    return function(constructor: any) {};
  }
}

@testDecorator(true)
class Test {}

const test = new Test();
(test as any).getName();
