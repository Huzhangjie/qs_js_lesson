// js 全局变量 js bad parts

const Song = {
//   es6 写法
  trim (str, type) {
    //   \s 匹配空格
    // /regExp对象/+  表示出现一次或多次 贪婪匹配
    switch (type) {
      case 1: 
        return str.replace(/(^\s+)|(\s+$)/g, "");break;//去除前后空格
      case 2: 
        return str.replace(/(^\s+)/, "");break;//去除左边空格
      case 3: 
        return str.replace(/(\s+$)/, "");break;//去除右边空格
      case 4: 
        return str.replace(/(\s+)/g, "");break;//去除全部空格
    }
  }
};
const strHello = '  Hello Baidu!  ';
console.log(Song.trim(strHello, 1))
// 立即执行函数的妙用 对象封装
// 方便的提供私有属性或方法
// const user = (function () {
// //   下划线开始 私有变量
//   let _name = "sven", 
//     _age = 19;
// //   闭包的魔法 函数内部嵌套函数
//   return {
//     // 形成闭包 closure 函数运行时的上下文环境
//     getUserInfo: function() {
//       return _name + ',年方' + _age;
//     }
//   }
// })()
// // 立即执行函数已经运行 但是内部有返回 可以在任何时刻被执行
// // 上下文环境 立即函数执行时 闭包函数被定义 闭包函数中的变量 函数 都可以被调用
// // 在闭包的夹层中 变量得永生
// console.log(user.getUserInfo())

// const Teel = {
//     sayHello: function() {
//         console.log("hello world")
//     }
// }

// ! 取非操作 使得立即执行函数与之前的代码分隔开来 不被影响 否则上面的代码没写完(没加分号)就会报错
// !(function(global) {
//     global.Teel = {
//         sayHello: function() {
//             console.log("hello world")
//         }
//     }
// })(window)
// //给函数传参window