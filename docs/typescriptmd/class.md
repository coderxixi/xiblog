## 类的定义
下面是使用 TS 约束属性并实例化对象


```ts
class User {
    name: string
    age: number
    constructor(n: string, a: number) {
        this.name = n
        this.age = a;
    }

    info(): string {
        return `${this.name}的年龄是 ${this.age}`
    }
}

const hd = new User('liuxixi', 18);
const xj = new User('刘嘻嘻', 18)

```

## 修饰符

### public

修饰符 public，指公开的属性或方法

* 默认情况下属性是 public （公开的），即可以在类的内部与外部修改和访问
* 不明确设置修饰符即为 public

```ts
class User {
    public name: string
    public age: number
    constructor(n: string, a: number) {
        this.name = n
        this.age = a;
    }

    public info(): string {
        return `${this.name}的年龄是 ${this.age}`
    }
}

const hd = new User('liuxixi', 18);
const xj = new User('刘嘻嘻', 18)

hd.name = "前端小菜鸡"

for (const key in hd) {
    if (hd.hasOwnProperty(key)) {
        console.log(key);
    }
}
```

### protected
protected 修饰符指受保护的，只允许在父类与子类使用，不允许在类的外部使用
```ts
class Info {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}
class User extends Hd {
    constructor(name: string) {
        super(name)
    }

    public info(): string {
        return `你好 ${this.name}`
    }
}

const info = new User('刘嘻嘻');

console.log(info.info());
console.log(info.name); //属性是 protected 不允许访问
```
### private

private 修饰符指私有的，不允许在子类与类的外部使用

父类声明 private 属性或方法子类不允许覆盖

```ts
class Info{
    private name: string
    constructor(name: string) {
        this.name = name
    }
    private info(): void { }
}
class User extends Info {
    constructor(name: string) {
        super(name)
    }

    public info(): void {

    }
}

```

子类不能访问父类的 private 属性或方法

```ts
class Info {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}
class User extends Info {
    constructor(name: string) {
        super(name)
    }

    public info(): string {
        return `你好 ${this.name}` //属性是 private 不允许子类访问
    }
}

```
子类更改父类方法或属性的访问修饰符有些限制的

* 父类的 private 不允许子类修改
* 父类的 protected 子类可以修改为 protected 或 public
* 父类的 public 子类只能设置为 public

```ts
class Info {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    public info(): void { }
}
class User extends Info {
    constructor(name: string) {
        super(name)
    }
    protected info(): string {
        return 'https://github.com/coderxixi/xiblog'
    }
}

```

### readonly

readonly 将属性定义为只读，不允许在类的内部与外部进行修改


* 类似于其他语言的 const 关键字

```ts
class Axios {
    readonly site: string = 'https://xixi.com/api'
    constructor(site?: string) {
        this.site = site || this.site
    }
    public get(url: string): any[] {
        console.log(`你正在请求 ${this.site + '/' + url}`)
        return []
    }
}

const instance = new Axios('https://www.xixi.com')
instance.get('users')

```
## constructor

构造函数是初始化实例参数使用的，在 TS 中有些细节与其他程序不同

我们可以在构造函数 constructor 中定义属性，这样就不用在类中声明属性了，可以简化代码量

* 必须要在属性前加上 public、private、readonly 等修饰符才有效

```ts
class User {
    constructor(
        public name: string,
        public age: number
    ) {}

    public info(): string {
        return `${this.name}的年龄是 ${this.age}`
    }
}

const hd = new User('刘嘻嘻', 18);

```

## static

static 用于定义静态属性或方法，属性或方法是属于构造函数的

* 静态属性是属于构造函数的，不是对象独有的，所以是所有对象都可以共享的

### 语法介绍
下面是 static 使用的语法


```ts
class Person {
    static name: string = ''

    static getName() {
        return '你是谁？' + name
    }
}
console.log(Person.getName());
```

### 单例模式

当把 construct 定义为非 public 修饰符后，就不能通过这个类实例化对象了。

```ts
class User {
    protected constructor() {

    }
}

const hd = new User();//报错
```
我们可以利用这个特性再结合 static 即可实现单例模式，即只实例化一个对象

```ts
class User {
    static instance: User | null = null;
    protected constructor() { }

    public static make(): User {
        if (User.instance == null) User.instance = new User;

        return User.instance;
    }
}

const person = User.make();
console.log(person);
```

## get/set

使用 get 与 set 访问器可以动态设置和获取属性，类似于 vue  中的计算属性


```ts

class User {
    private _name
    constructor(name: string) {
        this._name = name
    }
    public get name() {
        return this._name;
    }
    public set name(value) {
        this._name = value
    }
}

const hd = new User('liuxixi')
hd.name = 'xixi'
console.log(hd.name);
```
## abstract
抽象类定义使用 abstract 关键字，抽象类除了具有普通类的功能外，还可以定义抽象方法

* 抽象类可以不包含抽象方法，但抽象方法必须存在于抽象类中
* 抽象方法是对方法的定义，子类必须实现这个方法
* 抽象类不可以直接使用，只能被继承
* 抽象类类似于类的模板，实现规范的代码定义


```ts

class Animation {
    protected getPos() {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation {
    public move(): void {

    }
}

class Player extends Animation {
    public move: void{

}
```
上例中的子类都有 move 方法，我们可以在抽象方法中对其进行规范定义

* 抽象方法只能定义，不能实现，即没有函数体
* 子类必须实现抽象方法
```ts
abstract class Animation {
    abstract move(): void
    protected getPos() {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation {
    public move(): void {

    }
}

class Player extends Animation {
    public move(): void {

    }
}

```

子类必须实现抽象类定义的抽象属性
```ts
abstract class Animation {
    abstract move(): void
    abstract name: string
    protected getPos() {
        return { x: 100, y: 300 }
    }
}
class Tank extends Animation {
    name: string = '坦克'
    public move(): void {

    }
}

class Player extends Animation {
    name: string = '玩家'

    public move(): void {

    }
}
```

抽象类不能被直接使用，只能被继承
```ts
abstract class Animation {
    abstract move(): void
    protected getPos() {
        return { x: 100, y: 300 }
    }
}
const Info = new Animation(); //报错，不能通过抽象方法创建实例
```
## Interface

接口用于描述类和对象的结构

* 是项目中不同文件使用的对象保持统一的规范
* 使用接口也会有规范的代码提示

### 抽象类
下面是抽象类和接口的结合使用

```ts
interface AnimationINterface {
  name:string
  move:void
}
abstract class Animation {
  protected getPos():{x:number;y:number}{
    return {x:100,y:300}
  }
}
class Tank extends Animation implements AnimationInterface {
    name: string = '敌方坦克'
    public move(): void {
        console.log(`${this.name}移动`)
    }
}

class Player ectends Animation {
  name:string='玩家'
  public move():void {
    console.log(`${this.name}坦克移动`)
  }
}
const T = new Tank()
const P = new Player()
T.move()
P.move()
```

### 对象

下面使用接口来约束对象


```ts
interface UserInterface {
    name:string,
    age:number,
    info(oter:string):string
}
const info:UserInterface={
    name:'刘嘻嘻',
    age:18,
    isLock:false,
    info(odle:string){
        return `${this.name}${this.age}岁了`
    }
}
```
如果尝试添加一个接口中不存在的函数将报错，移除接口的属性也将报错。

```ts
const info: UserInterface = {
    getName() { }  //“getName”不在类型“UserInterface”中
}
```
如果有额外的属性，使用以下方式声明，这样就可以添加任意属性了
```ts
interface UserInterface {
    name: string;
    age: number;
    isLock: boolean;
    [key:string]:any
}
```

### 接口继承

下面定义动物结束的接口 AnimalInterface DogInterface 接口可以使用 extends 来继承该接口

```ts
interface AnimalInterface {
    cry(): void
}

interface DogInterface extends AnimalInterface {
    name: string
    move(): void
}
class Animal {
    protected getName(): { name:string } {
        return name
    }
}
class Dog extends Animal implements AnimalInterface {
    name: string = '小黑'
    public attribute(): void {
        console.log(`${this.name}对颜色是黑色`)
    }
    cry() {
        console.log('dogdog');
    }
}

class Pig extends Animal implements AnimalInterface {
    name: string = '小狗'
    public attribute(): void {
        console.log(`${this.name}的颜色是天空蓝`)
    }
     cry() {
        console.log('PigPig');
    }
}

const d = new Dog()
const p = new Pig()
d.move()
p.move()

```

### 函数 

下面是对函数参数的类型约束

```ts

interface UserInterface {
    name: string;
    age: number;
    isLock: boolean;
}

function lockUser(user: UserInterface, state: boolean): UserInterface {
    user.isLock = state;
    return user;
}

let user: UserInterface = {
    name: '刘嘻嘻', age: 18, isLock: false
}

lockUser(user, true);
console.log(user);
```

#### 函数声明

下面使用 UserInterface 接口约束函数的参数与返回值

* 会根据接口规范提示代码提示
* 严格约束参数类型，维护代码安全

#### 函数参数

下面是对函数参数的类型约束

```ts
interface UserInterface {
    name: string;
    age: number;
    isLock: boolean;
}

function lockUser(user: UserInterface, state: boolean): UserInterface {
    user.isLock = state;
    return user;
}

let user: UserInterface = {
    name: '刘嘻嘻', age: 18, isLock: false
}

lockUser(user, true);
console.log(user);

```

#### 函数声明

使用接口可以约束函数的定义

```ts
interface Pay {
    (price: number): boolean
}
const getUserInfo: Pay = (price: number)=>true

```

### 构造函数
下面的代码我们发现需要在多个地方使用对 user 类型的定义
```ts
class User {
    info: { name: string, age: number }
    constructor(user: { name: string, age: number }) {
        this.info = user
    }
}
const user = new User({ name: 'liuxixi', age: 18 })
console.log(user);
```
使用 interface 可以优化代码，同时也具有良好的代码提示

```ts
interface UserInterface {
    name: string,
    age: number
}
class User {
    info: UserInterface
    constructor(user: UserInterface) {
        this.info = user
    }
}
const user= new User({ name: 'liuxixi', age: 18 })
console.log(user);

```

### 数组

对数组类型使用接口进行约束
```ts
const info: UserInterface = {
    name: 'liuxixi',
    age: 18,
    isLock: false
}

const user: UserInterface = {
    name: '刘嘻嘻',
    age: 18,
    isLock: false
}

const users: UserInterface[] = [];
users.push(info, user)
console.log(users);

```

### 枚举
下面是使用枚举设置性别

```ts
enum SexType {
    BOY, GIRL
}

interface UserInterface {
    name: string,
    sex: SexType
}

const user: UserInterface = {
    name: '刘嘻嘻',
    sex: SexType.GIRL
}
console.log(user); //{ name: '刘嘻嘻', sex: 1 }
```

## type

type 与 interface 非常相似都可以描述一个对象或者函数，使用 type 用于定义类型的别名，是非常灵活的类型定义方式。

* type 可以定义基本类型别名如联合类型，元组
* type 与 interface 都是可以进行扩展
* 使用 type 相比 interface 更灵活
* 如果你熟悉其他编程语言，使用 interface 会让你更亲切
* 使用类(class) 时建议使用接口，这可以与其他编程语言保持统一
* 决定使用哪个方式声明类型，最终还是看公司团队的规范

### 基本使用 

下面是使用 type 声明对象类型
```ts
type User = {
    name: string,
    age: number
}
const hd: User = { name: '刘嘻嘻', age: 18 }
```

上面已经讲解了使用 interface 声明函数，下面来看使用 type 声明函数的方式
```ts
type Pay = (price: number) => boolean
const wepay: Pay = (price: number) => {
    console.log(`微信支付${price}`);
    return true;
}

wepay(100)

```


### 类型别名

type 可以为 number、string、boolean、object 等基本类型定义别名，比如下例的 IsAdmin。
```ts
//基本类型别名
type IsAdmin = boolean

//定义联合类型
type Sex = 'boy' | 'girl'

type User = {
    isAdmin: IsAdmin,
    sex: Sex
}
const user: User = {
    isAdmin: true,
    sex: "boy"
}

//声明元组
const users: [User] = [user]
```
### 索引类型

type 与 interface 在索引类型上的声明是相同的

```ts
interface User {
    [key: string]: any
}

type UserTYpe = {
    [key: string]: any
}

```

### 声明继承

typescript 会将同名接口声明进行合并

```ts
interface User {
    name: string
}
interface User {
    age: number
}
const user: User = {
    name: 'liuxixi',
    age: 18
}
```

interface 也可以 extends 继承 type

```ts
type Admin = {
    role: string
}
interface User extends Admin {
    name: string
}
const hd: User = {
    role: 'admin',
    name: 'liuxixi',
}

```

type 与 interface 不同，存在同名的 type 时将是不允许的

```ts
type User {
    name: string
}
type User {
    age: number
}
```

不过可以使用& 来进行 interface 的合并


```ts
interface Name {
    name: string
}
interface Age {
    age: number
}
type User = Name & Age
```

下面是 type 类型的声明合并

```ts
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}

type User = Admin & Member;

const hd: User = {
    isSuperAdmin: true,
    role: 'admin',
    name: 'liuxixi'
}
```

下面声明的是满足任何一个 type 声明即可

```ts
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}

type User = Admin | Member;

const hd: User = {
    role: 'admin',
    name: ' 刘嘻嘻'
}

```

## implements

class 可以使用 implements 来实现 type 或 interface



```ts
type Member = {
    name: string
}

class User implements Member {
    name: string = '刘嘻嘻'
}

```