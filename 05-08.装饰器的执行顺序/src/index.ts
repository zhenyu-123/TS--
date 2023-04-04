/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-04 14:55:16
 */
import 'reflect-metadata';

function showData(target: typeof User) {
  for (let key in target.prototype) {
    const data = Reflect.getMetadata('data', target.prototype, key);
    console.log(data);
  }
}

function setData(dataKey: string, msg: string) {
  return function(target: User, key: string) {
    Reflect.defineMetadata(dataKey, msg, target, key);
  };
}

@showData
class User {
  @setData('data', 'age')
  getName() {}

  @setData('data', 'age1')
  getAge() {}
}
