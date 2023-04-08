## 命名空间

TypeScript 像其他编程语言一样，存在命名空间（namespace）的概念。

当我们定义以下同名变量时是不允许的，这种情况可以通过命名空间解决

```ts
let name: string = '刘嘻嘻'
let name: string = 'liuxixi'

```

下面是使用命名空间将变量隔离

* 数据需要使用 export 导出才可以使用
* 子命名空间也需要 export 后才可以使用


```ts

namespace User {
    export let name: string = '刘嘻嘻'
}
namespace Member {
    let name: string = 'liuxixi'
}

console.log(User.name);

console.log(Member.name); //报错，因为没有使用 export 将变量导出

```

命名空间支持嵌套

```ts

namespace User {
    export let name: string = '刘嘻嘻'
    export namespace Member {
        export let name: string = 'liuxixi'
    }
}

console.log(User.name);
console.log(User.Member.name); //liuxixi 获取子命名空间中的数据
```

## 单独编译

下面将每个 ts 文件单独进行编译，然后在 html 文件中依次引入

首先创建 tsconfig.js


```sh
tsc --init
```

然后执行文件监测

```sh

tsc -w
```

下面我们创建user.ts模块文件

```ts
namespace User {
    export let name: string = 'liuxixi'
}
namespace Member {
    export let name: string = '刘嘻嘻'
}

```

在 index.ts 文件中定义业务内容，即使用 User.ts 中的数据 User.name

```
console.log(User.name);
```

然后执行编译

```sh
tsc -w
```

创建 index.html 文件引入这两个 JS 文件，注意要将 namespace.js 文件先引入


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>blog</title>
        <script src="user.js" defer></script>
        <script src="index.js" defer></script>
    </head>
    <body></body>
</html>
```

## reference

如果存在多个文件都像上面一样在命令行填写，显然是很麻烦了。我们可以使用以下方法优化

在 index.ts 中使用 reference 引入依赖的文件

```ts
/// <reference path="user.ts"/>
console.log(User.name);

```

然后使用下面的命令编译到一个文件中

```sh

tsc --outFile ./dist/app.js index.ts
```

## amd

使用 amd 模块打包较上面的打包方式方便些，因为我们可以在代码中使用 js 模块的 export/import 语法

首先创建 ts 配置文件 tsconfig.js

```sh
tsc --init
```

然后修改配置项

```json
"module": "amd"
```

然后创建 user.ts，并且只导出 User 类

```ts
export namespace User {
    export let name: string = '刘嘻嘻'
}
export namespace Member {
    export let name: string = 'liuxixi'
}

```
在 index.ts 文件中 import 导入 ts 编译后的 User.js 模块

```js
import { User } from './user.js'
```

然后执行命令进行编译


```sh

tsc --outFile ./dist/app.js
```