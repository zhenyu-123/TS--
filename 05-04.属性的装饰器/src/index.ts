/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 11:02:07
 */
// descriptor 是被修饰的属性的属性描述符。
// descriptor 参数被正确地声明为 PropertyDescriptor。这是 TypeScript 中描述属性属性的接口，例如它是否可写、可枚举或可配置。
// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   };
//   return descriptor;
// }

// test.name = 'dell lee';

// 修改的并不是实例上的 name， 而是原型上的 name
function nameDecorator(target: any, key: string): any {
  console.log(target);
  
  target[key] = 'lee';//修改的是原型上的name
}

// name 放在实例上
class Test {
  @nameDecorator
  name = 'Dell';
}

const test = new Test();
console.log((test as any).__proto__.name);
