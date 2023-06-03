interface IType {
  name: { surname: string; lastname: string }
  age: number
}
// 计算出接口属性的类型
type name = IType['name'];
type age = IType['age'];


type IType2 = {
  name: { surname: string; lastname: string }
  age?: number
}
// 计算出type类型属性的类型
type name2 = IType2['name'];
type age2 = IType2['age'];
// 同式获取多个对象类型的属性
type ageAndName = IType2['name' | 'age'];
type allProps = IType2[keyof IType2];

type keyofAny = keyof any;  // string | number | symbol