// const name = 'Snackers';
// const age = '2';

// const dog = `My dog is ${name},${age} years old.`;
// console.log(dog);

// 将数据变成界面
// const beer = {
//     name: 'Belgian Wit',
//     brewery: 'Steam Whistle Brewery',
//     keyword: ['pale','cloudy','spiced','crisp']
// };

// function renderKeywords(keywords) {
//     return `
//         <ul>
//            ${keywords.map(keyword => 
//               `<li>${keyword}</li>`).join('')}
//         </ul>
//     `
// }

// const markup = `
//     <div class="beer">
//         <h2>${beer.name}</h2>
//         <p class="brewery">${beer.brewery}</p>
//         ${renderKeywords(beer.keyword)}
//     </div>
// `;
// // 可声明的HTML标记 运行在JS
// document.body.innerHTML = markup;

const dogs = [
    {name: '小白', age: 2},
    {name: '黑', age: 2},
    {name: '小飞', age: 3}
];
// map 函数, 属于dogs 数组
// iterator 迭代 全部查询了一遍
// 箭头函数 dog为参数 一个参数  括号可省
// 函数只有一句代码 可省大括号 return
document.body.innerHTML = dogs.map(dog => 
    // console.log(dog)
     `
        <li>${dog.name} is ${dog.age} years old</li>
    `
).join('');
// .join方法 将数组推平 元素一个一个列出
