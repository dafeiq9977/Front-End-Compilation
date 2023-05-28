//  交叉类型，将多个类型组合成一个类型
interface Person {name: string}
interface Contact {phone: string}
type PersonDetail = Person & Contact


// 交叉类型和接口继承的区别
interface A {
  fn: (value: number) => string
}
// interface B extends A {           // 报错 interface不能有同名属性
//   fn: (value: string) => string
// }
interface B{
  fn: (value: string) => string
}
// 对于同名属性，交叉类型没有错误，并且会合并冲突属性的类型
type C = A & B;