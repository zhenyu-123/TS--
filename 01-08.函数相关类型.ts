/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-24 10:38:34
 * @LastEditors: sy
 * @LastEditTime: 2023-03-24 16:49:46
 */
// function add(first: number, second: number): number {
//   return first + second;
// }

// function sayHello(): void {
//   console.log('hello');
// }
// never 类型表示永远不会发生的值的类型。例如，如果一个函数永远不会返回，那么它的返回类型应该是 never。
function errorEmitter(): never {
  // while(true) {}
    throw("This code is unreachable");
}
function throwError(message: string): never {
  throw new Error(message);
}

function unreachableCode(): never {
  return throwError("This code is unreachable");
}

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
  return first;
}

const total = add({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
