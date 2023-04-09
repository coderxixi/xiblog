## 声明数组

数组是多个变量值的集合，数组是Array 对象的实例，所以可以像对象一样调用方法。

### 创建数组

使用对象方式创建数组

```js
console.log(new Array(1, 2, 3)); //[1,2,3]
```
使用字面量创建是推荐的简单作法

```js
const array = ["1", "2"];
```

多维数组定义

```js
const array = [[1], [2]];
console.log(array[1][0]);
```
数组是引用类型可以使用const声明并修改它的值

```js
const array = ["1", "2"];
array.push("3");
console.log(array);
```
使用原型的 length属性可以获取数组元素数量

```js
let arr = ["1", "2"];
console.log(arr.length); //2
```

数组可以设置任何值，下面是使用索引添加数组

```js
let arr = ["xixi"];
arr[1] = "嘻嘻";
```

下面直接设置 3 号数组，会将 1/2 索引的数组定义为空值
```js
let arr = ["1"];
arr[3] = "2";
console.log(arr.length); //4
```

声明多个空元素的数组

```js
let arr = new Array(3);
console.log(arr.length);
console.log(arr);

```

### Array.of

使用Array.of 与 new Array 不同是设置一个参数时不会创建空元素数组

```js
let arr = Array.of(3);
console.log(arr); //[3]

arr = Array.of(1, 2, 3);
console.log(arr); //[1, 2, 3]

```

### 类型检测

检测变量是否为数组类型

```js
console.log(Array.isArray([1, "2", "3"])); //true
console.log(Array.isArray(9)); //false
```

## 类型转换

可以将数组转换为字符串也可以将其他类型转换为数组。

### 字符串

大部分数据类型都可以使用.toString() 函数转换为字符串。

```js
console.log(([1, 2, 3]).toString()); // 1,2,3
```

也可以使用函数 String 转换为字符串。

```js
console.log(String([1, 2, 3]));
```

或使用join连接为字符串

```js
console.log([1, 2, 3].join("-"));//1-2-3
```

### Array.from
使用Array.from可将类数组转换为数组，类数组指包含 length 属性或可迭代的对象。
* 第一个参数为要转换的数据，第二个参数为类似于map 函数的回调方法
```js
let str = '刘嘻嘻';
console.log(Array.from(str)); //["刘", "嘻", "嘻"]
```
为对象设置length属性后也可以转换为数组，但要下标为数值或数值字符串

```js
let user = {
  0: 'xixi',
  '1': 18,
  length: 2
};
console.log(Array.from(user)); //["xixi", 18]
```

## 展开语法

### 数组合并

使用展开语法来合并数组相比 concat 要更简单，使用... 可将数组展开为多个值

```js
let a = [1, 2, 3];
let b = ['a', 'xixi', ...a];
console.log(b); //["a", "xixi", 1, 2, 3]
```
### 函数参数
使用展示语法可以替代 arguments 来接收任意数量的参数
```js
function user(...args) {
  console.log(args);
}
user(1, 2, 3, "xixi"); //[1, 2, 3, "xixi"]
```
也可以用于接收部分参数

```js
function user(site, ...args) {
  console.log(site, args); //xixi (3) [1, 2, 3]
}
user("xixi", 1, 2, 3);
```

## 解构赋值

解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构

* 建设使用 var/let/const 声明


### 基本使用
下面是基本使用语法

```js
//数组使用
let [name, age] = ['xixi', '18'];
console.log(name);
```

解构赋值数组

```js
function user() {
	return ['xixi', '18'];
}
let [a, b] = user();
console.log(a); //xixi
```

剩余解构指用一个变量来接收剩余参数

```js
let [a, ...b] = ['1', '2', '3'];
console.log(b);
```

如果变量已经初始化过，就要使用() 定义赋值表达式，严格模式会报错所以不建议使用

```js
let name = "嘻嘻";
[name, age] = ["xixi", "18"];
console.log(name);
```

字符串解构

```js
"use strict";
const [...a] = "xixi";
console.log(a); //['x','i','x','i']
```

### 严格模式

非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。


```js
"use strict";
[name, age] = ["xixi", 18];
console.log(name);

```

### 简洁定义

只赋值部分变量

```js
let [,name]=['xixi ','嘻嘻'];
console.log(name);//嘻嘻

```

使用展开语法获取多个值

```js
let [name, ...arr] = ['xixi', '嘻嘻', 'coderxixi'];
console.log(name, arr); //xixi (2) [ '嘻嘻', 'coderxixi']

```

### 默认值

为变量设置默认值
```js
let [name, age = 18] = ['后盾人'];
console.log(age); //18
```

### 函数参数


数组参数的使用

```js
function user([a, b]) {
	console.log(a, b);
}
user(['xixi', 'age']);
```


## 管理元素


### 基本使用

使用从 0 开始的索引来改变数组

```js
let arr = [1, 2, 3];
arr[1] = 'xixi';
console.log(arr); //[1, "xixi",3]
```

向数组追回元素

```js
let arr = [1, "2", "3"];
arr[arr.length] = 4;
console.log(arr); //[1, "2", "3", 4]
```


### 扩展语法

使用展示语法批量添加元素

```js
let arr = ["xixi", "嘻嘻"];
let list = ["coderxixi"];
list.push(...arr);
console.log(hd); //["coderxixi", "xixi", "嘻嘻"]

```

### push
压入元素，直接改变元数组，返回值为数组元素数量

```js
let arr = ["1", "2"];
console.log(arr.push('3', '4')); //4
console.log(arr); //[1,2,3,4]
```

根据区间创建新数组

```js
function rangeArray(begin, end) {
  const array = [];
  for (let i = begin; i <= end; i++) {
    array.push(i);
  }
  return array;
}
console.log(rangeArray(1, 6));
```

### pop

从末尾弹出元素，直接改变元数组，返回值为弹出的元素

```js
let arr = ["1", "2"];
console.log(arr.pop()); //2
console.log(arr); //["1"]

```

### shift

从数组前面取出一个元素

```js
let arr = ["1", "2"];
console.log(arr.shift()); //1
console.log(arr); //["2"]
```

### unshift

从数组前面添加元素

```js
let arr = ["1", "2"];
console.log(arr.unshift('3', '4')); //4
console.log(arr); //[1,2,3,4]
```

### fill

使用fill 填充数组元素

```js
console.dir(Array(4).fill("1")); //[1,1,1,1]

```

指定填充位置
```js
console.log([1, 2, 3, 4].fill("xixi", 1, 2)); //[1, "xixi", 3, 4]

```

### slice

使用 slice 方法从数组中截取部分元素组合成新数组（并不会改变原数组），不传第二个参数时截取到数组的最后元素。

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 3)); // [1,2]
```
不设置参数是为获取所有元素
```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice()); //[0, 1, 2, 3, 4, 5, 6]
```

### splice
使用 splice 方法可以添加、删除、替换数组中的元素，会对原数组进行改变，返回值为删除的元素。

删除数组元素第一个参数为从哪开始删除，第二个参数为删除的数量。

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3)); //返回删除的元素 [1, 2, 3]
console.log(arr); //删除数据后的原数组 [0, 4, 5, 6]
```
通过修改length删除最后一个元素

```js
let arr = [1,2];
arr.length = arr.length - 1;
console.log(arr);
```

通过指定第三个参数来设置在删除位置添加的元素

```js

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3, 'xixi', 'coderxixi')); 
console.log(arr); //[0, "xixi", "coderxixi", 4, 5, 6]
```

向末尾添加元素

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(arr.length, 0, 'xixi', 'coderxixi')); 
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, "xixi", "coderxixi"]
```

向数组前添加元素

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 0, 'xixi', 'coderxixi')); //[]
console.log(arr); //['xixi', 'coderxixi', 0, 1, 2, 3, 4, 5, 6]
```
数组元素位置调整函数

```js
function move(array, before, to) {
  if (before < 0 || to >= array.length) {
    console.error("指定位置错误");
    return;
  }
  const newArray = [...array];
  const elem = newArray.splice(before, 1);
  newArray.splice(to, 0, ...elem);
  return newArray;
}
const array = [1, 2, 3, 4];
console.table(move(array, 0, 3));
```

### 清空数组

将数组值修改为[]可以清空数组，如果有多个引用时数组在内存中存在被其他变量引用。

```js

let user = [{ name: "xixi" }, { name: "coderxixi" }];
let cms = user;
user = [];
console.log(user);
console.log(cms);
```

将数组length设置为 0 也可以清空数组

```js
let user = [{ name: "xixi" }, { name: "coderxixi" }];
user.length = 0;
console.log(user);
```

使用splice方法删除所有数组元素

```js
let user = [{ name: "xixi" }, { name: "coderxixi" }];
user.splice(0, user.length);
console.log(user);

```

使用pop/shift删除所有元素，来清空数组

```js
let user = [{ name: "xixi" }, { name: "coderxixi" }];
while (user.pop()) {}
console.log(user);
```