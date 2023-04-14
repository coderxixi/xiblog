

### 迭代协议
迭代协议具体分为可迭代协议和迭代器协议。
#### 可迭代协议

1.什么是可迭代协议？
```
可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为。
```

2.成为可迭代对象的条件

一个对象要成为可迭代对象，必须实现@@iterator方法，即对象（或者原型链上的某个对象）必须有一个键为 @@iterator 的属性，可通过常量 Symbol.iterator访问该属性。所以

```
一个对象成为可迭代对象的条件：实现了@@iterator方法 [Symbol.iterator]
一个无参数的函数，其返回值为一个符合迭代器协议的对象。
```
3.相关说明

* 当一个对象需要被迭代的时候，会首先不带参数调用其@@iterator方法，然后使用此方法返回的迭代器获得要迭代的值。
* @@iterator方法是被当作可迭代对象的方法进行调用的，其函数内部的this值指向可迭代对象。
* 此函数可以是普通函数，也可以是生成器函数
实际写代码时，不需要显示调用@@iterator方法来生成迭代器。以下这些接收可迭代对象的原生语言特性会在后台调用提供的可迭代对象的@@iterator方法来创建一个迭代器。

```
for-of 循环
数组解构
扩展操作符
Array.from()
创建集合
创建映射
Promise.all() 接收由promise组成的可迭代对象
promise.race() 接收由promise组成的可迭代对象
yield*操作符,在生成器中使用
```

#### 迭代器协议


1.什么是迭代器协议

```
迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。
```

2.成为迭代器的条件

```
一个对象成为迭代器的条件：实现了一个拥有以下语义（semantic）的next()方法
```

* next 一个无参数的或者可以接受一个参数的函数，返回一个应当拥有以下两个属性的对象

* done（boolean）：

如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定  done 这个属性。）
如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。


* value：迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

next() 方法必须返回一个对象，该对象应当有两个属性： done 和 value
如果返回了一个非对象值（比如 false 或 undefined），则会抛出一个 TypeError 异常（"iterator.next() returned a non-object value"）


如下代码中的对象同时满足可迭代协议和迭代器协议：

```js
let myIterator = {
    // 实现了next方法
    next: function() {
        // ...
    },
    // 实现了 @@iterator 方法
    [Symbol.iterator]: function() { return this }
}
```

### 迭代器（iterator）

#### 什么是迭代器
在JavaScript中，迭代器是一个对象，它定义一个序列，并在中止时可能返回一个返回值。具体来说，迭代器是通过使用next()方法实现迭代器协议的任何一个对象。
此外，迭代器是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的API。迭代器无需了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。
一旦创建，迭代器对象可以通过重复调用next（）显式地迭代。 迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次。 在产生终止值之后，对next（）的额外调用应该继续返回{done：true}。
以内置可迭代对象数组（Array）的为例，其内部包含[Symbol.iterator]属性，调用@@iterator方法则会生成一个迭代器，然后通过迭代器的next()消耗迭代器：

```js
let arr = [1, 3, 6];
iter = arr[Symbol.iterator]();  
console.log(iter);  // Array Iterator {}
console.log(iter.next());  // {value: 1, done: false}
console.log(iter.next());  // {value: 3, done: false}
console.log(iter.next());  // {value: 6, done: false}
```

#### 自定义迭代器

如上所述，成为可迭代对象需要实现@@iterator方法，成为迭代器对象需要实现next()方法。所以，一般自定义迭代器可写成如下形式。
```js
class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    // 实现了[Symbol.iterator] 方法，Counter满足成为可迭代对象的条件
    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {
            // 实现了 next 方法，满足成为迭代器的条件，则该[Symbol.iterator]方法的返回值是一个迭代器
            next() {
                if (count <= limit) {
                    // 返回值包含 done 和 value 两个属性
                    return {done: false, value: count++};
                } else {
                    return {done: true, value: undefined};
                }
            }
        };
    }
}

let count = new Counter(3);
for (let i of count) {
    console.log(i);  // 1 2 3
}
```

某些迭代器对象内部也实现了@@iterator方法,且会返回相同的迭代器

```js
let arr=[1,2];
let iter1=arr[Symbol.iterator]();
let iter2=arr[Symbol.iterator]();
console.log(iter1===iter2)
```

####  提前终止迭代器

迭代器中可选的 return() 方法用于指定在迭代器提前关闭时执行的逻辑。

导致迭代器提前关闭的情况包括

* for-of循环通过 break、continue、return或者throw提前退出。
* 解构操作未消费所有的值。

```js
class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    // 实现了[Symbol.iterator] 方法，Counter满足成为可迭代对象的条件
    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {
            // 实现了 next 方法，满足成为迭代器的条件，则该[Symbol.iterator]方法的返回值是一个迭代器
            next() {
                if (count <= limit) {
                    // 返回值包含 done 和 value 两个属性
                    return {done: false, value: count++};
                } else {
                    return {done: true, value: undefined};
                }
            },
            // 迭代器提前关闭执行的操作
            return() {
                console.log('提前关闭！');
                return {done: true};
            }
        };
    }
}

let count = new Counter(3);
for (let i of count) {
    if (i > 1)   
        break;  
    console.log(i);  
}
```

但是需要注意的是，有些迭代器是不可关闭的（可通过检测迭代器实例的return属性是不是一个函数来判定），对一个不可关闭的迭代器添加return属性并不会让其变为可关闭的。例如，数组迭代器是不可关闭的。

```js
let arr = [1, 2, 3];
let iter = arr[Symbol.iterator]();
iter.return = function(){
    console.log('提前关闭！');
    return {done: true};
}

for (let i of iter) {
    if (i > 1)   
        break;  
    console.log(i);  
}
// 1
// 提前关闭！

for (let i of iter) {
    console.log(i);  
}

```

### 生成器（generator）

自定义的迭代器是一个有用的工具，但是由于需要显示地维护其内部状态，因此需要谨慎地创建， 对此ES6提供了生成器结构。在介绍生成器函数如何使用之前，我们先介绍一些生成器相关的基础知识。

#### 生成器对象（Generator）

生成器对象是由一个生成器函数返回的迭代器，并且符合可迭代协议和迭代器协议。

Generator的原型上包含以下三种方法
##### Generator.prototype.next()

next() 方法返回一个包含属性 done 和 value 的对象。该方法也可以通过接受一个参数用以向生成器传值。
语法：

```js
gen.next(value)
```
* value：可选，向生成器传递的值.（如果传递了该参数，那么这个参数会传给上一条执行的 yield语句左边的变量）
返回值：返回的对象包含两个属性:
* done (布尔类型)
如果迭代器超过迭代序列的末尾，则值为 true。 在这种情况下，value可选地指定迭代器的返回值。
如果迭代器能够生成序列中的下一个值，则值为false。 这相当于没有完全指定done属性。
* value 迭代器返回的任意的Javascript值。当 done 的值为 true 时可以忽略该值


```js
function* generator() {
    let a = yield 1;
    let b = yield 2;
    let c = yield 3;
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

let gen = generator(); // "Generator { }"
console.log(gen.next(10));  // {value: 1, done: false}
console.log(gen.next(9));  // {value: 2, done: false}
console.log(gen.next());  // {value: 3, done: false}
console.log(gen.next(8));  
// a = 9, b = undefined, c = 8
// {value: undefined, done: true}

```

从上述代码可以看出：

* next()的参数会传给上一条执行的 yield语句左边的变量。 所以，第一次调用gen.next(10)，参数10并没有传递给任何变量。
* 第二次调用gen.next(9)时，参数 9 传递给了上一条执行的 yield语句左边的变量 a
* 第三次调用gen.next()时，没有传递参数，所以变量 b 的值为undefined
* 第四次调用gen.next(8)时，虽然返回值中done: true，但也不影响参数的传递
此外，next()函数的返回值，与传递的参数无关，只与yield右边返回的值以及生成器是否结束有关。


##### Generator.prototype.return()

return() 方法返回给定的值并结束生成器。

语法
```js
gen.return(value)
```

* value: 需要返回的值
* 返回值：返回该函数参数中给定的值


##### Generator.prototype.throw()

throw() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象。

语法

```js
gen.throw(exception)
```

* exception：用于抛出的异常。 使用 `Error的实例对调试非常有帮助.

* 返回值：带有两个属性的`对象
* * done (boolean)
如果迭代能够继续生产在序列中的下一个值，则值为 false。 这相当与不指定 done 属性的值。
* * value - 迭代器返回的任何 JavaScript 值。当 done 是 true 的时候可以省略。

```js
function* gen() {
    while(true) {
      try {
         yield 42;
      } catch(e) {
        console.log("Error caught!");
      }
    }
  }
  
  var g = gen();
  console.log(g.next()); // { value: 42, done: false }
  console.log(g.throw(new Error("Something went wrong"))); // "Error caught!"  { value: 42, done: false }
  console.log(g.next()); // { value: 42, done: false }
```

从上述代码中可以看出，关于throw()方法需要注意的是，throw()方法并
不会结束生成器

#### yield 关键字
yield 关键字用来暂停和恢复一个生成器函数
语法
```js
[rv] = yield [expression];
```
* expression： 定义通过迭代器协议从生成器函数返回的值。如果省略，则返回undefined。
* rv：返回传递给生成器的next()方法的可选值，以恢复其执行 yield关键字使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。

yield关键字实际返回一个IteratorResult对象，它有两个属性，value和done。value属性是对yield表达式求值的结果，而done是false，表示生成器函数尚未完全完成
#### yield* 表达式

yield* 表达式用于委托给另一个generator 或可迭代对象。 
语法：
```js
yield* [[expression]];
```
expression：返回一个可迭代对象的表达式。

* yield*委托给其他生成器

```js
function* generator(){
    yield* anotherGenerator();
}
function* anotherGenerator(){
    yield 1
}
var gen = generator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```
* yield*委托给其他可迭代对象：

```js
function* generator(){
    yield* [1, 2];
}
var gen = generator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

* yield* 表达式迭代操作数，并产生它返回的每个值。
* yield* 表达式本身的值是当迭代器关闭时返回的值（即done为true时）

```js
function* anotherGenerator() {
    yield 1
    return "foo";
}
  
var result;

function* generator() {
    result = yield* anotherGenerator();
}

var iterator = generator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // {value: undefined, done: true}

console.log(result);  // "foo"
// 若anotherGenerator函数没有显示返回 "foo"，那么result的值为undefined


```

#### 生成器函数

生成器函数允许定义一个包含自由迭代算法的函数，同时可以自动维护自己地状态。生成器函数在执行时能暂停，后面又能从暂停处继续执行。

##### 定义生成器函数
在JavaScript中可以通过生成器函数声明、生成器函数表达式、GeneratorFunction构造函数来定义生成器函数
###### function*
function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 ( generator function ) ，它返回一个 Generator 对象。

```js
function* name([param[, param[, ... param]]]) { statements }
```

* name：函数名
* param：要传递给函数的一个参数的名称，一个函数最多可以有255个参数。 可通过以下方式在不同地方定义生成器函数。


```js
// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
let generatorFn = function* () {}

// 作为对象属字面量方法地生成器函数
let obj = {
    * generatorFn() {}
}

// 作为类实例方法的生成器函数
class Foo = {
    * generatorFn() {}
}
```

###### GeneratorFunction
除了通过生成器函数声明和生成器函数表达式来定义生成器函数，也可以通过GeneratorFunction构造其创建新的生成器函数对象。在JavaScript中，生成器函数实际上都是GeneratorFunction的实例对象。

```js
new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
```

* arg1, arg2, ... argN：函数使用的名称作为形式参数名称。每个必须是一个字符串，对应于一个有效的JavaScript标识符或这样的字符串的列表，用逗号分隔；如“x”，“theValue”或“a,b”。
* functionBody：一个包含多条表示JavaScript函数体语句的字符串。
GeneratorFunction不是全局对象
GeneratorFunction不是全局对象，需要通过Object.getPrototypeOf(function*(){}).constructor获取

```js

// 获取 GeneratorFunction 对象
GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;

// 通过 GeneratorFunction 构造器创建生成器函数
generatorFn = new GeneratorFunction();
console.log(generatorFn);  // ƒ* anonymous() { }

```
所有生成器函数都是 GeneratorFunction 的实例对象

```js
function* generatorFn() {}
GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;

console.log(generatorFn instanceof GeneratorFunction)  // true
console.log(generatorFn.__proto__ === GeneratorFunction.prototype)  // true

```

##### 执行生成器函数

###### 生成器函数一般执行过程

调用一个生成器函数

* 首先并不会马上执行它里面的语句，而是返回一种称为Generator的 迭代器 （iterator）对象。
* 当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield 后紧跟迭代器要返回的值。
* 或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行），继续执行到另一个生成器函数出现yield的位置为止


```js
// 生成器函数
function* anotherGenerator() {
    yield 2;
    yield 3;
}

function* generator() {
    yield 1;
    yield* anotherGenerator();
    yield 4;
}

// 调用生成器函数首先返回一个Generator 
let gen = generator(); // "Generator { }"

// 首次调用 generator 的 next() 方法，执行到第一个yield出现的位置为止，并返回yield后的值
console.log(gen.next());  // {value: 1, done: false}

// 接着调用 generator 的 next() 方法，遇到 yield* ，将执行权移交给 anotherGenerator
// 继续执行到 anotherGenerator 出现 yield 的位置，并返回yield后的值
console.log(gen.next());  // {value: 2, done: false}

// 接着调用 generator 的 next() 方法，anotherGenerator 执行到出现 yield 的位置，并返回yield后的值
console.log(gen.next());  // {value: 3, done: false}

// 接着调用 generator 的 next() 方法，anotherGenerator 生成器函数已经执行完毕，执行权交回 generator
// 继续执行到 generator 出现 yield 的位置，并返回yield后的值
console.log(gen.next());  // {value: 4, done: false}

// generator 生成器函数执行完毕，next() 返回值中 done 为 true
console.log(gen.next());  // {value: undefined, done: true}


```

###### 带参数的生成器函数

生成器也可以接收参数

```js
function* generator(n){
    yield n + 2;
}

var gen = generator(2);
console.log(gen.next().value); // 4
console.log(gen.next().value); // undefined

```

###### 生成器 暂停 或 结束 执行的条件

每次调用生成器的next()方法时，生成器都会恢复执行，直到达到以下某个值

* yield导致生成器再次暂停并返回生成器的新值。 下一次调用next()时，在yield之后紧接着的语句继续执行。
* 到达生成器函数的结尾在这种情况下，生成器的执行结束，并且IteratorResult给调用者返回undefined并且done为true。

```js
function* generator() {
    yield 1;
    yield 2;
}

let gen = generator(); // "Generator { }"
// 遇到 yield 暂停并返回生成器的新值
console.log(gen.next());  // {value: 1, done: false}
console.log(gen.next());  // {value: 2, done: false}

// 到达生成器函数的结尾, 生成器的执行结束
console.log(gen.next());  // {value: undefined, done: true}

```

* 到达return 语句 在这种情况下，生成器的执行结束，并将IteratorResult返回给调用者，其值是由return语句指定的，并且done 为true

```js
function* generator() {
    yield 1;
    return 2;
    yield 3;
}

let gen = generator(); // "Generator { }"
console.log(gen.next());  // {value: 1, done: false}

// 到达return语句，生成器结束
console.log(gen.next());  // {value: 2, done: true}
console.log(gen.next());  // {value: undefined, done: true}

```



* throw 用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样

```js
function* generator() {
    yield 1;
    throw new Error();
    yield 3;
}

let gen = generator(); // "Generator { }"
console.log(gen.next());  // {value: 1, done: false}
console.log(gen.next());  // Uncaught Error
console.log(gen.next());  // 该条语句不会继续执行了

```

###### 提前终止生成器

Generator对象上有个方法return()可以结束生成器，具体使用如下

```js
function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen();
  
  console.log(g.next());        // { value: 1, done: false }
  
  // 提前结束生成器
  console.log(g.return("foo")); // { value: "foo", done: true }
  
  // 生成器已结束，后续值无法迭代
  console.log(g.next());        // { value: undefined, done: true }

```

此外，对于已经结束的生成器对象使用return()方法，如果提供了参数，则参数将被设置为返回对象的value属性的值。

```js
function* gen() {
    yield 1;
  }
  
  var g = gen();
  
  console.log(g.next());        // { value: 1, done: false }
  console.log(g.next());        // { value: undefined, done: true }
  console.log(g.return("foo")); // { value: "foo", done: true }

```

#### for-of

说到迭代器和生成器，那就顺带了解以下 for-of

```
for...of语句在可迭代对象上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
```
语法

```
for (variable of iterable) {
    //statements
}
```

* variable： 在每次迭代中，将不同属性的值分配给变量。
* iterable：被迭代枚举其属性的对象。

###### for...of与for...in的区别

无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式
* for...in 语句以任意顺序迭代对象的可枚举属性。
* for...of 语句遍历可迭代对象定义要迭代的数据。

```js
let arr = ['a', 'b'];

for (let i in arr) {
    console.log(i);  
}
// 0
// 1

for (let i of arr) {
    console.log(i);  
}
// a
// b

```

#### 小结


* 什么是可迭代对象：实现@@iterator方法的对象，可通过常量 Symbol.iterator访问该属性
* 什么是迭代器：本质上就是一个对象，且实现了一个拥有特定语义的next()方法
* 可以通过自定义@@iterator方法和next()方法自定义迭代器，并且可通过return()方法提前终止迭代器。
* 什么是生成器：一个拥有在函数块内暂停和恢复代码执行能力的结构。通过next()恢复代码执行，遇到yield关键字暂停执行。
* 生成器执行过程中遇到throw和return会结束生成器，也可以调用生成器对象的return()函数提前结束生成器

