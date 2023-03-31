## 基础知识

CSS 主要是对页面元素的美化

大部分 HTML 元素都有系统提供的样式，但有以下问题

* 不同浏览器显示样式不一致
* 样式过于简单，显示效果不美观
* 很难按照设计稿完全呈现显示效果

## 样式声明

可以通过多种方式定义样式表

## 外部样式

使用 link 标签引入外部样式文件，需要注意以下几点

* link 标签放在 head 标签内部
* 样式文件要以 .css 为扩展名
* 一个页面往往需要引入多个样式文件

|  属性   | 说明  |
|  ----  | ----  | 
| rel  | 定义当前文档与被链接文档之间的关系 |
| href  | 外部样式文件| 
| type  | 文档类型|

```html
<link rel="stylesheet" href="xxxxx.css" type="text/css">

```

## 嵌入样式

使用 style 标签可以在文档内部定义样式规则。

```css
<style>
	body {
		background: red;
	}
</style>

```
## 内联样式

可以为某个标签单独设置样式。

```html
<h1 style="color:green;">可以为某个标签单独设置样式</h1>
```
## 导入样式

使用 @import 可以在原样式规则中导入其他样式表，可以在外部样式、style标签中使用。

可以使用以下两种方式导入

```css
@import "xx.css"
@import url("xx.css")
```
导入样式要放在样式规则前面定义


```css
<style>
	@import url("xixi.css");
	body {
		background: red;
	}
</style1>

```

## 其他细节

###  空白

在样式规则中可以随意使用空白，空白只是看不见但同样占用空间，所以可以结合其他工具如 webpack 等将css 压缩为一行

### 注释
注释是对定义样式规则的说明，便于后期维护理解。

```css
body {
	/* 这是注释的使用 */
	background: red;
}

```

### 错误

样式规则如果存在错误，解析器会选择忽略，并不会影响其他样式规则。

以下代码的sheng:red 是无效样式但不影响后面的 font-size:100px; 规则使用

```css
h1 {
    sheng: red;
    font-size: 100px;
}

```

## 初始样式

有些标签默认含有内外边距，且不同浏览器大小也不一样。为了统一我们可以重置标签的 CSS 默认样式。

```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />

```



