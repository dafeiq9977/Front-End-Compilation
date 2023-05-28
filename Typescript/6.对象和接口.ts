// 对象类型的属性包含函数
export let person: {sayHi(): void; name: string;} = {
  sayHi: () => {},
  name: 'andy',
}

// 对象类型的属性包含函数并且函数有参数
let person2: {greet(content: string):void} = {
  greet(name){}
}


// 对象定义属性时写成多行可以去掉分号
let person3: {
  name: string
  age: number
} = {
  name: 'qpr',
  age: 18,
}
  

// 对象类型的可选属性
function myAxios(config: {url: string; method?: string}): number {
  return 1;
}


// 定义接口可以用来描述类型：只能为对象定义别名
interface IPerson {
  name: string;
  age: number;
  sayHi(): void;
}
// 类型别名:可以为任何类型定义别名
type IPerson2 = {
  name: string;
  age: number;
  sayHi(): void;
}


// 接口继承：接口可以继承，type不可以
interface Point2D {
  x: number
  y: number
}
interface Point3D extends Point2D {
  z: number
}


// 接口重复定义（可以在多个文件将一个接口的不同部分分开定义，接口最终会等于所有定义的总和）
interface I1 {
  name: string
}
interface I1 {
  age: number
}
let I1Type: I1 = {
  name: 'dafeiq',
  age: 20,
} 
