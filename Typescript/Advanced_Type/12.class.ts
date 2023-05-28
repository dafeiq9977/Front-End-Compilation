// TS中的class，不仅提供了class的语法功能，也作为一种类型存在
class Person {
  age: number = 10
  gender = 'man'

  constructor(age: number, gender: string) {
    this.age = age;
    this.gender = gender;
  }
} 
const person5 = new Person(18, 'man');
console.log(person5);


// 类的继承
class Animal {
  move() {
    console.log('走两步');
  }
}
class Dog extends Animal {
  name = '二哈'
  bark() {
    console.log('汪汪');
  }
}
const dog = new Dog();
dog.move();
dog.bark();


// implements实现接口
interface Singable {
  sing():void
  name: string
}
class Person6 implements Singable {
  sing() {

  }
  name: 'jack'
}


// class的可见性修饰符: public protected private(public是默认的修饰符)
class Animal2 {
  public move() {

  }
}


// class readonly的使用
class Person3 {
  readonly age: number = 18
  constructor(age: number){
    this.age = age;
  }
}


// 类型兼容(属性多的类型可以赋值给属性少的类型, class和interface都可以)
class Point {
  x: number
  y: number
}
class Point2D {
  x: number
  y: number
}
class Point3D {
  x: number
  y: number
  z: number
}
const p1: Point = new Point3D();


