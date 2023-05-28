// 基本用法
function id<T>(value: T): T {
  return value;
}
id<number>(10)

// TS编译器自动推断泛型类型
let num: number = 10;
id(num);
id('a');    // 推断出的是'a'字面量类型


// 泛型约束（收缩泛型的范围）
function id2<Type>(value: Type[]): Type[] {
  console.log(value.length);
  return value;
}

interface ILenght {length: number}
function id3<Type extends ILenght>(value: Type): Type{
  console.log(value.length);
  return value;
};


// 多个泛型变量
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key){
  return obj[key];
};
let person11 = {name: 'jack', age: 18};
getProp(person11, 'name');


// 泛型接口
interface IdFunc<Type> {
  id: (value: Type) => Type
}


// 泛型类
class GenericNumber<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
  constructor(init: NumType){
    this.defaultValue = init;
  }
}


// 泛型工具类
interface Props {
  name: string
  age: number
  school: string
}

// Partial<Type>: 将一个对象的所有属性设置为可选的
type PartialProps = Partial<Props>;


// Readonly<Type>: 将一个对象类型所有属性设置为只读的
type ReadonlyProps = Readonly<Props>;

// Pick<Type, Keys>: 从对象类型中选择其中某些属性，组成新的类型
type PickProps = Pick<Props, 'name'|'age'>

// Omit<Type, Keys>: 从对象类型中选择其中某些属性去除，组成新的类型
type OmitProps = Omit<Props, 'name'|'age'>

// Record<Keys, Type>: 指定对象有哪些属性，属性的类型是什么
type RecordProps = Record<'name'|'age', string[]>