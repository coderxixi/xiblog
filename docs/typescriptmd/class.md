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