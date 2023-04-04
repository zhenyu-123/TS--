// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => {};
}

declare function $(readyFunc: () => void): void;//传函数，返回空
declare function $(selector: string): JqueryInstance;// 传字符串，返回对象
 