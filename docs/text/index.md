## 基本标签

### p

<font color=red>p</font>标签标记了一个段落内容

```html
<p>
人何在，桂影自婵娟
</p>
```

### pre

原样显示文本内容包括空白、换行等。

```html
<pre>
        这是pre标签的显示效果
            这是换行后的内容，空白和换行都会保留
</pre>
```
### br

在html 中回车是忽略的，使用 br 标签可以实现换行效果。

### span

span 标签与 div 标签都是没有语义的，span 常用于对某些文本特殊控制，但该文本又没有适合的语义标签。

## 描述文本

### small

small 用于设置描述、声明等文本。

```html
<small> 半年付 </small>
```
### time

标签定义日期或时间，或者两者
```html
<time> 2019-07-26 </time>

```

### abbr

abbr标签用于描述一个缩写内容

### sub

用于数字的下标内容

```html
水的化学式为H<sub>2</sub>O
```

### SUP

用于数字的上标内容

```html
请计算5<sup>2</sup>平方
```

### del

del 标签表示删除的内容，ins 一般与 del 标签配合使用描述更新与修正。

```html
原价 <del>200元</del> 现价 <ins>100元</ins>

```

### s

s 标签显示效果与 del 相似，但语义用来定义那些不正确、不准确或没有用的文本。

```html
<s>A 太阳是方的</s> <br>
B 地球是圆的
```

### code

用于显示代码块内容，一般需要代码格式化插件完成。

### progress

用于表示完成任务的进度，当游览器不支持时显示内容。

## 强调文本

### strong

strong 标签和 em 一样，用于强调文本，但是它们的强调程度不同。

```html
<strong>后盾人</strong>专注WEB开发技术，不断更新<em>视频教程</em>
```

### mark

用于突出显示文本内容，类似我们生活中使用的马克笔
```html
 <mark>CSS</mark>、<mark>JavaScript</mark>

```

## 引用标签

### cite

cite 标签通常表示它所包含的文本对某个参考文献的引用，或文章作者的名子。

```html
<cite>cite</cite> 
```

### blockquote

blockquote 用来定义摘自另一个源的块引用

```html
黄沙百战穿金甲，不破楼兰终不还
<blockquote cite="https://www.houdunren.com">
	从今别却江南路，化作啼鹃带血归
</blockquote>

```

### q

q 用于表示行内引用文本，在大部分浏览器中会加上引号。

```html
醉卧沙场君莫笑，古来征战几人回 <q>无边落木萧萧下，不尽长江滚滚来</q> 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。 白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中
```

## 联系信息

### address

用于设置联系地址等信息，一般将address 放在footer 标签中。

```html
<address>
	感谢您提交建议到xxxxxxxx
</address>

```








