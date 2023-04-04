/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 11:08:12
 */
// 原型，方法名，参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target, method, paramIndex);
}


class Test {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('Dell', 30);
