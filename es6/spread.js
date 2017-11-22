// 披萨小店
// 常量  es6 先考虑const let 
// var 基本不用 let 更加安全 块级作用域更深
// const 类型不能变 除了基本类型外 值是可变的
// const variable
const featured = ['Deep Dish','Pepperoni','Hawaiian'];
featured.push('芝士');
const specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
// const pizzas = featured.concat(specialty);
const pizzas = [...featured,'veg',...specialty];
console.log(pizzas);
const fridayPizzas = [...pizzas];


// console.log(featured);

// const name = 'zyry';
// name = 'cc';
// console.log(name);
// featured = {'hhh':'123'}