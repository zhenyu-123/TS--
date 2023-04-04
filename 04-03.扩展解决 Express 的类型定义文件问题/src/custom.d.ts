/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:32:02
 * @LastEditors: sy
 * @LastEditTime: 2023-04-03 17:00:11
 */
// 类型融合
declare namespace Express {
  interface Request {
    teacherName: string;
  }
}
