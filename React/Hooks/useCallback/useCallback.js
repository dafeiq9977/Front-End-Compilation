console.log(React);
const useState = React.useState;
const useCallback = React.useCallback;

/*
  useCallback:
    用法：
      arg1: 一个函数，这个函数是希望在一定条件下组件重新渲染时可以不被JS引擎重新创建，而是使用之前组件渲染时创建过的
      arg2: 依赖数组，React每次使用Object.is()依次比较数组每一项，如果某一项发生变化了，就创建新的函数返回，不传这个参数表示每次都创建新的，传空的数组表示永远用旧的
*/
let funcReference = null;
function TestUseCallBack() {
  const random = Math.random() * 1000;
  const [btn, setBtn] = useState(777);
  const callBackFunc = useCallback(() => {
    setBtn(random);
  });
  funcReference &&
    console.log("是否创建了新的回调函数？ ", !(funcReference === callBackFunc));
  funcReference = callBackFunc;
  return (
    <div>
      <button onClick={callBackFunc}>{Math.floor(btn)}</button>
    </div>
  );
}

root.render(<TestUseCallBack />);
