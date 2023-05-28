function add(num1: number, num2: number): number {
  return 0;
}


// 只能用于函数表达式
const add2: (num1: number, num2: number) => number = function(num1, num2) {
  return 0;
}
const add3: (num1: number, num2: number) => number = (num1, num2) => {
  return 0;
}


// void类型
function greet(name: string): void{

}


// 可选参数 (只能放到参数的最后)
function mySlice(start: number, end?: number): void{

}


// 参数的默认值(可选参数没有默认值)
function mySlice2(start: number = 0, end?: number): void {
  console.log(start, end);
}


// 剩余参数
function add4(first: number, ...rest: number[]): number {
  return first + rest.reduce((pre, cur) => pre + cur, 0);
}


// 指定函数里this的类型
function sayHello(this: {name: string, age: number}) {
  console.log(this.name)
}

// sayHello() 这行代码会报错
const person = {name: 'andy', age: 20};
sayHello.call(person);


// 函数的重载（兼容性）
// 参数数量不同的重载(函数的返回值，函数参数的类型都相同，仅仅是参数数量不同)
type manyArgs = (arg1: string, arg2: number, arg3: {name: string, age: number}) => void;
function callManyArgs(func: manyArgs){

}
callManyArgs(()=>{});     // 不传参数，正确
callManyArgs((arg1: string)=>{});     // 传一个参数，正确
callManyArgs((arg1: string, arg2: number)=>{});     // 传二个参数，正确
callManyArgs((arg1: string, arg2: number, arg3: {name: string, age: number})=>{});      // 传三个参数，正确

// 参数的类型不同(返回值，各个参数必须和最后实现的定义兼容)，TS匹配的时候从前往后匹配
function differentArgType(arg1: boolean): void;
function differentArgType(arg1: string): number;
function differentArgType(arg1: any): void|number {
  if( typeof arg1==='boolean' ) return;
  else if( typeof arg1==='string' ) return 1;
}
// differentArgType(1);