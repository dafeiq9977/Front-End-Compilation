// keyof返回对象类型所有属性字符串的联合类型
type KeyOf = {
  a: number;
  b: string;
}
type ko = keyof KeyOf;    // ko是 'number'|'string' 类型

// keyof运算符还会保留属性的可选修饰符
type SomeType = {
  a: number
  b?: string
}
type Type4 = {
  [k in keyof SomeType]: number     // Type4的b属性也是可选的
}