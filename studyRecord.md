## Typescript

#### 1、抽象Class、Function

```
// 抽象类，不能用来创建对象，只能用来创建类
abstract CLass Person{
    // 抽象方法
abstract sayHello() // 子类必须重写该方法，和static方法类似
}
```


#### 2、Type和Interface

```
// type描述一个对象的类型
type myType={
    name:string,
    age:number
}

interface myInterface={
    name:string,
    age:number
}
```
```
## 相同点

都能描述对象或函数
都支持扩展
type 使用 &
interface 使用 extends
支持交叉扩展
interface A extends TypeB
type AA = InterfaceBB & {}


## 不同点

type 可以是基本类型、联合类型、元组类型
interface 会自动合并，type 不会并且报错


## 使用场景

type 
都行
interface
需要自动合并时，eg. 定义window扩展属性


## 总结

不知道使用什么的时候就用type
要扩展类型属性的时候用interface 
```

#### 3、属性的封装public、private，protected
```
Class Person{
    // 只能在内部被访问/修改 _name
        // 可以添加方法使得外部访问
    private _name:string='luoli'
    
    // TS中使用getter来获取私有属性
    get name(){
        return this._name
    }
    
    // protected只能在类里面访问，实例无法访问
    protected age:number= 12
}

const per extends Person(_name:'abc'){
    console.log(per._name) // 调用getter获取private属性

    per.age  // 实例无法访问protected属性
}
```

#### 4、泛型

- 泛型有指定泛型、未指定泛型，用来约束属性属于某一个类型范围中
// 定义函数或者类时，遇到类型不明确使用泛型
```
Function fn<T>(a:T):T{
    return a
}

// eg.1
fn(a:10)   // 不指定泛型：自动推断出来 T是 number，则后续必须是number，但不一定都能推断出来
fn<string>(a:'sss')   // 指定泛型
```