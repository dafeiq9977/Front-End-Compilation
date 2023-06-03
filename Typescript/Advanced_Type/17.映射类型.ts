type PropKeys = 'x' | 'y' | 'z'
type Type1 = { [key in PropKeys]: number }

type IPropKeys = 'x' | 'y' | 'z'
// in操作符不能在接口中用
// interface IType1 { [key in PropKeys]: number }


// keyof的使用
type KeyofProps = { a: number; b: string; c: boolean};
type Type3 = { [key in keyof KeyofProps]: number };