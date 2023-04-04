// /*
//  * @Description:
//  * @Autor: sy
//  * @Date: 2023-03-29 17:32:02
//  * @LastEditors: sy
//  * @LastEditTime: 2023-04-04 09:32:45
//  */
// // 类的装饰器
// function testDecorator() {
//   return function <T extends new (...args: any[]) => any>(constructor: T) {
//     return class extends constructor {
//       name = "lee";
//       getName() {
//         return this.name;
//       }
//     };
//   };
// }

// const Test = testDecorator()(
//   class {
//     name: string;
//     constructor(name: string) {
//       console.log(1, name);
//       this.name = name;
//       console.log(2, this.name);
//     }
//   }
// );

// const test = new Test("dell");
// console.log(test.getName());


// // 理解 TypeScript 中的类装饰器
// // 类装饰器是一种特殊的声明，可以用来修改类的行为。它在类声明之前声明。

// // 在 TypeScript 中，使用 @ 符号后跟装饰器函数来声明类装饰器。装饰器函数以类的构造函数作为唯一参数。

// // 以下是一个类装饰器的示例：

// // function myDecorator(constructor: Function) {
// //   console.log("Decorator called.");
// // }
// // @myDecorator
// // class MyClass {
// //   // class implementation
// // }

// // 在这个示例中，myDecorator 函数是一个类装饰器，它将一条消息记录到控制台。@myDecorator 语法用于将装饰器应用于 MyClass 类。

// // 类装饰器可以用多种方式修改类的行为。例如，它们可以向类添加新属性或方法，或者可以修改现有属性或方法。它们还可以修改类的构造函数，或者用新的构造函数替换它。

// // 在 TypeScript 中，类装饰器通常与其他功能（如接口、混合和继承）一起使用，以创建更复杂和强大的类层次结构。
