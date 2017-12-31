// function XC(name, haircut){
//     this.name = name
//     this.haircut = haircut;
// }

// XC.prototype.hobbies = function() {
//     console.log("开心就好")
// }

// var xc = new XC('小蔡', '飞刘海')
// var xc2 = new XC('小蔡', '爆炸头')
// xc.hobbies()
// xc2.hobbies()

// 如何在多次new时 只得到一个对象 单例
// class new 

// var Singleton = function(name) {
//     this.name = name;
//     this.instance = null;
// }
// // static 方法 静态方法 在类上调用 不需要new 
// // 废掉constructor new
// Singleton.getInstance = function(name) {
//     if(!this.instance) {
//         this.instance = new Singleton(name);
//     }
    
//     return this.instance;
// }



class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        
        return this.instance;
    }
}

var a = Singleton.getInstance('sven1')
// var a = new Singleton('sven1')
var b = Singleton.getInstance('sven2')
// var b = new Singleton('sven2')
// 要使 a===b 引用式赋值
console.log(a === b)
console.log(a.name)
console.log(b.name)