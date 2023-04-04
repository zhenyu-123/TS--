/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 14:31:08
 */
const userInfo: any = undefined;

// function catchError(msg: string) {
//   return function(target: any, key: string, descriptor: PropertyDescriptor) {
//     console.log(descriptor);

//     const fn = descriptor.value;//getName
//     descriptor.value = function() {
//       try {
//         fn();
//       } catch (e) {
//         console.log(msg);
//       }
//     };
//   };
// }

// class Test {
//   @catchError('userInfo.name 不存在')
//   getName() {
//     return userInfo.name;
//   }
//   @catchError('userInfo.age 不存在')
//   getAge() {
//     return userInfo.age;
//   }
//   @catchError('userInfo.gender 不存在')
//   getGender() {
//     return userInfo.gender;
//   }
// }

// const test = new Test();
// test.getName();
// test.getAge();

const userInfo2: any = undefined;

function fnDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value; //getName
  descriptor.value = function () {
    try {
      fn();
    } catch (e) {
      console.log("sad");
    }
  };
}

class MyClass {
  @fnDecorator
  fn() {
    return userInfo2.sex;
  }
}

const myClass = new MyClass();
myClass.fn();
// console.log(myClass.fn()); // "modified behavior"
