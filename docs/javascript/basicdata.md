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