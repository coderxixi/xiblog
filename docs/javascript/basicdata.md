## 类型检测
JS 提供了非常丰富的数据类型

###  typeof
typeof 用于返回以下原始类型

* 基本类型：number/string/boolean
* function
* object
* undefined
可以使用 typeof 用于判断数据的类型


```js
let a = 1;
console.log(typeof a); //number

let b = "1";
console.log(typeof b); //string

//未赋值或不存在的变量返回undefined
var name;
console.log(typeof name);

function run() {}
console.log(typeof run); //function

let c = [1, 2, 3];
console.log(typeof c); //object

let d = { name: "xixi" };
console.log(typeof d); //object

```

### instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

也可以理解为是否为某个对象的实例，typeof不能区分数组，但instanceof则可以


```js
let list = [];
let info = {};
console.log(list instanceof Array); //true
console.log(info instanceof Array); //false

let c = [1, 2, 3];
console.log(c instanceof Array); //true

let d = { name: "xixi" };
console.log(d instanceof Object); //true

function User() {}
let user = new User();
console.log(user instanceof User); //true

```

### 值类型与对象

下面是使用字面量与对象方法创建字符串，返回的是不同类型。

```js

let name= "xixi";
let str = new String("dsakjfhsakdf");
console.log(typeof name, typeof str); //string object
```

只有对象才有方法使用，但在JS中也可以使用值类型调用方法，因为它会在执行时将值类型转为对象。

```js
let name = "xixi";
let str = new String("hdcmsdafsafs");
console.log(name.length); //9
console.log(str.length); //5
```

## String

字符串类型是使用非常多的数据类型，也是相对简单的数据类型。

### 声明定义

使用对象形式创建字符串


```ts
let str= new String('liuxixi');
// 获取字符串长度
console.log(str.length);
// 获取字符串
console.log(str.toString());

```

字符串使用单、双引号包裹，单、双引号使用结果没有区别。

```js
let content = '嘻嘻';
console.log(content);
```

### 转义符号

有些字符有双层含义，需要使用 \ 转义符号进行含义转换。下例中引号为字符串边界符，如果输出引号时需要使用转义符号。


```js
let content = '嘻嘻 \'https://github.com/coderxixi'\'';
console.log(content);
```

常用转义符号列表如下

符号|	说明
|----|----
\t	|制表符
\n	|换行
\\ |斜杠符号
\'	|单引号
\"|	双引号 R

### 连接运算符

使用 + 可以连接多个内容组合成字符串，经常用于组合输出内容使用


```js

let year = 2023,
name = '今年';
console.log(name + '是' + year + '年');
```

使用 += 在字符串上追回字符内容

```js
let name = '嘻嘻';
 name += '博客：https://github.com/coderxixi';
console.log(name); //嘻嘻博客：https://github.com/coderxixi

```

### 模板字面量

使用 ` ` 符号包裹的字符串中可以写入引入变量与表达式

```js
let url = 'https://github.com/coderxixi';
 
console.log(`嘻嘻博客${url}`); //嘻嘻博客：https://github.com/coderxixi

```
支持换行操作不会产生错误

### 获取长度

使用length属性可以获取字符串长度

```js
console.log("liuxixi".length)
```

### 大小写转换

将字符转换成大写格式


```js
console.log('liuxixi'.toUpperCase()); //LIUXIXI
```

转字符为小写格式


```js
console.log('liuxixi'.toLowerCase()); //liuxixi
```

### 移除空白

使用trim删除字符串左右的空白字符
```js
let str = '  liuxixiix  ';
console.log(str.length);
console.log(str.trim().length);
```

使用trimLeft删除左边空白，使用trimRight删除右边空白

```js
let name = "   liuxixiix   ";
console.log(name);
console.log(name.trimLeft());
console.log(name.trimRight());
```

### 获取单字符

根据从 0 开始的位置获取字符

```js
console.log('xixix'.charAt(3))

```

使用数字索引获取字符串

```js
console.log('xixi'[3])
```

### 截取字符串
使用 slice、substr、substring 函数都可以截取字符串。

* slice、substring 第二个参数为截取的结束位置
* substr 第二个参数指定获取字符数量


```js
let str = 'hogithub.com/coderxixi';
console.log(str.slice(3)); //ithub.com/coderxixi
console.log(str.substr(3)); //ithub.com/coderxixi
console.log(str.substring(3)); //ithub.com/coderxixi

console.log(str.slice(3, 6)); //ith
console.log(str.substring(3, 6)); //ith
console.log(str.substring(3, 0)); //hog 较小的做为起始位置
console.log(str.substr(3, 6)); //ithub.

console.log(str.slice(3, -1)); //ithub.com/coderxix 第二个为负数表示从后面算的字符
console.log(str.slice(-2));//xi 从末尾取
console.log(str.substring(3, -9)); //hog 负数转为0
console.log(str.substr(-3, 2)); //ix 从后面第三个开始取两个
```

### 查找字符串

从开始获取字符串位置，检测不到时返回 -1
#### indexOf
```js
console.log('xixi'.indexOf('x')); //1
console.log('xixiixi'.indexOf('x', 3)); //5 从第3个字符向后搜索
```

从结尾来搜索字符串位置
#### lastIndexOf

```js
console.log('liuxixi'.lastIndexOf('x')); //5
console.log('liuxixi'.lastIndexOf('x', 3)); //3 从第3个字符向前搜索
```
#### search
search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索

```js
let str = "liuxixi.com";
console.log(str.search("com"));
console.log(str.search(/\.com/i));

```
#### includes
includes 字符串中是否包含指定的值，第二个参数指查找开始位置

```js
console.log('liuxixi.com'.includes('o')); //true
console.log('liuxixi.com'.includes('i', 2)); //true
```
#### startsWith
startsWith 是否是指定位置开始，第二个参数为查找的开始位置。

```js

console.log('liuxixi.com'.startsWith('l')); //true
console.log('liuxixi.com'.startsWith('o', 1)); //false
```
#### endsWith
endsWith 是否是指定位置结束，第二个参数为查找的结束位置。

```js
console.log('liuxxixi.com'.endsWith('com')); //true
console.log('liuxixi.com'.endsWith('o', 2)); //true
```

下面是查找关键词的示例


```js
const words = ["js", "css"];
const title = "我在学习js和css知识";
const status = words.some(word => {
  return title.includes(word);
});
console.log(status);

```
### 替换字符串

#### replace

replace 方法用于字符串的替换操作

```js
let name = "liuxixi.com";
web = name.replace("liuxixi", "coderwhy");
console.log(web);
```
默认只替换一次，如果全局替换需要使用正则

```js
let str = "2023/04/08";
console.log(str.replace(/\//g, "-"));
```

使用字符串替换来生成关键词链接


```js
const words = ["js", "css"];
const title = "我在学习js和css知识";
const title = word.reduce((pre, word) => {
  return pre.replace(word, `<a href="?w=${word}">${word}</a>`);
}, string);
document.body.innerHTML += title;

```

使用正则表达式完成替换
```js
let res = "coderxixi.com".replace(/u/g, str => {
  return "@";
});
console.log(res);

```

### 重复生成

下例是根据参数重复生成星号

```js
function star(num = 3) {
	return '*'.repeat(num);
}
console.log(star());

```

下面是模糊后三位电话号码

```js
let phone = "17502067891";
console.log(phone.slice(0, -3) + "*".repeat(3));

```

### 类型转换
分隔字母

```js
let name = "xixi";
console.log(name.split(""));
```

将字符串转换为数组

```js
console.log("1,2,3".split(",")); //[1,2,3]
```

隐式类型转换会根据类型自动转换类型

```js
let str = 99 + '';
console.log(typeof str); //string
```

使用 String 构造函数可以显示转换字符串类型

```js
let num = 99;
console.log(typeof String(num));
```

js 中大部分类型都是对象，可以使用类方法 toString转化为字符串

```js
let num = 99;
console.log(typeof num.toString()); //string

let arr = ['xixi', '嘻嘻'];
console.log(typeof arr.toString()); //string

```

## Boolean

布尔类型包括 true 与 false 两个值，开发中使用较多的数据类型。

### 声明定义

使用对象形式创建布尔类型

```js
console.log(new Boolean(true)); //true
console.log(new Boolean(false)); //false
```
但建议使用字面量创建布尔类型

```js
let bl =true;
```

### 隐式转换

基本上所有类型都可以隐式转换为 Boolean 类型。

数据类型|	true|	false
|----|----|----|
String|	非空字符串|	空字符串
Number	|非 0 的数值|	0 、NaN
Array|	数组不参与比较时|	参与比较的空数组
Object|	所有对象	|
undefined	|无|	undefined
null|	无|	null
NaN	|无	|NaN


当与 boolean 类型比较时，会将两边类型统一为数字 1 或 0。

如果使用 Boolean 与数值比较时，会进行隐式类型转换 true 转为 1，false 转为 0。

```js
console.log(3 == true); //false
console.log(0 == false); //true
```

下面是一个典型的例子，字符串在与 Boolean 比较时，两边都为转换为数值类型后再进行比较。

```js
console.log(Number("xi")); //NaN
console.log(Boolean("xi")); //true
console.log("xi" == true); //false
console.log("1" == true); //true

```

数组的表现与字符串原理一样，会先转换为数值


```js
console.log(Number([])); //0
console.log(Number([3])); //3
console.log(Number([1, 2, 3])); //NaN
console.log([] == false); //true
console.log([1] == true); //true
console.log([1, 2, 3] == true); //false
```


引用类型的 Boolean 值为真，如对象和数组

```js
if ([]) console.log("true");
if ({}) console.log("true");

```

### 显式转换

使用 !! 转换布尔类型

```js
let str = '';
console.log(!!str); //false
str = 0;
console.log(!!str); //false
str = null;
console.log(!!str); //false
str = new Date("2020-2-22 10:33");
console.log(!!str); //true
```

使用 Boolean 函数可以显式转换为布尔类型

```js
let str = '';
console.log(Boolean(str)); //false
str = 0;
console.log(Boolean(str)); //false
str = null;
console.log(Boolean(str)); //false
str = new Date("2020-2-22 10:33");
console.log(Boolean(str)); //true

```

## Number

### 声明定义

使用对象方式声明

```js
let num = new Number(3);
console.log(num+3); //6

```

Number 用于表示整数和浮点数，数字是 Number实例化的对象，可以使用对象提供的丰富方法


```js
let num = 99;
console.log(typeof num);
```

### 基本函数
判断是否为整数

```js
console.log(Number.isInteger(1.2));
```

指定返回的小数位数可以四舍五入

```js
console.log((16.556).toFixed(2)); // 16.56
```

### NaN

表示无效的数值，下例计算将产生 NaN 结果。


```js
console.log(Number("xixi")); //NaN

console.log(2 / 'xixi'); //NaN

```

NaN 不能使用 == 比较，使用以下代码来判断结果是否正确


```js
var res = 2 / 'xixi';
if (Number.isNaN(res)) {
	console.log('Error');
}
```

也可以使用 Object.is 方法判断两个值是否完全相同

```js
var res = 2 / 'xixi';
console.log(Object.is(res, NaN));
```

### 类型转换

#### Number
使用 Number 函数基本上可以转换所有类型


```js
console.log(Number('xixi')); //NaN
console.log(Number(true));	//1
console.log(Number(false));	//0
console.log(Number('9'));	//9
console.log(Number([]));	//0
console.log(Number([5]));	//5
console.log(Number([5, 2]));	//NaN
console.log(Number({}));	//NaN
```

##### parseInt

提取字符串开始去除空白后的数字转为整数。

```js
console.log(parseInt('  99xi'));	//99
console.log(parseInt('18.55'));	//18

```

#### parseFloat

转换字符串为浮点数，忽略字符串前面空白字符。

```js
console.log(parseInt('  99xi'));	//99
console.log(parseInt('18.55'));	//18.55

```

### 舍入操作
#### toFixed

使用 toFixed 可对数值舍入操作，参数指定保存的小数位

```js
console.log(1.556.toFixed(2)); //1.56
```



## Math

Math 对象提供了众多方法用来进行数学计算


### 取极限值

使用 min 与 max 可以取得最小与最大值。

```js

console.log(Math.min(1, 2, 3));

console.log(Math.max(1, 2, 3));
```


使用apply 来从数组中取值

```js
console.log(Math.max.apply(Math, [1, 2, 3]));
```

## Symbol

Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。

Symbol 的值是唯一的，独一无二的不会重复的

### 基础知识

#### Symbol

```js
let name = Symbol();
let name2 = Symbol();
console.log(name); //symbol
console.log(name == name2); //false
```

Symbol 不可以添加属性

```js
let user = Symbol();
user.name = "xixi";
console.log(user.name);
```

### 描述参数

可传入字符串用于描述Symbol，方便在控制台分辨Symbol

```js
let user = Symbol("xixi");
let age = Symbol("18");

console.log(user); //Symbol("xixi")
console.log(age.toString()); //Symbol("18")
```
传入相同参数Symbol也是独立唯一的，因为参数只是描述而已，但使用 Symbol.for则不会

```js
let info = Symbol("xixi");
let user = Symbol("xixi");
console.log(info == user); //false
```
使用description可以获取传入的描述参数

```js
let user = Symbol("xixi");
console.log(user.description); //xixi
```

### Symbol.for

根据描述获取Symbol，如果不存在则新建一个Symbol

* 使用Symbol.for会在系统中将Symbol登记
* 使用Symbol则不会登记

```js
let user= Symbol.for("xixi");
let info = Symbol.for("xixi");
console.log(user == info); //true
```

### Symbol.keyFor

Symbol.keyFor 根据使用Symbol.for登记的Symbol返回描述，如果找不到返回undefined 。

```js
let user = Symbol.for("xixi");
console.log(Symbol.keyFor(user)); //xixi

let info = Symbol("coderxixi");
console.log(Symbol.keyFor(info)); //undefined
```

### Symbol.iterator
Symbol.iterator 可以让我们定义一个对象默认的迭代器。

有什么用途呢？正常的对象一般都是不可迭代的，如果我们直接用 for of 遍历一个对象，会抛出异常：TypeError: obj is not iterable ，因为对象默认是不可迭代的。

我们可以用 for in 来做遍历
```js
const obj = { name: 'xixi', age: 17 };

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}
```
但是如果我们开发的是一个自定义的数据结构，for in 可能就不那么好使了，比如现在有一个音乐播放器对象，我们需要实现一个自定义的播放列表，用于存储用户添加的歌曲。这个列表可以看作一个集合，其中每个元素代表一个歌曲，包含歌曲的名称、作者、时长等属性。

这时我们就可以通过定义 Symbol.iterator 方法，让这个列表可以通过 for...of 循环进行遍历
```js
class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

class Playlist {
  constructor() {
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  [Symbol.iterator]() {
    let index = 0;
    const songs = this.songs;
    return {
      next: () => ({
        value: songs[index++],
        done: index > songs.length
      })
    }
  }
}

const playlist = new Playlist();

playlist.addSong(new Song('Song 1', 'Artist 1', '3:45'));
playlist.addSong(new Song('Song 2', 'Artist 2', '4:20'));
playlist.addSong(new Song('Song 3', 'Artist 3', '5:10'));

for (const song of playlist) {
  console.log(song.name);
}

// 输出：
// "Song 1"
// "Song 2"
// "Song 3"
```

### Symbol.toStringTag
默认情况下，我们在任何一个自定义的对象上调用 toString 方法，返回值都是下面这样

```
[object Object]
```

Symbol.toStringTag 可以被用来自定义对象的 toString 方法的返回值（注意不是重写 toString 方法），这个特性在调试的时候非常有用，帮助开发者更方便地了解对象的类型信息

```js
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get [Symbol.toStringTag]() {
    return 'People';
  }
}

const people = new People('ConardLi', 17);

console.log(people.toString()); // [object People]

```

### Symbol.toPrimitive

Symbol.toPrimitive 可以被用来自定义对象类型转换时的行为。它可以接受一个 hint 参数，用于指示对象应该被转换成什么类型的值，比如 Number、String 或者其他默认的值。

举一个实际的应用场景：假设我们正在开发一个日期处理工具，其中需要实现一个自定义的日期时间对象。这个对象包含日期时间的年月日时分秒等信息，这时候就可以用到 Symbol.toPrimitive 方法，来帮助我们自定义对象的类型转换行为
```js
class MyDateTime {
  constructor(year, month, day, hour = 0, minute = 0, second = 0) {
    this._datetime = new Date(year, month - 1, day, hour, minute, second);
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return this._datetime.getTime();
      case 'string':
        return this._datetime.toLocaleString();
      default:
        return this._datetime.toString();
    }
  }
}

const myDate = new MyDateTime(2023, 4, 8, 15, 30, 0);

console.log(myDate); // 输出：Sat Apr 08 2023 15:30:00 GMT+0800 (中国标准时间)
console.log(myDate + 10000); // 输出：1699950200000
console.log(`${myDate}`); // 输出："2023/4/8 下午3:30:00"
```
### Symbol.replace
Symbol.replace 可以帮我们更灵活的处理 String.prototype.replace 方法，比如我们可以自定义字符串的替换行为。

比如有这样一个需求场景：我们有一个字符串处理库，我们想自定义它的 replace 方法，让它可以替换一个字符串的所有元音字母。这时候就可以用到 Symbol.replace

```js
const vowels = ['a', 'e', 'i', 'o', 'u'];

const customReplace = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += '*';
    } else {
      result += str[i];
    }
  }
  return result;
};

const customString = {
  [Symbol.replace]: customReplace
};

const originalString = "hello world";

const result = originalString.replace(customString, '');

console.log(result); // outputs "h*ll* w*rld"

```
### Symbol.asyncIterator
Symbol.asyncIterator 可以用来实现一个对象的异步迭代器，它可以用于遍历异步数据流，比如异步生成器函数、异步可迭代对象等。这个特性在我们需要处理异步数据流时非常有用。

举一个实际的应用场景：假设我们正在开发一个异步数据源处理器，其中包含了大量的异步数据，比如网络请求、数据库查询等。这些数据需要被逐个获取并处理，同时由于数据量非常大，一次性获取全部数据会导致内存占用过大，因此需要使用异步迭代器来逐个获取数据并进行处理

```js
class AsyncDataSource {
  constructor(data) {
    this._data = data;
  }

  async *[Symbol.asyncIterator]() {
    for (const item of this._data) {
      const result = await this._processAsyncData(item);
      yield result;
    }
  }

  async _processAsyncData(item) {
    // 模拟异步处理数据的过程
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item.toUpperCase());
      }, Math.random() * 1000);
    });
  }
}

async function processData() {
  const dataSource = new AsyncDataSource(['a', 'b', 'c', 'd', 'e']);
  for await (const data of dataSource) {
    console.log(data);
  }
}

processData();

```
### Symbol.hasInstance

Symbol.hasInstance可以用于确定一个对象是否是某个构造函数的实例，它可以用来改变 instanceof 的行为

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

const arr = [1, 2, 3];
console.log(arr instanceof MyArray); // true

```
### Symbol.species

Symbol.species 可以用于指定创建派生对象时要使用的构造函数。一个实际的需求场景可能是我们需要对一个类进行继承，并且希望这个类的某些方法返回一个新的派生对象而不是基类的实例对象。下面是一个简单的例子

```js
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  test(){
    console.log('test');
  }
}

const myArray = new MyArray(1, 2, 3);
const mappedArray = myArray.map(x => x * 2);
myArray.test();

console.log(mappedArray instanceof MyArray); // false
console.log(mappedArray instanceof Array); // true
```
### Symbol.match
Symbol.match 可以用来确定使用 String.prototype.match 方法时要搜索的值，它可用于更改 match 类 RegExp 对象的方法行为，下面是一个实际实用案例

```js
class CustomRegExp extends RegExp {
  [Symbol.match](str) {
    const matches = super[Symbol.match](str);
    if (matches) {
      return matches.map(match => {
        return `匹配到了: ${match}`;
      });
    }
    return matches;
  }
}

const regex = new CustomRegExp('hello', 'g');
const result = 'hello world'.match(regex);
console.log(result); // ["匹配到了: hello"]
```
### Symbol.split
Symbol.split 可以用来确定使用 String.prototype.split 方法执行时具体要拆分的值。

一个实际需求场景：我们需要从文本中提取出所有的数字。但是文本中的数字可能包含在不同的字符和符号中，例如括号、分隔符和单位等。使用 Symbol.split 可以自定义分割符，这样我们就可以根据自己的需求来对文本进行分割。
```js
const customSplit = str => str.split(/[\s$¥€]+/);

const customRegExp = {
  [Symbol.split]: customSplit
};

const string = "100$200¥300€400 500";

console.log(string.split(customRegExp)); // outputs [ '100', '200', '300', '400', '500' ]

```
### Symbol.unscopables

Symbol.unscopables 通常可以用来避免在使用 with 语句时访问对象中不希望被访问的属性。下面是一个示例，其中使用 with 语句访问对象的某些属性，但通过将这些属性添加到 [Symbol.unscopables] 对象中，可以防止访问

```js
const globalVars = {
  a: 10,
  b: 20,
  [Symbol.unscopables]: {
    b: true
  }
};

with (globalVars) {
  console.log(a); // 输出 10
  console.log(b); // 抛出 ReferenceError
}

```
### 对象属性

Symbol 是独一无二的所以可以保证对象属性的唯一。

* Symbol 声明和访问使用 []（变量）形式操作

* 也不能使用 . 语法因为 .语法是操作字符串属性的。

下面写法是错误的，会将symbol 当成字符串symbol处理

```js
let symbol = Symbol("xixi");
let obj = {
  symbol: "coderixixi"
};
console.log(obj);
```
正确写法是以[] 变量形式声明和访问
```js
let symbol = Symbol("xixi");
let obj = {
  [symbol]: "coderixixi"
};
console.log(obj);
```