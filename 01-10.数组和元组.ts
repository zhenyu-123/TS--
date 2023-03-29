// 数组
const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];
let obj: { name: string }[] = [];
obj = [{ name: "1" }];
// type alias 类型别名
type User = { name: string; age: number };

class Teacher {
  name?: string;
  age?: number;
  constructor(name?: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: "dell",
    age: 28,
  },
];
console.log(objectArr);

// 元组 tuple
const teacherInfo: [string, string, number, ...any] = [
  "Dell",
  "male",
  18,
  22,
  5,
];
// csv
const teacherList: ([string, string, number])[] = [
  ["dell", "male", 19],
  ["sun", "female", 26],
  ["jeny", "female", 38],
];
