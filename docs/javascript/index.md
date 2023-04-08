## 基础知识

### 变量声明

#### 命名规则


JS 中的变量是弱类型可以保存所有类型的数据，即变量没有类型而值有类型。变量名以字母、$、_ 开始，后跟字母、数字、_。

下面都是合法的命名

```js
let name = 'liuxiix';
let $='xixi'
```

JS 语言关键字不能用来做变量名，比如 true、if、while、class 等。

```js
let class = 'class';

```

#### 变量声明

可以使用多种方式定义变量比如 var、let const。

```js
let name = 'xixi';

```

以上代码是声明和赋值的结合

```js
let name ;
name = 'xixi'
```

使用, 可以同时声明多个变量


```js
let a = 2,b= 3;
console.log(b);

```

下面演示了变量可以更换不同类型的数据


```ts
let name = 'liuxixi';
console.log(typeof name);

name = 18;
console.log(typeof name);

```

#### 弱类型

在 JS 中变量类型由所引用的值决定

```js
var web = "hdcms";
console.log(typeof web); //string
web = 99;
console.log(typeof web); //number
web = {};
console.log(typeof web); //object

```

#### 变量提升

解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。

下面代码在解析过程中发现while不能做为变量名，没有到执行环节就出错了，这是一个很好的解析过程的体验。

```js

var name ='xixi';
console.log(name);
let while = 'xixi'; //Uncaught SyntaxError: Unexpected token 'while'
```

使用 var 声明代码会被提升到前面

```js
console.log(a); //undefined
var a = 1;
console.log(a);  //1

//以上代码解析器执行过程如下
var a;
console.log(a); //1
a = 1;
console.log(a); //1

```

下面是 if(false) 中定义的 var 也会发生变量提升，注释掉if 结果会不同

```js
var name = "嘻嘻";
function user() {
  if (false) {
    var name = "xixi";
  }
  console.log(name);
}
user();
```

使用 var 定义的代码，声明会被提升到前面，赋值还在原位置

```js

console.log(name);
var name = '嘻嘻';

//以上代码解析器执行过程如下
var name;
console.log(name); //xixi
name = '嘻嘻';
```

#### 暂时性死区
暂时性死区，指变量在作用域内已经存在，但必须在let/const声明后才可以使用。

暂时性死区 可以让程序保持先声明后使用的习惯，让程序更稳定。

* 变量要先声明后使用
* 建议使用 let/const 而少使用 var

使用let/const 声明的变量在声明前存在临时性死区使用会发生错误

```js
console.log(x); // Cannot access 'x' before initialization
let x = 1;
```

在run函数作用域中产生 暂时性死区 不允许变量在未声明前使用


```js
 name='xixi'
function run() {
  console.log(name);
    let name = "xixi";
}
run();

```

下面代码 b 没有声明赋值不允许直接使用

```js
function user(a = b, b = 3) {}
user(); //Cannot access 'b' before initialization

```

因为 a 已经赋值，所以 b 可以使用 a 变量，下面代码访问正常

```js
function user(a = 2, b = a) {}
user();
```

### 块作用域

#### 共同点

var/let/const共同点是全局作用域中定义的变量，可以在函数中使用

```js
var name = 'xixi';
function show() {
	return name;
}
console.log(show());
```
函数中声明的变量，只能在函数及其子函数中使用

```js

function user() {
  var name = "xixi";

  function show() {
    console.log(name);
  }
  show(); //子函数结果: xixi
  console.log(name); //函数结果: xixi
}
user();
console.log(name); //全局访问: name is not defined
```

函数中声明的变量就像声明了私有领地，外部无法访问

```js

var name = "xixi";
function user() {
  var name = "嘻嘻";
  console.log(name); //嘻嘻
}
user();
console.log(name); //xixi
```

#### var
使用 var 声明的变量存在于最近的函数或全局作用域中，没有块级作用域的机制。

没有块作用域很容易污染全局，下面函数中的变量污染了全局环境


```js
function run() {
  name = "xixi";
}
run();
console.log(name); //xixi
```
没有块作用作用域时 var 也会污染全局

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
```

使用let有块作用域时则不会

```js
let i = 100;
for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log(i);
```

下例中体验到 var 没有块作用域概念， do/while 定义的变量可以在块外部访问到

```js

var num = 0;

function show() {
  var step = 10;
  do {
    var res = 0;
    console.log(num = step++);
    res = num;
  } while (step < 20);
  console.log(`结果是${res}`);
}
show();
```

var 全局声明的变量也存在于 window对象中

```js
var name = "xixi";
console.log(window.name); //xixi

```

以往没有块任用时使用立即执行函数模拟块作用域

```js
(function() {
  var $ = this.$ = {};
  $.name = "xixi";
}.bind(window)());
console.log($.name);

```

有了块作用域后实现就变得简单多了

```js
{
  let $ = (window.$ = {});
  $.name = "xixi";
}
console.log($.name);

```

#### let

与 var 声明的区别是 let/const 拥有块作用域，下面代码演示了块外部是无法访问到let声明的变量。

* 建议将let在代码块前声明
* 用逗号分隔定义多个
let存在块作用域特性，变量只在块域中有效

```js
if (true) {
    let name = 'xixi',age = 18;
    console.log(name); //xixi
}
console.log(name); //name is not defined

```

块内部是可以访问到上层作用域的变量

```js

if (true) {
  let user = "刘嘻嘻";
  (function() {
    if (true) {
      console.log(`这是块内访问：${user}`);
    }
  })();
}
console.log(user);

```

每一层都是独立作用域，里层作用域可以声明外层作用域同名变量，但不会改变外层变量

```js
function run() {
  name= "xixi";
  if (true) {
    let name = "嘻嘻";
    console.log(name); //嘻嘻
  }
  console.log(name); //xixi
}
run();

```

#### const

使用 const 用来声明常量

* 常量名建议全部大写
* 只能声明一次变量
* 声明时必须同时赋值
* 不允许再次全新赋值
* 可以修改引用类型变量的值
* 拥有块、函数、全局作用域


常量不允许全新赋值举例

```js
try {
  const name = "xixi";
  name = "刘嘻嘻"; //产生错误
} catch (error) {
  throw new Error(error);
}

```


改变常量的引用类型值


```js
const user = {
  name:'刘嘻嘻',
  age: 18
};
user.age = 19;
console.log(user);
```
不同作用域中可以重名定义常量


```js
const NAME = '刘嘻嘻';

function show() {
  const NAME = 'xixi';
  return NAME;
}
console.log(show());
console.log(NAME);

```

#### 重复定义

使用 var 可能造成不小心定义了同名变量

```js
//优惠价
var price = 90;
//商品价格
var price = 100;
console.log(`商品优惠价格是:${price}`);


```

使用let 可以避免上面的问题，因为 let 声明后的变量不允许在同一作用域中重新声明

```js
let name = 'xixi';
let name = '刘嘻嘻'; //Identifier 'name' has already been declared
```

不同作用域可以重新声明


```js
let name = 'xixi';
if (true) {
	let name = '刘嘻嘻';
}
```

但可以改变值这是与 const 不同点

```js
let price = 90;
price = 88;
console.log(`商品价格是:${price}`);

```

let 全局声明的变量不存在于 window对象中，这与var声明不同

```js

let name = "xixi";
console.log(window.name); //undefined
```

#### Object.freeze

如果冻结变量后，变量也不可以修改了，使用严格模式会报出错误。

```js
"use strict"
const USER = {
  name: '刘嘻嘻',
  age: '18'
};
Object.freeze(USER);
USER.age = '19'; //Cannot assign to read only property
console.log(USER);

```


#### 传值与传址

基本数据类型指数值、字符串等简单数据类型，引用类型指对象数据类型。


基本类型复制是值的复制，互相不受影响。下例中将 a 变量的值赋值给 b 变量后，因为基本类型变量是独立的所以 a 的改变不会影响 b 变量的值。

```js

let a = 100;
let b = a;
a = 200;
console.log(b);
```

对于引用类型来讲，变量保存的是引用对象的指针。变量间赋值时其实赋值是变量的指针，这样多个变量就引用的是同一个对象。

```js

let info = {
  name: "xixi"
};
let user = info;
info.name = "刘嘻嘻";
console.log(user);

```

#### undefined

对声明但未赋值的变量返回类型为 undefined 表示值未定义。

```js
let name;
console.log(typeof name);

```

对未声明的变量使用会报错，但判断类型将显示 undefined。


```js
console.log(typeof name);
console.log(name); //name is not defined
``` 
#### null
null 用于定义一个空对象，即如果变量要用来保存引用类型，可以在初始化时将其设置为 null

```js
var user = null;
console.log(typeof user);
```



#### 严格模式

严格模式可以让我们及早发现错误，使代码更安全规范，推荐在代码中一直保持严格模式运行

##### 基本差异

变量必须使用关键词声明，未声明的变量不允许赋值

```js

"use strict";
name = 'xixi'; //name is not defined
```

强制声明防止污染全局


```js
"use strict";
function run() {
  name = "xixi";
}
run();
console.log(name); //xixi
```

关键词不允许做变量使用

```js

"use strict";
var public = 'public';
```

变量参数不允许重复定义

```js
"use strict";
//不允许参数重名
function user(name, name) {}
```

单独为函数设置严格模式

```js
function strict(){
  "use strict";
  return "严格模式";
}
function notStrict() {
  return "正常模式";
}

```

为了在多文件合并时，防止全局设置严格模式对其他没使用严格模式文件的影响，将脚本放在一个执行函数中。

```js
(function () {
  "use strict";
  name = 'xixi';
})();

```

##### 解构差异

非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。

```js
// "use strict";
({name,age} = {name:'后盾人',age:18});
console.log(name, age);
```