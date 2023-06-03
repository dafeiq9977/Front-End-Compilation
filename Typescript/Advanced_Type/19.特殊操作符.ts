// 非空断言操作符（从类型中剔除null和undefined）
const btn = document.getElementById('id')!;   // btn是HTMLElement类型

// 可选链表达式(遇到null或者undefined停止表达式的运算)   ?.


// 空值合并运算符 ??（a ?? b  a不等于null或undefined返回a，否则返回b）


// 移除属性的可选符：因为keyof会保留属性的可选符信息，可以通过减号(-)移除属性的可选符
type MyRequired<T> = {
  [k in keyof T]-?: T[k];
}

// 问号运算符和extends结合使用（注意：如果T1是联合类型的话，会把联合类型分别带入计算）
// T1 extends T2 ? T3 : T4



// 数字的下划线分隔符
const longNumber = 1_23_456;
