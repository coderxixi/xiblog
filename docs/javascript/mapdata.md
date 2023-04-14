### Map
Map是一组键值对的结构，用于解决以往不能用对象做为键的问题

* 具有极快的查找速度
* 函数、对象、基本类型都可以作为键或值

可以接受一个数组作为参数，该数组的成员是一个表示键值对的数组。

```js
let m = new Map([
  ['xixi', '嘻嘻'],
  ['coderxixi', '刘嘻嘻']
]);

console.log(m.get('xixi')); //嘻嘻

```

使用set 方法添加元素，支持链式操作

```js
let map = new Map();
let obj = {
  name: "xixi"
};
map.set(obj, "coderxixi").set("name", "嘻嘻");
console.log(map.entries()); //MapIterator {{…} => "coderxixi", "name" => "嘻嘻"}
```

使用构造函数new Map创建的原理如下

```js
const userMap = new Map();
const arr = [["xixi", "coderxixi"], ["xixi", "嘻嘻"]];

arr.forEach(([key, value]) => {
  userMap.set(key, value);
});
console.log(userMap);

```

对于键是对象的Map， 键保存的是内存地址，值相同但内存地址不同的视为两个键。
```js

let arr = ["xixi"];
const user = new Map();
user.set(arr, "coderxixi");
console.log(user.get(arr)); //coderxixi
console.log(user.get(["xixi"])); //undefined
```

#### 获取数量
获取数据数量

```js
const map=new Map()
console.log(map.size);
```

#### 元素检测

检测元素是否存在

```js
const map=new Map()
console.log(map.has(obj1));
```

#### 读取元素

```js
let map = new Map();

let obj = {
	name: 'xixi'
}
map.set(obj,'coderxixi');
console.log(map.get(obj));
```
#### 删除元素

使用 delete() 方法删除单个元素
```js
let map = new Map();
let obj = {
	name: 'xixi'
}
map.set(obj, 'coderxixi');
console.log(map.get(obj));
map.delete(obj);
console.log(map.get(obj));
```

#### 遍历数据

使用 keys()/values()/entries() 都可以返回可遍历的迭代对象。

```js

let user = new Map([["xixi", "嘻嘻"], ["coderxiix", "刘嘻嘻"]]);
console.log(user.keys()); //MapIterator xixi coderxiix
console.log(user.values()); //MapIterator  嘻嘻  刘嘻嘻
console.log(user.entries()); //MapIterator  "xixi"=> 嘻嘻  "coderxiix"=>刘嘻嘻,
```

可以使用keys/values 函数遍历键与值

```js
let user = new Map([["xixi", "嘻嘻"], ["coderxixi", "刘嘻嘻"]]);
for (const key of user.keys()) {
  console.log(key);
}
for (const value of user.values()) {
  console.log(value);
}
```

使用for/of遍历操作，遍历Map 等同于使用entries() 函数

```js
let user= new Map([["xixi", "嘻嘻"], ["coderxixi", "刘嘻嘻"]]);
for (const [key, value] of user) {
  console.log(`${key}=>${value}`);
}

```

使用forEach遍历操作

```js
let user= new Map([["xixi", "嘻嘻"], ["coderxixi", "刘嘻嘻"]]);
user.forEach((value,key)=>{
  console.log(`${key}=>${value}`);

})

```

#### 数组转换

可以使用展开语法 或 Array.form 静态方法将Set类型转为数组，这样就可以使用数组处理函数了

```js
let user= new Map([["xixi", "嘻嘻"], ["coderxixi", "刘嘻嘻"]]);
console.log(...user); //(2) ["xixi", "嘻嘻"] (2) ["coderxixi", "刘嘻嘻"]
console.log(...user.entries()); //) ["xixi", "嘻嘻"] (2) ["coderxixi", "刘嘻嘻"]
console.log(...user.values()); //嘻嘻 刘嘻嘻
console.log(...user.keys()); //xixi coderxixi

```
检索包含xixi的值组成新Map

```js
let user = new Map([["xixi", "嘻嘻"], ["coderxixi", "刘嘻嘻"]]);

let newArr = [...user].filter(function(item) {
  return item[1].includes("xixi");
});

user = new Map(newArr);
console.log(...user.keys());

```
### WeakMap

WeakMap 对象是一组键/值对的集

* 键名必须是对象
* WeaMap对键名是弱引用的，键值是正常引用
* 垃圾回收不考虑WeaMap的键名，不会改变引用计数器，键在其他地方不被引用时即删除
* 因为WeakMap 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行forEach( )遍历等操作
* 也是因为弱引用，WeaMap 结构没有keys( )，values( )，entries( )等方法和 size 属性
* 当键的外部引用删除时，希望自动删除数据时使用 WeakMap


#### 声明定义

以下操作由于键不是对象类型将产生错误


```js
new WeakSet("xixi"); //TypeError: Invalid value used in weak set
```

#### 基本操作

下面是WeakSet的常用指令

```js

const user = new WeakMap();
const arr = ["coderxixi"];
//添加操作
user.set(arr, "xixi");
console.log(user.has(arr)); //true
//删除操作
user.delete(arr);
//检索判断
console.log(user.has(arr)); //false
```

#### 垃圾回收

WakeMap的键名对象不会增加引用计数器，如果一个对象不被引用了会自动删除。

* 下例当hd删除时内存即清除，因为WeakMap是弱引用不会产生引用计数
* 当垃圾回收时因为对象被删除，这时WakeMap也就没有记录了