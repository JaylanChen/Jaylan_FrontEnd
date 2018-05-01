// JavaScript 继承

// 定义一个父类
function Person(name, age) {

    // 属性
    this.name = name || '匿名人士';
    this.age = age || 20;

    // 实例方法
    this.say = function () {
        console.log('我叫 ' + this.name + ' 年龄' + this.age);
    }
}

// 原型方法
Person.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};

/* ==========继承实现========== */

// 原型链继承
/*
原理：将父类的实例作为子类的原型
特点：
    非常纯粹的继承关系，实例是子类的实例，也是父类的实例
    父类新增原型方法/原型属性，子类都能访问到
    简单，易于实现
缺点：
    要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
    无法实现多继承
    ☆来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
    ☆创建子类实例时，无法向父类构造函数传参
*/
function Student() {

}
Student.prototype = new Person();
Student.prototype.name = '学生';

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //true
console.log(stu instanceof Student); //true

// 构造继承
/*
原理：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
特点：
    解决了1中，子类实例共享父类引用属性的问题
    创建子类实例时，可以向父类传递参数
    可以实现多继承（call多个父类对象）
缺点：
    实例并不是父类的实例，只是子类的实例
    只能继承父类的实例属性和方法，不能继承原型属性/方法
    ☆无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
*/
function Student(name) {
    Person.call(this);
    this.name = name || '学生';
}

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //false
console.log(stu instanceof Student); //true

// 实例继承
/*
原理：为父类实例添加新特性，作为子类实例返回
特点：
    不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
缺点：
    实例是父类的实例，不是子类的实例
    不支持多继承
*/
function Student(name) {
    var instance = new Person();
    instance.name = name || '学生';
    return instance;
}

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //true
console.log(stu instanceof Student); //false

// 拷贝继承
/*
特点：
    支持多继承
缺点：
    效率较低，内存占用高（因为要拷贝父类的属性）
    无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
*/

function Student(name) {
    var person = new Person();
    for (var p in person) {
        Student.prototype[p] = person[p];
    }
    Student.prototype.name = name || '学生';
}

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //false
console.log(stu instanceof Student); //true

// 组合继承
/*
原理：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
特点：
    弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
    既是子类的实例，也是父类的实例
    不存在引用属性共享问题
    可传参
    函数可复用
缺点：
    调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）,多消耗了内存
*/
function Student(name){
    Person.call(this);
    this.name = name || '学生';
}
Student.prototype = new Person();
Student.prototype.constructor = Student;

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //true
console.log(stu instanceof Student); //true

// 寄生组合继承
/*
原理：通过寄生方式，砍掉父类的实例属性，这样在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
特点：
    堪称完美
缺点：
    实现较为复杂
*/
function Student(name){
    Person.call(this);
    this.name = name || '学生';
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Person.prototype;
    //将实例作为子类的原型
    Student.prototype = new Super();
})()
Student.prototype.constructor =Student;

// 测试代码
var stu = new Student();
console.log(stu.name);
console.log(stu.eat('午餐'));
console.log(stu.sleep());
console.log(stu instanceof Person); //true
console.log(stu instanceof Student); //true
