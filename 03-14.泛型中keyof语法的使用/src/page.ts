/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:01
 * @LastEditors: sy
 * @LastEditTime: 2023-04-03 15:53:30
 */
interface Person {
  name: string;
  age: number;
  gender: string;
}

// type NAME = 'name';
// key: 'name';
// Person['name'];

// type T = 'age'
// key: 'age'
// Person['age']

// type T = 'gender'
// key: 'gender'
// Person['gender']

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    console.log(key);
    // 遍历 Person ，可以知道返回值的类型
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'dell',
  age: 18,
  gender: 'male'
});

const test = teacher.getInfo('name');
console.log(test);

// type a = 'name'
// const Autor:a=''//Type '""' is not assignable to type '"name"'
// 类型可以是一个字符串