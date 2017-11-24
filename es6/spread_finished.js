'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 披萨小店
// 常量  es6 先考虑const let 
// var 基本不用 let 更加安全 块级作用域更深
// const 类型不能变 除了基本类型外 值是可变的
// const variable
var featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
var specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
// const pizzas = featured.concat(specialty);
var pizzas = [].concat(featured, ['veg'], specialty);
console.log(pizzas);
var fridayPizzas = [].concat(_toConsumableArray(pizzas));

// console.log(featured);

// const name = 'zyry';
// name = 'cc';
// console.log(name);
// featured = {'hhh':'123'}
