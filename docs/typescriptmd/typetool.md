## is

is 用于定义变量属于某个类型

下面判断时将出现类型错误提示

```ts
const isString = (x: unknown): boolean => typeof x === 'string'
function user(a: unknown) {
  if (isString(a)) {
		//error: 对象的类型为 "unknown"。
    a.toUpperCase()
  }
}
let a = 'ab'

user(a)
```

现在重新定义 isString 函数，使用 is 来定义变量为某个类型。

* x is string 表示如果函数返回值为 true，则 x 为 string 类型


```ts

const isString = (x: unknown): x is string => typeof x === 'string'
function user(a: unknown) {
  if (isString(a)) {
		//error: 对象的类型为 "unknown"。
    a.toUpperCase()
  }
}
let a = 'ab'
user(a)
```


## keyof

获取类、接口索引组成的联合类型
* keyof 可用于基本数据类型、any、class、interface、enum 等

任何类型都可以使用 keyof

```ts
type User = keyof string
let xj: User = 'match'
```

索引类型使用 keyof 时，获取索引名


```ts
type User = keyof { name: string, age: number }

let xj: User = 'name'

```

下面是获取对象的属性的函数类型定义

```ts
function getAttribute<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key]
}

const user = { name: 'liuxiix', age: 18 }
getAttribute(user, 'name')

```

我们也可以用泛型定义索引类型

```ts

function getAttribute<T, D extends keyof T>(obj: T, key: D): T[D] {
  return obj[key]
}
const user = { name: 'liuxixi', age: 18 }
getAttribute(user, 'name')
```

### typeof
使用 typeof 可获取变量的类型，下面是获取字符串变量的类型
```ts
let user = '刘嘻嘻'

// type User = string
type User = typeof user
```
下面使用 typeof 获取对象的

```ts
let user = { name: '后盾人', age: 18 }

/**
 type User = {
  name: string;
  age: number;
 */
type User = typeof user
```


keyof 与 typeof 结合定义获取对象属性的函数

```ts
function getAttribute(obj: object, key: string) {
  return obj[key as keyof typeof obj]
}

const user = { name: 'liuxiix' }
getAttribute(user, 'name')

```

## in


in 用于遍历接口或联合类型的属性

* K in keyof T 指 K 类型为 keyof T 获取的 T 类型索引组成的联合类型

```ts
type USER = { name: string, age: number }

type MEMBER<T> = {
	[K in keyof T]: T[K]
}

const user: MEMBER<USER & { address: string }> = {
	age: 18, name: '刘嘻嘻', address: '广州',
}
```

## extends

extends 在 TS 中拥有多个特性

### 类型继承

extends 实现类型的继承

```ts
type XIANGJUNDASHU = { name: string }

interface User extends XIANGJUNDASHU {
	age: number
}

const hd: houdunren = { age: 18, name: 'liuxixi' }

```

extends 可用于泛型的类型限定，下例中 T 必须包含 id、render 属性，即 T 类型可赋予 extends 右侧类型

```ts
function user<T extends { id: number; render(n: number): number }>(arr: T[]) {
	arr.map((a) => a.render(a.id))
}

user([{ id: 1, render(n) { return n } }])

```

### 类型条件判断

extends 用于条件判断来决定返回什么类型，A extends B ? true:false。如果 A（狭窄类型） 可以赋予 B（宽泛类型） 类型则为 true。

* 下例的 user 变量值必须为 false，因为 User 不包含 XIANGJUNDASHU 类型


```ts

type XIANGJUNDASHU = { name: string, age: number }

type User = { name: string }

type HDCMS = User extends XIANGJUNDASHU ? true : false

const user: HDCMS = false
```

下面是联合类型的条件判断

```ts
type Info = string

type User = string | number

const user: User extends Info ? string : boolean = false //boolean

const info: Info extends user ? string : boolean = '刘嘻嘻' //string

```

根据联合类型过滤掉指定索引

```ts
type User = { name: string, age: number, get(): void };

type FilterObjectProperty<T, U> = {
  [K in keyof T as Exclude<K, U>]: T[K]
}

type User = FilterObjectProperty<User, 'name' | 'age'>


```

过滤掉指定的类型，以下代码含有下面几个含义

* 根据类型获取索引组合成的联合类型
* 根据新的联合类型提取出指定的索引，组合成新的类型


```ts

type USER = { name: string, age: number, get(a: string): void }

type FilterProperty<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K
}[keyof T]

type UserType = Pick<USER, FilterProperty<USER, Function | number>>
```

### 泛型条件分配

如果泛型是普通类型，则与上面一样也是判断左侧类型是否可赋予右侧类型
```ts
type XIANGJUNDASHU = string

type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean

const hd: HDCMS<string> = '刘嘻嘻' //string
```
如果 extends 是泛型类型，并且传入的类型是联合类型。则分别进行判断，最后得到联合类型。

```ts
type XIANGJUNDASHU = string

type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean

const hd: HDCMS<string | number> = false //string | boolean


```

条件判断也可以嵌套使用


```ts
type XIANGJUNDASHU = string

type USER = string | number

type HDCMS<T> =
	T extends XIANGJUNDASHU ? string :
	T extends USER ? symbol : boolean

const hd: HDCMS<string | number> = 'liuxixi'

```


## infer


* infer 只能在 extends 中使用
* infer 的类型变量，只能在 extends 条件的 true 中使用
下面使用 infer 推断属性值类型


```ts
type USER= { name: string, age: number }

type AttrType<T> = T extends { name: infer M, age: infer M } ? M : T

type valueType = AttrType<USER> //string | number
```


下面使用 infer 获取值类型


```ts
type USER = { name: string, age: number, get(a: string): void }

type GetType<T> = {
  [K in keyof T]: T[K] extends (infer U) ? U : K
}[keyof T]

type valueType = GetType<USER>;


```

下面是获取函数返回值类型

```ts
type USER = (n: string) => number[]

type GetFunctionReturnValue<T> = T extends ((...args: any) => (infer U)[]) ? U : T


type valueType = GetFunctionReturnValue<USER>;
```

## Record

Record 常用于快速定义对象类型使用

下面我们来手动实现一个 Record，RECORD 类型的第一个参数为索引，第二个为类型

```ts
type RECORD<K extends string | number | symbol, V> = {
  [P in K]: V
}

type USER = RECORD<'name' | 'age', string | number>

const user: USER = { name: "刘嘻嘻", age: 18 }

```

typescript 原生已经提供了 Record 类型，下面定义 MEMBER 类型，索引为字符串，值为任何类型

```ts

type USER = Record<'name' | 'age', any>

const user: USER = { name: "liuixix", age: 18 }
```

## Pick


pick 可以用于从属性中挑选出一组属性，组成新的类型。

下面定义 pick 类型用于从 USER 类型中挑选出 name 与 age 类型。


```ts
type USER = { name: string, age: number, skill: string }
type PICK<T, U extends keyof T> = {
  [P in U]: T[P]
}

type INFO = PICK<HOUDUNREN, 'name' | 'age'>
const xj: INFO = { name: '刘嘻嘻', age: 18 }

```

同样 typescript 已经原生提供了 Pick 类型，所以我们不用像上面那样自己定义了

```ts
type USER= { name: string, age: number, skill: string }

type INFO = Pick<HOUDUNREN, 'name' | 'age'>
const xj: INFO = { name: '刘嘻嘻', age: 18 }


```

## Omit

从类型中过滤掉指定属性，这与 Pick 类型工具功能相反

```ts
type USER = { name: string, age: number, city: string }

type MyOmit<T, U> = Pick<T, {
  [K in keyof T]: K extends U ? never : K
}[keyof T]>

type XJ = MyOmit<USER, 'name' | 'age'> //{city:string}

```
typescript 已经提供了类型工具 Omit

```ts
type USER= { name: string, age: number, city: string }

type XJ = Omit<USER, 'name' | 'age'> //{city:string}

```

## Partial

下面定义 Partial 类型，用于将全部属性设置为可选

```ts

type USER = { name: string, age: number }

type PARTIAL<T> = {
	[P in keyof T]?: T[P]
}

const hd: PARTIAL<USER> = { name: 'liuxixi' } // {name?:string,age?:number}
```
Typescript 原生提供了 Partial 的支持，所以我们不用自己定义了

```ts
type USER = { name: string, age: number }

const user: Partial<USER> = { name: 'liuxixi' }
```