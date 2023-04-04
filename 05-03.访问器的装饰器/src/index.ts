/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 10:52:01
 */
/**
 * 
 * @param target 原型
 * @param key 装饰方法的名称
 * @param descriptor 对应方法的引用 
 */
function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // descriptor.writable = false;
  console.log(target,key);
  console.log(descriptor);
  
}

class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test = new Test('dell');
test.name = 'dell lee';
console.log(test.name);


// 访问器的get 和 set 上不能同时添加访问器
// 在 TypeScript 中，访问器的 get 和 set 上不能同时添加访问器。如果您尝试这样做，将会出现以下错误：

// TS1056: Accessors are only available when targeting ECMAScript 5 and higher.


// 这是因为在 ECMAScript 5 之前，JavaScript 不支持访问器的 get 和 set 上同时添加访问器。因此，如果您的 TypeScript 代码目标是 ECMAScript 5 或更高版本，则可以使用访问器的 get 和 set 上同时添加访问器。

// 以下是一个示例，其中访问器的 get 和 set 上同时添加了访问器：

// class MyClass {
//   private _myProperty: string;
//   get myProperty(): string {
//     return this._myProperty;
//   }
//   set myProperty(value: string) {
//     this._myProperty = value;
//   }
//   get myProperty2(): string {
//     return this._myProperty;
//   }
//   set myProperty2(value: string) {
//     this._myProperty = value;
//   }
// }


// 在这个示例中，MyClass 类的 myProperty 和 myProperty2 访问器上都同时添加了访问器。如果您将此代码编译为 ECMAScript 5 或更高版本，则不会出现编译错误。但是，如果您将此代码编译为 ECMAScript 3 或更低版本，则会出现编译错误。