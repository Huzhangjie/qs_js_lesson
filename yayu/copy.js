// const arr = [1,2,3]
// Array.prototype.concat
// // 会返回一个新的数组
// const arr2 = arr.concat();


// arr2[1] = 4;
// console.log(arr)
// console.log(arr2)

// var arr = ['old', 1, true, null, undefined]
// var new_arr = arr.concat()
// new_arr[0] = 'new'
// console.log(arr)
// console.log(new_arr)
// 基本类型

var arr = new Array(6);

arr[0] = "George"
arr[1] = "Jonhn"
arr[2] = "tms"
arr[3] = "clearlove"
arr[4] = "mlxg"
arr[5] = "martin"
// console.log(arr.slice())
// var newArr = arr.slice();
// console.log(newArr)
// console.log(arr.slice(-4, -1))
// js 数组 删除数组项目 也可添加
console.log(arr)
// index 个数 形参
// 数组方法有两派 改变原数组与否
arr.splice(2, 0, 'luochi')
console.log(arr)
// 借用数组 concat合并 slice切割
// 返回新数组的方式， 来实现浅拷贝