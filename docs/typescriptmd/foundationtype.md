## 类型含义

### js

javascript 本身提供类型支持，但有以下几个问题。

* js 是弱类型，类型可以根据值发生改变

```js
let b = 2
let c = a + b;

//改变值后，a 的类型是字符串，这是不稳定的
a = '嘻嘻';
c = a + b;

```
* 使用 js 不能自定义类型，比如下面的 name 我们想只允许是 嘻嘻、xixi 值，但实际上是可以传递任何值的


```js
function getTitle(name) {
	return name === '嘻嘻' ? '嘻嘻' : 'xixi';
}

getTitle('coderxixi') //不报错
```
* 如果换成 ts 就方便了，我们可以定义类型来修饰参数 name，使其值只能为 嘻嘻 或 xixi


```ts
function getTitle(name: '嘻嘻' | 'xixi') {
	return name === '嘻嘻' ? '嘻嘻' : 'xixi';
}

getTitle('coderxixi') //报错
```

### typescript

可以将 typescript 中的类型理解为一类值的集合，比如 '嘻嘻'、'xixi'都属于 string 类型集合

* 有些类型没有值比如 never，不能将任何值赋予 never 类型的变量
* 有些类型只有一个值，下面的hd变量的值只能是字符串a
* string、number 是无限集合


## 类型校验

下面没有使用类型限制时，函数参数传入字符串也是可以执行的，显示这个结果是不对的

```js
function sum(a,b){
	return a+b;
}

console.log(sum('a',3)); //结果为 a3

```

加上严格类型后，在编译环节就会提示错误

```ts
function sum(a:number,b:number){
	return a+b;
}

console.log(sum('a',3))
//报错 Argument of type 'string' is not assignable to parameter of type 'number'.
```

## 类型推断

当没有明确设置类型时，系统会根据值推断变量的类型

### 字符串

下例中系统会根据值推断 xi 变量为 string，当将 xi 设置为 18 的 number 类型时编译时将报误

```ts
let xi = 'xixi'; //let xi: string
xi = 18;
```

### 数值

ts 中的数值类型包括了小数、负数、整数

```ts
let xi =100 //let xi: number
xi = 100.1
xi = -101
```

### 布尔值

值为 true 或 false 会被推断为 boolean 类型

```ts
let state = true; //let state: boolean
```

### 数组

下面是数组类型的推断结果，表示数组内容值为字符串

```ts
const xi = ['liuxixi', '刘嘻嘻',100] //const xi: (string|number)[]
xi.push(100) //因为类型不允许，所以报错
```

下面会推断数组允许的值为字符串或数值

```ts
const xi = ['liuxixi', '刘嘻嘻',100] //const hd:(string|number)[]

xi.push(100,'xixi') //数组允许数值、字符串类型，所以编译通过

```

### 对象

ts 也可以推断字面量类型

```ts
const user = {name:'刘嘻嘻',age:18,open:true}
```
推断结果如下
```ts
const user: {
    name: string;
    age: number;
    open: boolean;
}
```

如果向对象中添加类型中不存在的属性将报错
```ts
const user = {name:'刘嘻嘻',age:18,open:true}
user.city = '广州'
//将产生错误 Property 'city' does not exist on type
```
## 配置文件

TS 支持对编译过程使用配置项自定义，因为下面要讲的有些类型在不同 TS 配置时有差异，所以我们要掌握 TS 配置文件的创建与使用。

### 初始化

执行以下命令创建配置项

```sh
tsc --init
```

然后执行以下命令使用配置项的定义进行监测

```sh
tsc -w
```
也可以使用 vscode 终端 > 运行任务 >typescript菜单运行监视


### 配置选项

配置|	说明
|----|----|
noImplicitAny|	禁止使用隐含的 any 类型，如函数参数没有设置具体类型
strictNullChecks|	开启时不否允许将 null、undefined 赋值给其他类型比如字符串
target	|转换成 JS 的版本
strict|	是否严格模式执行
module|	使用的模块系统

### 基本类型

#### 字符串
 
 字符串使用 string 来声明

 ```ts
const name:string = '刘嘻嘻'
 ```

#### 数值

在 TS 中不区分整数与浮点数，都使用 number 来声明

```ts
const age:number=18
```

#### 布尔

使用 boolean 来声明布尔类型

```ts
const isfalg:boolean = true
```

#### 数组

下面是对数组值类型为字符串

```ts
let xi:string[] =[]
xi.push('liuxixi','刘嘻嘻')
```

也可以使用泛型来声明数组
```ts
let hd:Array<string> =[]
xi.push('liuxixi','刘嘻嘻')
```
#### 元组

明确数组每个成员值类型的数组为元组

```ts
let xi: [string, number, boolean]
hd = ['xixi', 2023, true]
```

#### 对象

下面是声明对象类型但不限制值类型

```ts
let hd:object
hd ={name: '刘嘻嘻'}
hd = {} //使用字面量声明对象
hd = [] //数组是对象
hd = Object.prototype //原型对象
hd='xixi' //报错，改变了类型为字符串
```

限定对象值类型

```ts
let xiObj:{name: string,year:number}
xiObj={name:'刘嘻嘻',year:2023}
```
#### 索引签名

如果有明确的索引名称可以使用下面方式来定义签名

```ts
type INFO = {
  name: string
  city: string
}
let obj: INFO = {
  name: '刘嘻嘻',
  city: '广州'
}
```

如果定义任意属性的签名，可以使用索引签名完成

```ts
type INFO = {
  [key: string]: keyof any
}

let obj: INFO = {
  name: 'xixi'
}
```

也可以添加明确的索引

```ts
type INFO = {
  [key: string]: keyof any
  city: string
}

let obj: INFO = {
  name: '刘嘻嘻',
  city: '广州'
}
```

#### any

使用 any 指包含所有值的顶部类型，所以 any 不进行类型检查，等于关闭了 TS 对该变量的严格类型校验

* 使用 any 类型等同于使用纯 JavaScript 的开发方式
* any 类型是顶部类型，所有其他类型是他的子类型
* 使用 any 类型将失去 typescript 静态类型的强制检测
* 只有在描述一个根本不知道的类型时使用 any

可以将 any 视为所有类型的组合表示

```ts

let info:string|boolean|number;
info = 'xixi'

let obj:any
obj = 'xixi'
```

下面是设置基本 any 的示例

```ts
let info:any
//以下赋值不会报错
info='houdunren'
info=2010
info=true
info=[]
info ={}
info= class{}
```

在数组中使用 any 类型，可以设置任意类型的值

```ts
let infoList:any[] =['liuxixi','刘嘻嘻',2023,true]
```
也可以使用泛型的方式设置 any 类型数组

```ts
let infoList:Array<any> =['liuxixi','刘嘻嘻',2023,true]
```

为对象属性设置类型

```ts
let info:{
    name:any,
    year:any
}
//以下设置都不会报错
hd={name:'刘嘻嘻',year:2023}
hd={name:'liuxixi',year:'2023'}
``` 
any 太过宽泛所以不建议使用 它会丢失 TS 的严格类型校验，比如下面的示例并不会报错

```ts
let info:any
info.get() //不会报错
```

#### unknown

unknown 类型也是顶部类型这与 any 一样
* unknown 用于表示未知的类型
* 会进行 TS 的类型检查，any 不进行 TS 检查
* 使用 unknown 类型时可以使用 as 类型断言来明确类型

下面是 any 与 unknown 赋值上的区别，unknown 需要明确类型后赋值，any 则不需要


```ts
let name:any ='嘻嘻'
let info:unknown = 'houdurnen'

let a:string = name
let b:string=info //报错: 'unknown'未知类型不能赋值给'string'类型

// unknown 类型需要明确类型后赋值
let c:string=info as string
```

可以把任何值赋值给 unknown 类型，但在使用时需要指明类型


```ts
let info: unknown
info = 'xixi'
info = 100
//在使用时，TS不知道是什么类型，所以需要使用类型断言进行告之
let c = info as number + 20
```

使用 keyof 类型工具时 unknown 与 any 的区别

```ts
type INFO<T> = { [P in keyof T]: string }
//{[x: string]: string;}
type OBJ = INFO<any>
//结果为{}，因为 keyof unknow 是never，所以被忽略了
type XJ = INFO<unknown>
```

不同类型赋值时会报错

```ts
let name:string ='99'
let age:number =name as number //报错，TS 认为字符串转数值会出现错误
```

这里需要使用 unknown 做个中间层转换，将其先转换为 unknown 未知类型，再转换为 string 类型
```ts
let name:string ='99'
let age:number =name as unknown as number
```

any 与 unknown 在类型检查上是有区别的

```ts
let name: any
name.show();//any不进行类型检查，所以不会报错

let age: unknown
age.show();//unknown进行类型检查，unknown是未知类型所以报错
```

使用 any 类型 ts 不进行类型校验，所以在编译时不会报错，但执行编译后的 js 后会显示 NaN

```ts
function get(val: any) {
  val = val * 100;
  return val
}

console.log(get('xixi'));  //NaN
```
使用 unknown 类型时，结合 typeof 进行类型判断，根据不同类型使用不同逻辑

```ts
function get(val: unknown) {
  if (typeof val === 'number') {
    return val * 100;
  }
  return 0
}

console.log(get(100));  //NaN

```

#### null & undefined

null 与 undefined 也是变量类型，用于定义值为 null 或 undefined

```ts
let name:null =null
let age:undefined=undefined

console.log(age,name);
```
下面是函数返回值的使用

```ts
function getName():string |null{
    return null
}

console.log(getName());
```

strictNullChecks

当配置项启用 strictNullChecks 时，null 与 undefined 只能赋值给 void、null、undefined 类型

```ts
let name:string =undefined; //配置strictNullChecks=true 时将报错
```
在TS中null与undefined使用与js是有区别的，下面的代码是有问题的，因为null没有toLowerCase()方法。但默认是不报错的，在tsconfig.json配置文件中定义 "strictNullChecks":true 或 "strict": true 将会对代码进行报错提示。


```ts
function render(content: string) {
	console.log(content.toLowerCase())
}

render(null)
```

#### void

void 类型的值为 null 或 undefined，常用于对函数返回值类型定义

* 严格模式（tsconfig.json 配置中关闭strict）时，void 值只能是 undefined（有关 TS 配置会在后面章节介绍）
* 如果函数没有返回值请使用 void 类型，这会使用代码更易读，并可对不小心造成的函数返回内容进行校验
* 你也可以将 void 理解为对返回 null 或 undefined 的函数返回值声明
* TypeScript 中，不返回任何内容的 void 函数实际上返回的是 undefined

void 类型的值可以是 null 或 undefined，但如果 TS 配置开启了 strict 或 strictNullChecks则不允许 void 为 null

```ts
let name:void = undefined;
let age:void = null;
```
void 不允许设置其他类型

```ts
let name:void
name='xixi' //设置string 将报错
```
TypeScript 中，不返回任何内容的 void 函数实际上返回的是 undefined

```ts
function fun(): void {
}
let xj = fun();
xj = undefined
```
经过 void 限定后是不允许函数返回内容的，所以以下代码将报错

```ts
function fun():void{
    return 'xixi'
}
```

#### never

never 是任何类型的子类型，可以赋值给任何类型，没有类型是 never 的子类型。

never 类型的特点

* never 没有任何子类型，所以任何类型都不可以赋值给 never
* 函数抛出异常或无限循环时返回值是 never
* 可以将每个类型理解为某类值的集合，比如 number 类型包含所有数字，但 never 类型没有任何值。


```ts
function fun():never{
	throw new Error("出错了")
}
```
never 是所有类型的子类型，可以分配给任何类型，所以下面类型为 string
```ts
type INFO = never extends string ? string : boolean //string
```

其他类型不可以分配给 never 类型
```ts
type INFO = string extends never ? string : boolean //boolean
```

never 是所有类型的子类型，所以下面实际类型是 string | number

```ts
type INFO = never | string | number //string | number
```

####  联合类型

联合类型是多个类型的组合，使用 | 进行连接，| 类似于 javascript 中的 || 或运算符。

下面是为变量声明字符串或数值类型

```ts
let info:string | number = 'xixi'
info= 2023
```

下面是为数组声明多种类型

```ts
let infoList:(string | number | boolean)[]  = []
infoList.push('xixi',2023,true)
```
也可以使用泛型方式声明

```ts
let infoList:Array<string|number|boolean>  = []
infoList.push('xixi',2023,true)
```
函数参数是联合类型时，可以使用 typeof 进行判断后分别处理，ts 会根据条件进行类型推断

```ts
type INFO = {
  name: '刘嘻嘻'
}
function get(a: string | INFO) {
  if (typeof a === 'string') {
    a.includes('xixi')
  } else {
    return a.name
  }
}
```

### 交叉类型

交差类型是将 interface、object 等进行合并，组合出新的类型

* interface、object 进行属性合并
* 交叉时要保证类型是一致的，string 与 number 交叉将得到 never 类型

对象类型会进行属性合并

```ts
interface A { name: string }
type B = { age: number }
let c: A & B = { name: '刘嘻嘻', age: 18 }
```

两个类型有相同属性，且类型不同时，返回类型为 never

```ts
let a = { name: '刘嘻嘻' }
let b = { age: 18, name: true }
type INFO = typeof a & typeof b
//报错 不能将类型“string”分配给类型“never”。
let c: INFO = { age: 30, name: 'xixi' }
```

上面的问题可以使用 Pick 类型工具移除 name 索引

```ts
let a = { name: '刘嘻嘻' }
let b = { age: 18, name: true }
//通过Pick移除name索引
type INFO = typeof a & Pick<typeof b, 'age'>

let c: INFO = { age: 18, name: 'xixi' }
```
通过交叉类型将 User 类型组合成新的 Member 类型

```ts
type User = { name: string, age: number }
type Member = { avatar: string } & User
let member: Member = {
  name: 'liuxixi', avatar: 'xj.png', age: 18
}
```

### 函数

#### 函数定义
下面是 TS 自动推断的函数类型
```ts
let fun = ()=>'xixi'
hd='xixi' //更改类型为字符串后将报错
```
下面是使用显示类型定义函数 ，注意类型要使用大写的Function 这与 string/number/boolean 是有区别

```ts
let fun:Function
fun = ()=>'xixi'
console.log(fun());
```
#### 参数类型
下面是没有限定类型的函数定义，代码是不稳定的

```ts
function sum(a, b) {
    return a + b;
}

console.log(sum('a', 3));//a3
```
因为这是个计算函数，下面来设置参数类型，让代码更健壮。

* 因为限定了数值类型，所以函数参数必须传递数值

```ts
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2, 3));
```
如果参数是可选的，使用 ? 修饰

* 下面的ratio 参数可以不传
* 不传时ratio 值为undefined

```ts
function sum(a: number, b: number, ratio?: number) {
    return a + b;
}
console.log(sum(3, 3));
```

如果参数设置默认值了就不需要可选参数符号?了

```ts
function sum(a: number, b: number, ratio: number =0.8) {
    return (a + b) * ratio;
}
console.log(sum(3, 3));
```

#### 返回值类型
下面是系统自动推断的参数返回值为 number

```ts
function sum(a: number, b: number) {
    return a + b;
}
//函数结构为 function sum(a: number, b: number): number
```
我们也可以明确返回类型
```ts
function sum(a: number, b: number): string {
    return `计算结果是：${a + b}`;
}

console.log(sum(3, 3));
```
下面是箭头函数的表示方法

* 因为函数体只有一条语句，所以省略了{}

```ts
let sum = (a: number, b: number): string => `计算结果是：${a + b}`
```

当函数没有明确返回值时，使用 void 类型。TS 会自动推断，建议明确声明 void 类型

```ts
let hd = (): void => {
    console.log('xixi');
}
hd()
```

#### 参数声明

有时多个函数会用到相同的类型的参数，比如下面的示例

```ts
let addUser = (user: { name: string; age: number }): void => {
  console.log('添加用户')
}

let updateUser = (user: { name: string; age: number }): void => {
  console.log('更新用户')
}

updateUser({ name: '刘嘻嘻', age: 18 })
```

我们可以使用 type 对参数对象进行声明，通过这种复用的手段可以很好的优化代码

```ts

type userType = { name: string; age: number }

let addUser = (user: userType): void => {
  console.log('添加用户')
}

let updateUser = (user: userType): void => {
  console.log('更新用户')
}

updateUser({ name: '刘嘻嘻', age: 18 })
```

#### 剩余参数

下面的求合函数接收多个参数

```ts
function sum(...args: any[]): number {
    return args.reduce((s, n) => s + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));
```
下面通过第二个参数接收剩余参数，来实现数据追加的示例

```ts
function push(arr: any[], ...args: any[]): any[] {
    arr.push(...args)
    return arr;
}

const infoList: any[] = ['xixi']

console.log(push(infoList, '嘻嘻', 'xixi')); // [ 'xixi', '嘻嘻', 'xixi' ]
```

#### Tuple 元组

元组与数组类似，但元组要为每个值进行类型声明。

数组只是定义了值的类型，并没有约束某个位置的值必须是什么类型

```ts
const arr: (number | string | boolean)[] = ['xixi', 2023, true];

arr[1] = '刘嘻嘻' //不会报错，可以将原来是数值的更改为字符串，这是数组允许的类型范围
arr[10] = '前端小菜鸡' 			//不会报错，类型也是允许的
console.log(arr);

```

下面看使用元组来限制值的类型

```ts
const info: [string, number] = ['xixi', 2023]
hd[0] = true //报错，第一个值必须是字符串

```

#### 函数重载

函数的参数类型或数量不同时，会有不同的返回值，函数重载就是定义这种不同情况的函数。

##### 重载签名

重载签名是对函数多种调用方式的定义，定义不同的函数参数签名与返回值签名，但是没有函数体的实现。

* 使用函数时调用的是重载签名函数，在 vscode 代码跟踪时也会定位到重载签名
* 将从第一个重载签名尝试调用，向下查找是否有匹配的重载签名
* 定义重载签名可以在 idea、vscode 中拥有更好的代码提示

```ts
function getId(id: string): string;
function getId(id: number): number;
```
##### 实现签名

实现签名是是函数功能的实现，对参数与返回值要包扩符合函数签名的宽泛类型。

* 重载签名可以是多个，实现签名只能是一个
* 实现签名是最终执行的函数
* 用户在调用时调用的是重载签名
* 重载签名可被调用，实现签名不能被调用
* 实现签名要使用通用类型

```ts
//重载签名
function getId(id: string): string;
function getId(id: number): number;

//实现签名
function getId(id: unknown): unknown {
	if (typeof id === 'string') {
		return id;
	}
	return id;
}

//function getId(id: string): string (+1 overload)
getId('刘嘻嘻');
```