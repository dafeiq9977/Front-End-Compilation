import fetch from 'node-fetch';

// async函数专门用来写一段会异步执行的代码，返回值是一个promise对象，这个promise对象会等待函数内部所有逻辑执行完，才会改变状态

async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log);

// await后面是一个Promise对象，如果不是，就会用Promise.resolve转化成Promise对象

// asyn函数内部可以用try catch代码块捕获Promise的错误，否则如果await后面的Promise对象reject，会结束async函数的执行

// async函数用generator函数的实现
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    var gen = genF();
    function step(nextF) {
      try {
        var next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function (v) {
        step(function () { return gen.next(v); });
      }, function (e) {
        step(function () { return gen.throw(e); });
      });
    }
    step(function () { return gen.next(undefined); });
  });
}
