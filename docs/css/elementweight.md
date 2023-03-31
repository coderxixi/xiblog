## 元素权重

元素会被多个样式一层层作用，这就是层叠样式表的来源。如果多个样式做用在元素上就会产生优先级权重问题。
使用类、ID、伪类都有不同的权重，具体应用哪条规则要看权限大小。

* 相同权重的规则应用最后出现的
* 可以使用 !important 强制提升某个规则的权限

## 权重应用

|  属性   | 说明  |
|  ----  | ----  | 
| ID | 0100 |
| class，类属性值  | 0010| 
| 标签,伪元素  | 0001|
| *  | 0000|
| 行内样式 | 1000|

下面是 ID 权限大于 CLASS 的示例

```html
<style>
  .color {
  	color: red;
  }

  #hot {
  	color: green;
  }
</style>

<h2 class="color" id="hot">HDCMS</h2>

```

属性权重的示例

```html
<style>
  /* 权重:0021 */
  h2[class="color"][id] {
		color: red;
  }

  /* 权重:0012 */
  article h2[class="color"] {
  	color: blue;
  }
</style>

<article>
	<h2 class="color" id="hot">HDCMS</h2>
</article>
```
行级权重优先级最高

```html
<style>
  /* 权重:0012 */
  article h2[class="color"] {
  	color: blue;
  }

  #hot {
  	color: black;
  }
</style>

<h2 class="color" id="hot" style="color:green;">HDCMS</h2>
```

## 强制优先级

有时在规则冲突时，为了让某个规则强制有效可以使用 !important。

```html
<style>
  h2 {
 	 color: red !important;
  }

  h2 {
 	 color: green;
  }
</style>

<h2>HDCMS</h2>
```
两条规则权限一样，默认应用第二个规则，但第一个规则使用了!important 提升了权限，所以被应用。

## 继承规则

子元素可以继承父元素设置的样式

* 子元素并不是全部样式。比如边框、高度等并不会继承。
* 继承的规则没有权重

```html
<style>
  article {
    color: red;
    border: solid 1px #ddd;
  }
</style>
...

<article>
	<h2><span>落红不是无情物，化作春泥更护花</span></h2>
</article>
```
上例中 h2 标签没有设置颜色样式，将继承 html 的颜色，并且边框没有产生继承。

## 通配符

在开发中使用* 选择器会有一个问题。因为通配符的权限为 0，而继承的规则没有权重，看以下代码产生的问题。

```html
<style>
  * {
  	color: red;
  }

  h2 {
  	color: blue;
  }
</style>

<article>
	<h2>hdcms <span>内容管理系统</span></h2>
</article>
```
h2 中的 span 并没有继承 h2 的颜色，就是因为继承没有权重。而使用了 * 权重为 0 的规则