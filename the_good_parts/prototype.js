 
// 类式继承 function person  可以new的
// JSON 不可 new
// 继承
// 人类 object
var Person = {
    name: 'default name',
    getName: function() {
        return this.name;
    }
}
// var me = Person;
// console.log(Person.name);
// me.name = 'Huzj';

// console.log(me.getName());
// console.log(Person.name);

// 原型式继承 区别于类式继承
// Person object js 中没有类 只有原型对象 一切皆对象 
function clone(obj) {
    // 闭包
    function F() {};
    console.log(obj.prototype);
    F.prototype = obj;// 原型链对象
    console.log(F.prototype);
    return new F;
}

var me = clone(Person);
me.name = 'Huzj';
console.log(me);