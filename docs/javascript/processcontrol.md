## 运算符

### 赋值运算符

使用 = 进行变量赋值

```js

let name = 'xixi';
```

### 算术运算符

包括以下几种算术运算符

运算符|说明
|----|----
*|乘法
/|除法
+|加法
-|减法
%|取余数

```js
let a = 5,b = 3;
console.log(a * b); //15
console.log(a % b); //2
```

### 复合运算符

可以使用 *=、/=、+=、-=、%= 简写算术运算。即 n*=2 等同于 n=n*2。

```js
let n = 2;
n *= 2;
console.log(n);

```

对变量加减相应数值。


```js
let n = 2;
n += 3;
console.log(n); //0
n -= 5;
console.log(n); //5

```
n+=3 是 n=n+3 的简写形式

### 一元运算符


#### 前置操作

前置操作会在表达式最先执行。

```js
let n = 1;
++n
console.log(n);
--n
console.log(n);
```
++n 就是 n=n+1 的简写形式。
使用后置操作符，++n 会在最先执行，所以 f 的结果是 33。

```js
let n = 2;
let f = 30 + ++n;
console.log(f);

```

#### 后置操作

后置操作会在表达式最后执行。
```js
let n = 1;
n++
console.log(n);
```
使用后置操作符，n++ 会在最后执行，所以 f 的结果是 32。

```js
let n = 2;
let f = 30 + n++;
console.log(f);

```

参与数学计算

```js
let a = 1;
b = a++ + 2;
console.log(b); //3
```

### 比较运算符

运算符|说明
|----|----
>|大于
<|小于
>=|大于或等于
<=|小于等于
==|强制类型转换比较
===|不强制类型转换比较

下面来体验不同类型的比较结果

```js
let a = 1,b = 2,c = '1';

console.log(a < b); //true
console.log(a == b); //false
console.log(a == c); //true
console.log(a === c); //false
console.log(a == true); //true
console.log(a === true); //false

```


### 逻辑运算符

#### 辑与

使用 && 符号表示逻辑与，指符号两端都为 true 时表达式结果为 true。

```js
let a = true,b = true;
if (a && b) {
    console.log('表达式成立');
}

```

#### 逻辑或

使用 || 符号表示逻辑或，指符号左右两端有一方为 true，表达式即成立

```js
let a = true,b = false;
if (a || b) {
    console.log('表达式成立');
}
```

#### 逻辑非

使用 ! 符号表示逻辑非，即原来是 true 转变为 false，反之亦然。

```js
let a = true,b = false;
if (a && !b) {
    console.log('表达式成立');
}

```

#### 优先级

下列中因为 && 的优先级高所以结果是 true


```js
console.log(true || false && false);
```

可以使用 () 来提高优先级


```js
console.log((true || false) && false);

```

## 流程控制

### if

当条件为真时执行表达式代码块。

```js
let state = true;
if (true) {
    console.log('表达式成立');
}


```

如果只有一条代码块，可以不用写 {}


```js
let state = true;
if (true)
    console.log('表达式成立');
console.log('一直都显示的内容');

```
#### if/else
```js
 let length = this.value.length;
    let msg;
    if (length > 10) {
      msg = "密码已经无敌了";
    } else if (length > 6) {
      msg = "密码安全性中级";
    } else {
      msg = "这密码，要完的节奏";
    }
```
### 三元表达式

是针对 if 判断的简写形式

```js

let n = true ? 1 : 2;
console.log(n); //1
let f = true ? (1 == true ? 'yes' : 'no') : 3;
console.log(f); // yes
```
下面是创建 DIV 元素的示例，使用三元表达式设置初始值

```js
function div(options = {}) {
  let div = document.createElement("div");
  div.style.width = options.width ? options.width : "100px";
  div.style.height = options.height ? options.height : "100px";
  div.style.backgroundColor = options.bgcolor ? options.bgcolor : "red";
  document.body.appendChild(div);
}
div();

```

### switch

可以将 switch 理解为 if 的另一种结构清晰的写法。

* 如果表达式等于 case 中的值，将执行此 case 代码段
* break 关键字会终止 switch 的执行
* 没有任何 case匹配时将执行default 代码块
* 如果case执行后缺少 break 则接着执行后面的语句


```js
let name = 'xixi';
switch (name) {
    case 'xixi':
        console.log('liuxixi');
        break;
    case '嘻嘻':
        console.log('刘嘻嘻');
        break;
    default:
        console.log('coderxixi')
}

```
在switch 与 case 都可以使用表达式

```js
function message(age) {
  switch (true) {
    case age < 15:
      console.log("儿童");
      break;
    case age < 25:
      console.log("青少年");
      break;
    case age < 40:
      console.log("青年");
      break;
    case age < 60:
      console.log("中年");
      break;
    case age < 100:
      console.log("老年");
      break;
    default:
      console.log("年龄输出错误");
  }
}
message(10);
```

下面例子缺少 break 后，会接着执行后面的 switch 代码。

```js
switch (1) {
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  default:
    console.log("default");
}
```

### while
循环执行语句，需要设置跳出循环的条件否则会陷入死循环状态。下面是循环输出表格的示例。

```js
let row = 5;
document.write(`<table border="1" width="100">`);
while (row-- != 0) {
  document.write(`<tr><td>${row}</td></tr>`);
}
document.write(`</table>`);
```

### do/while

后条件判断语句，无论条件是否为真都会先进行循环体。

下面通过循环输出三角形示例，要注意设置循环跳出的时机来避免死循环。


```js
function fn(row = 5) {
  let start = 0;
  do {
    let n = 0;
    do {
      document.write("*");
    } while (++n <= start);
    document.write("<br/>");
  } while (++start <= row);
}
fn();

```

### for

可以在循环前初始化初始计算变量。下面是使用for 打印倒三角的示例

```js
**********
*********
********
*******
******
*****
****
***
**
*


for (let i = 10; i > 0; i--) {
    for (let n = 0; n < i; n++) {
        document.write('*');
    }
    document.write("<br/>");
}
```

for 的三个参数可以都省略或取几个

```js
let i = 1;
for (; i < 10; ) {
  console.log(i++);
}
```

### break/continue

break 用于退出当前循环，continue 用于退出当前循环返回循环起始继续执行。

获取所有偶数，所有奇数使用 continue 跳过

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2) continue;
  console.log(i);
}
```

获取三个奇数，超过时使用 break退出循环


```js
let count = 0,num = 3;
for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(i);
    if (++count == num) break;
  }
}
```

### for/in

用于遍历对象的所有属性，for/in主要用于遍历对象，不建议用来遍历数组。

遍历数组操作

```js
let list = [
  { title: "css", lesson: 3 },
  { title: "html", lesson: 5 },
  { title: "javascript", lesson: 8 }
];
document.write(`
  <table border="1" width="100%">
  <thead><tr><th>标题</th><th>课程数</th></thead>
`);
for (let key in list) {
  document.write(`
  <tr>
  <td>${list[key].title}</td>
  <td>${list[key].lesson}</td>
  </tr>
  `);
}
document.write("</table>");

```

遍历对象操作

```js
let info = {
  name: "刘嘻嘻",
  age:18
};
for (const key in info) {
  if (info.hasOwnProperty(key)) {
    console.log(info[key]);
  }
}
```
遍历 window 对象的所有属性
```js
for (name in window) {
  console.log(window[name]);
}
```

### for/of

用来遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构。

与 for/in 不同的是 for/of 每次循环取其中的值而不是索引。


```js
let arr = [1, 2, 3];
for (const iterator of arr) {
    console.log(iterator);
}

```

遍历字符串

```js

let str = 'liuxixi';
for (const iterator of str) {
    console.log(iterator);
}
```

使用迭代特性遍历数组

```js
const list = ["xixi", "xixiixi"];

for (const [key, value] of list.entries()) {
  console.log(key, value); //这样就可以遍历了
}

```