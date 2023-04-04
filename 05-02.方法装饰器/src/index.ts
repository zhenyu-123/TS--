/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 10:03:06
 */
// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target, key);
  // 不允许重写getName方法
  descriptor.writable = false;
  // descriptor.value是getName方法的引用
  descriptor.value = function() {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator // 装饰器用来修饰 getName 方法
  getName() {
    return this.name;
  }
}

const test = new Test('dell');
// 重写方法
// test.getName=()=>{
//   return '1'
// }
console.log(test.getName());
