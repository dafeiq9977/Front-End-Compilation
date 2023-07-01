import fetch from 'node-fetch';

// generator函数用来定义一个可以分段执行的函数，在整个逻辑流程中，通过yield关键字打断点
// 函数可以分段执行，异步任务就可以写成同步的形式，比回调函数和promise链式写法逻辑清晰很多
function* gen() {
  const url = 'https://api.github.com/users/github';
  const data = yield fetch(url);
  console.log('1st: ', data);
  const res = yield data.json();
  console.log('2nd: ', res);
  return 'last one';
}

// generator函数执行后不执行函数体，而是返回一个可迭代对象，函数每一段执行都放在可迭代对象里，需要手动调用对象的next方法一段一段把整个逻辑执行完
const g = gen();

// 但是generator函数不会自执行，如果yield后面是一个异步任务，按照正确的逻辑执行下来的代码非常麻烦，于是有了async函数
const result = g.next();
// next函数返回一个对象，对象有一个value属性，value是yield或者return后面表达式的值
console.log('1st g.next() = ', result);

result.value.then((data)=>{
  const result2 = g.next(data);
  // next函数还可以接收一个参数
  console.log('2nd g.next() = ', result2);
  result2.value.then((json)=>{
    const result3 = g.next(json);
    console.log('3rd g.next() = ', result3)
  });
});


// 如果想把一个generator分段执行函数插入到另外一个generator函数的执行逻辑中，组合起来，就需要用到yield*关键字
function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

for(let v of bar()) {
  console.log(v);  // x a b y
}