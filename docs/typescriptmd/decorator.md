## 环境配置

装饰器（Decorators）为我们在类的声明及成员上通过编程语法扩展其功能，装饰器以函数的形式声明。


### 装饰器类型

可用装饰器包括以下几种

装饰器|	说明
|----|----|
ClassDecorator|	类装饰器
MethodDecorator	|方法装饰器
PropertyDecorator|	属性装饰器
ParameterDecorator	|参数装饰器


### 实验性

Decorators 是实验性的功能，所以开发时会提示错误，我们需要启动 Decorator 这个实验性的功能。
首先创建配置文件 tsconfig.js

```sh
tsc --init
```
然后开启以下配置项，来启动装饰器这个实验性的功能。

```josn

"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

然后执行命令

```ts
tsc -w

```

## 类装饰器

类装饰器是对类的功能进行扩展

* 首先执行 RoleDecorator 装饰器，然后执行类的构造函数

* 装饰器会优先执行，这与装饰器与类的顺序无关


### 装饰器参数

首先介绍装饰器函数参数说明


参数|	说明
|----|----
参数一|	构造函数

* 普通方法是构造函数的原型对象 Prototype
* 静态方法是构造函数

```ts
const MoveDecorator: ClassDecorator = (constructor: Function): void => {
    console.log(`装饰器 RoleDecorator `);
}

@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}

```

即使把装饰器定义放在类的后面也是先执行装饰器

```ts
@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}

function MoveDecorator(constructor: Function): void {
    console.log(`装饰器 RoleDecorator `);
}

```

### 原型对象

因为可以装饰器上得到构造函数，所以可以通过原型对象来添加方法或属性，供实例对象使用


```ts
const MoveDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.name = 'liuxixi'
    constructor.prototype.getPosition = (): { x: number, y: number } => {
        return { x: 100, y: 100 }
    }
}

@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}
const tank = new Tank()
console.log(tank.getPosition());

```

不过在编译阶段会提示错误，但这不影响编译生成 js 文件


```ts
Property 'getPosition' does not exist on type 'Tank'

```


我们可以通过为类添加默认属性来解决这个错误

```ts
class Tank {
    public hd: string | undefined
    public getPosition() { }
    constructor() {
        console.log('tank 构造函数');
    }
}

```

或者在调用时使用断言处理

```ts
const tank = new Tank()
console.log((tank as any).getPosition());
//或使用以下方式断言
console.log((<any>tank).getPosition());
```

### 语法糖
不需要把装饰器想的很复杂，下面是同样实现了装饰器的功能。只不过是我们人为调用函数，所以可以把装饰器理解为这种调用的语法糖，这样理解就简单些

```ts
const MoveDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.name = 'liuxixi'
    constructor.prototype.getPosition = (): { x: number, y: number } => {
        return { x: 100, y: 100 }
    }
}

class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}

MoveDecorator(Tank);
const tank = new Tank()
console.log(tank.getPosition());

```

## 装饰器工厂

有时有需要根据条件返回不同的装饰器，这时可以使用装饰器工厂来解决。可以在类、属性、参数等装饰器中使用装饰器工厂。

下例根据 MusicDecorator 工厂函数传递的不同参数，返回不同装饰器函数。


```ts

const MusicDecorator = (type: string): ClassDecorator => {
    switch (type) {
        case 'player':
            return (constructor: Function) => {
                constructor.prototype.playMusic = (): void => {
                    console.log(`播放【海阔天空】音乐`);
                }
            }
            break;
        default:
            return (constructor: Function) => {
                constructor.prototype.playMusic = (): void => {
                    console.log(`播放【喜洋洋】音乐`);
                }
            }

    }
}

@MusicDecorator('tank')
class Tank {
    constructor() {
    }
}
const tank = new Tank();
(<any>tank).playMusic();

@MusicDecorator('player')
class Player {
}

const xj: Player = new Player();
(xj as any).playMusic()

```

## 方法装饰器

装饰器也可以修改方法，首先介绍装饰器函数参数说明

参数|	说明
|----|----|
参数一|	普通方法是构造函数的原型对象 Prototype，静态方法是构造函数
参数二|	方法名称
参数三|属性描述


### 基本使用

下面使用 ShowDecorator 装饰来修改 show 方法的实现

```ts
const ShowDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor,
): void => {
  //对象
  console.dir(target)
  //方法名
  console.dir(propertyKey)
  //方法实现
  console.dir(descriptor)
  descriptor.value = () => {
    console.log('https://github.com/coderxixi')
  }
}

class User {
  @ShowDecorator
  show() {
    console.log('show method')
  }
}
const instance = new User()
instance.show()
```
输出结果

```
Object
show
Object
houdunren.com
```
下面是修改方法的属性描述 writable 为 false，这时将不允许修改方法。

```ts

const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    descriptor.writable = false
}

class User {
    @ShowDecorator
    show() {
        console.log(666);
    }
}

const instance = new User();
instance.show()

//装饰器修改了 writable 描述，所以不能重写函数
instance.show = () => { }
```

### 静态方法

静态方法使用装饰器与原型方法相似，在处理静态方法时装饰器的第一个参数是构造函数。

```ts

const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    descriptor.value = () => {
        console.log('https://github.com/coderxixi');
    }
}

class User {
    @ShowDecorator
    static show() {
        console.log('show method');
    }
}

User.show()

```

### 代码高亮

下面使用装饰器模拟代码高亮

```ts
const highlightDecorator: MethodDecorator = (target: object, propertyKey: any, descriptor: PropertyDescriptor): any => {
		//保存原型方法
    const method = descriptor.value;

		//重新定义原型方法
    descriptor.value = () => {
        return `<div style="color:red">${method()}</div>`
    }
}

class User {
    @highlightDecorator
    response() {
        return '柳絮絮';
    }
}

console.log(new User().response());
```

## 属性装饰器

首先介绍装饰器函数参数说明

参数|	说明
|----|----
参数一	|普通方法是构造函数的原型对象 Prototype，静态方法是构造函数
参数二|	属性名称


### 基本使用

下面是属性装饰器的定义方式

```ts

const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey);
}

class Hd {
    @PropDecorator
    public name: string | undefined = 'liuxiix'
    show() {
        console.log(33);
    }
}
```

### 访问器

下面是定义将属性 name 的值转为小写的装饰器

```ts

const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol): void => {
    let value: string;
    const getter = () => {
        return value
    }
    const setter = (v: string) => {
        value = v.toLowerCase()
    }

    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    })
}

class Hd {
    @PropDecorator
    public name: string | undefined
    show() {
        console.log(33);
    }
}

const instance = new Hd();
instance.name = 'LiuXiXi'
console.log(instance.name);


```

## 参数装饰器

可以对方法的参数设置装饰器，参数装饰器的返回值被忽略。

### 装饰器函数参数说明

参数	|说明
|----|----
参数一|	普通方法是构造函数的原型对象 Prototype，静态方法是构造函数
参数二	|方法名称
参数三	|参数所在索引位置


### 基本使用

下面是定义参数装饰器

```ts
const ParameterDecorator: ParameterDecorator = (target: any, propertyKey: string | Symbol, parameterIndex: number): void => {
    console.log(target, propertyKey, parameterIndex);
}

class User {
    show(name: string, @ParameterDecorator url: string) {
    }
}

```

### 元数据

元数据指对数据的描述，首先需要安装扩展包 reflect-metadata


```sh
yarn add reflect-metadata

```

下面是使用元数据的示例

```ts

//引入支持元数据的扩展名
import "reflect-metadata";

const user = { name: '刘嘻嘻', city: '广州' }
//在对象 hd 的属性 name 上定义元数据 (元数据指对数据的描述)
Reflect.defineMetadata('xj', 'https://github.com/coderxixi%C3%A5', user, 'name')

let value = Reflect.getMetadata('xj', user, 'name')

console.log(value);
```