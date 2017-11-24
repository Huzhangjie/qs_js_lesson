// 继承
function extend(subClass, superClass) {
    // 手术  prototype
    // prototype指向
    // 类 F 函数就是对象 就是类
    var F = function() {};
    F.prototype = superClass.prototype;
    // js 原型链 prototype 对象会沿着 原型链一直去查找
    // 自身对象是否有getName 方法 如果没有 就会沿着这根链找其他对象 是否有方法
    subClass.prototype = new F();
    console.log(F);
    // constructor 就是构造函数 subClass
    // constructor属性 对象完全是由prototype 来指挥
    subClass.prototype.constructor = subClass;

    // 添加静态属性
    // subClass.superclass = superClass.prototype;
}
// 人类
// es5 中 Person 既是函数 也是构造函数
// 函数是对等的一种 即可执行的对象
// 函数是一等对象 可以上天入地 
// 作为表达式 var = function() {}
// 高阶函数 作为形参 function fun(cb) {cd()}
//         作为返回值 返回一个函数
// 基类
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

// 子类
function Author(name,books) {
    // 借
    // author类中得到属性的设置 
    // this -> author 对象指向
    // Person.call(this,name);
    this.name = name;
    this.books = books;
    
}
// Author.prototype.getName = function() {
//     return Person.prototype.getName.call(this);
// };
// Person prototype 方法 它都得有
// Person 的构造函数不能被改掉
extend(Author, Person);

Author.prototype.getBooks = function() {
    return this.books.join(',');
}
var nzh = new Author('nzh', 
        ['我知道的JS', 'JS玄学', '小倪子模式']
    );
console.log(nzh.getName());
console.log(nzh.getBooks());


// var me = new Person('Huzj');
// console.log(me.getName());