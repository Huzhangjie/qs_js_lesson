
// // 如何手动实现 Array.prototype.map
var originArr = [1,2,3,4,5,6]
// // var newArr = originArr.map(function(item){
// //     return item * 3;
// // })
// // console.log(newArr)
// // 手动实现 es6 -> es5手写
// // es5 中考察 闭包 高阶函数 作用域

// // 顺序流程化具象解决问题
// // var newArr = [];
// // for(var i = 0, len = originArr.length; i < len; i++) {
// //     newArr.push(originArr[i]*3);
// // }
// // console.log(newArr);

// // step2 封装函数
// //  将一个数组每一项*3 并返回一个函数
// // function multiplyByThree(arr) {
// //     var newArr = [];
// //     for(var i = 0, len = arr.length; i < len; i++) {
// //         newArr.push(arr[i]*3);
// //     }
// //     return newArr;
// // }
// // console.log(multiplyByThree(originArr));

// //step3 将具象的东西拿掉
// // 数组 字符串数组 小写变大写

// // function multiplyByNUm(arr,fn ){
// //     var newArr = [];
// //     for(var i = 0, len = arr.length; i < len; i++) {
// //         newArr.push(fn(arr[i]));
// //     }
// //     return newArr;
// // }

// function timesThree(item) {
//     return item*3
// }
// function timesFive(item) {
//     return item*5
// }
// function makeToUp(item) {
//     return item.toUpperCase();
// }

// // 高阶函数 函数作为参数 或返回值 就叫高阶函数
// function map(arr, fn) {
//     // 函数的内部 代码超过时 分成几个函数 每个函数只做一件事情
//     var newArr = [];
//     for(var i = 0, len = arr.length; i < len; i++) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }
// console.log(map(originArr,timesThree));
// console.log(map(['a','b','c'], makeToUp))


Array.prototype.map = function(fn) {
    var newArr = []
    for(var i=0; i<this.length; i++){
        newArr.push(fn(this[i], i, this))
    }
    return newArr;
}

var newArr = originArr.map(function(item,index,arr) {
    return item * index
})
console.log(newArr)
