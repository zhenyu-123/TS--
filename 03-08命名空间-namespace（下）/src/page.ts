/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-29 17:31:59
 * @LastEditors: sy
 * @LastEditTime: 2023-03-31 15:46:12
 */
///<reference path="components.ts" />
namespace Home {
  export namespace Dell {
    export const teacher: Components.user = {
      name: 'dell'
    };
  }
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
      new Components.Footer();
    }
  }
}
