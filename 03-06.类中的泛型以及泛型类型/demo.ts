// *********泛型继承接口类型 start************
// interface Item {
//   name: string;
// }

// class DataManager2<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const data = new DataManager2([
//   {
//     name: 'dell'
//   }
// ]);
// *********泛型继承接口类型 end************

// *********泛型限制某一类型 start************

class DataManager<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
// const data = new DataManager<number>([1]);
// data.getItem(0);

// *********泛型限制某一类型 end************

const data = new DataManager<number>([]);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}

//  <T>(param: T):返回值类型为泛型T
//  = hello 具体实现的函数
const func: <T>(param: T) => T = hello;

// () => string 函数返回值类型。后边为实现方式
const func2: () => string = () => {
  return "String";
};
