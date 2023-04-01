<script setup>
import Table from './components/table.vue';
import Draw from './components/draw.vue';
import Form from "./components/form.vue"
</script>

## 表格

表格可以非常快速的部署数据,表格不能设置外边距

### 定制表格

除了使用 table 标签绘制表格外，也可以使用样式绘制。
| 样式规则 | 说明 |
| ---- | ---- |
| table | 对应 table |
| table-caption | 对应 caption|
| table-row |对表 tr|
|table-row-group |对应 tbody|
| table-header-group |对应 thead|
| table-footer-group |对应 tfoot|

```html
<style>
  .table {
    display: table;
    border: solid 1px #ddd;
  }

  .table nav {
    display: table-caption;
    text-align: center;
    background: black;
    color: white;
    padding: 10px;
  }

  .table section:nth-of-type(1) {
    font-weight: bold;
    display: table-header-group;
    background: #555;
    color: white;
  }

  .table section:nth-of-type(2) {
    display: table-row-group;
  }

  .table section:nth-of-type(3) {
    display: table-footer-group;
    background: #f3f3f3;
  }

  .table section ul {
    display: table-row;
  }

  .table section ul li {
    padding: 10px;
    display: table-cell;
    border: solid 1px #ddd;
  }
</style>

<article class="table">
  <nav>嘻嘻博客</nav>
  <section>
    <ul>
      <li>标题</li>
      <li>说明</li>
    </ul>
  </section>
  <section>
    <ul>
      <li>青鸟不传云外信，丁香空结雨中愁</li>
      <li>鸿雁在云鱼在水，惆怅此情难寄</li>
    </ul>
    <ul>
      <li>黄昏庭院柳啼鸦</li>
      <li>记得那人，和月折梨花</li>
    </ul>
  </section>
  <section>
    <ul>
      <li>不断更吹到一片秋香</li>
      <li>清辉了如雪新视频</li>
    </ul>
  </section>
</article>
```

<Table>
<article class="table">
          <nav>嘻嘻博客</nav>
          <section>
              <ul>
                  <li>标题</li>
                  <li>说明</li>
              </ul>
          </section>
          <section>
              <ul>
                  <li>青鸟不传云外信，丁香空结雨中愁</li>
                  <li>鸿雁在云鱼在水，惆怅此情难寄</li>
              </ul>
              <ul>
                  <li>黄昏庭院柳啼鸦</li>
                  <li>记得那人，和月折梨花</li>
              </ul>
          </section>
          <section>
              <ul>
                  <li>不断更吹到一片秋香</li>
                  <li>清辉了如雪新视频</li>
              </ul>
          </section>
  </article>
</Table>

### 表格标题

通过 caption-side 可以设置标题位置，值可以设置为 top | bootom

```html
<style>
  table caption {
    background: black;
    color: white;
    padding: 10px;
    caption-side: top;
  }
</style>

<table border="1">
  <caption>
    李白《折荷有赠》
  </caption>
  <tr>
    <td>攀荷弄其珠</td>
    <td>荡漾不成圆</td>
  </tr>
</table>
```

<Table>

<table border="1">
        <caption>李白《折荷有赠》</caption>
        <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
</table>
</Table>

### 内容对齐

水平对齐使用 text-align 文本对齐规则

```css
<style>
	table tr td {
    height: 100px;
    text-align: center;
  }
</style>
```

垂直对齐使用 vertical-align 处理

| 属性   | 说明     |
| ------ | -------- |
| top    | 顶对齐   |
| middle | 垂直居中 |
| bottom | 底部对齐 |

```css
<style>
	table tr td {
    height: 100px;
    vertical-align: bottom;
    text-align: center;
  }
</style>

```

### 颜色设置

为表格设置颜色与普通标签相似，可以为 table | thead | tbody | caption | tfoot| tr| td 设置颜色样式

```html
<style>
  table tr {
    color: white;
  }
  table tr:nth-child(odd) {
    background: red;
  }
  table tr td:nth-child(even) {
    background: #067db4;
  }
</style>
```

<Table>
<div class=box>
<table border="1">
        <caption>李白《折荷有赠》</caption>
        <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
</table>
</div>

</Table>

### 使用选择器设置表格隔行变色

```css
  table thead tr {
            background: #118d68;
            color: #fff;
        }

        table tbody tr:nth-child(odd) {
            background: #1bb385;
            color: white;
        }

```

<Table>
<div class=boxs>
<table >
        <caption>李白《折荷有赠》</caption>
        <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
         <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
         <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
         <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
</table>
</div>



</Table>


### 边框间距

设置单元格间距，设置间距上下 10px ，左右 50px。

```css
table {
    border-spacing: 50px 10px;
}
```

### 边框合并

默认表格边框间是有间距的，以下示例将边框合并形成细线表格

```css
table {
  border-collapse: collapse;
}
```
<Table>
<div class='table'>
<table >
        <tr>
            <td>攀荷弄其珠</td>
            <td>荡漾不成圆</td>
        </tr>
      
</table>
</div>

</Table>

### 隐藏单元格

```html
<style>
  table {
      empty-cells: hide;
  }
</style>
...

<table border="1">
        <tr>
            <td>攀荷弄其珠</td>
            <td>攀荷弄其珠</td>
        </tr>
        <tr>
            <td></td>
            <td>攀荷弄其珠</td>
        </tr>
</table>

```

<Table>
<div class=hide>
<table>
        <tr>
            <td>攀荷弄其珠</td>
            <td>攀荷弄其珠</td>
        </tr>
        <tr>
            <td></td>
            <td>攀荷弄其珠</td>
        </tr>
</table>
</div>

</Table>

### 无边框表格

```html
<style>
        table {
            border: none;
            border-collapse: collapse;
        }

        table td {
            border: none;
            border-right: solid 1px #ddd;
            border-bottom: solid 1px #ddd;
        }

        table tr:first-child td {
            border-top: solid 1px #ddd;
        }

        table td:last-child {
            border-right: none;
        }
</style>

<table border="1">
        <thead>
            <tr>
                <td>细雨湿流光</td>
                <td>芳草年年与恨长题</td>
                <td>松风吹解带</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>山月照弹琴</td>
                <td>思往事</td>
                <td>惜流芳</td>
            </tr>
            <tr>
                <td>易成伤</td>
                <td>拟歌先敛</td>
                <td>欲笑还颦</td>
            </tr>
        </tbody>
</table>
```

<Table>
<div class=none>
<table border="1">
        <thead>
            <tr>
                <td>细雨湿流光</td>
                <td>芳草年年与恨长题</td>
                <td>松风吹解带</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>山月照弹琴</td>
                <td>思往事</td>
                <td>惜流芳</td>
            </tr>
            <tr>
                <td>易成伤</td>
                <td>拟歌先敛</td>
                <td>欲笑还颦</td>
            </tr>
        </tbody>
</table>
</div>

</Table>

### 数据表格

可以为表格元素使用伪类控制样式，下例中使用 hover 伪类样式

```html

<style>
        table,
        td {
            border: none;
            font-size: 14px;
            border-collapse: collapse;
        }

        table tr:hover {
            background: #ddd;
            cursor: pointer;
        }

        table td {
            border-top: solid 1px #ccc;
            padding: 10px;
        }
</style>

<table border="1">
        <thead>
            <tr>
                <td>作者</td>
                <td>诗词</td>
                <td>年代</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>陆凯</td>
                <td>《赠范晔</td>
                <td>中国古代</td>
            </tr>
            <tr>
                <td>欧阳修</td>
                <td>《诉衷情》</td>
                <td>中国古代</td>
            </tr>
            <tr>
                <td>晏几道</td>
                <td>《临江仙》</td>
                <td>中国古代</td>
            </tr>
</table>
```

<Table>
<div class='data'>
<table border="1">
        <thead>
            <tr>
                <td>作者</td>
                <td>诗词</td>
                <td>年代</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>陆凯</td>
                <td>《赠范晔</td>
                <td>中国古代</td>
            </tr>
            <tr>
                <td>欧阳修</td>
                <td>《诉衷情》</td>
                <td>中国古代</td>
            </tr>
            <tr>
                <td>晏几道</td>
                <td>《临江仙》</td>
                <td>中国古代</td>
            </tr>
            </tbody>
</table>
</div>

</Table>

## 列表

### 列表符号

使用 list-style-type 来设置列表样式，规则是继承的，所以在ul 标签上设置即可

|值	|描述|
|----|----|
none|	无标记。
disc	|默认。标记是实心圆。
circle	|标记是空心圆。
square	|标记是实心方块。
decimal	|标记是数字。
decimal-leading-zero|	0 开头的数字标记。(01, 02, 03, 等。)
lower-roman	|小写罗马数字(i, ii, iii, iv, v, 等。)
upper-roman	|大写罗马数字(I, II, III, IV, V, 等。)
lower-alpha	|小写英文字母 The marker is lower-alpha (a, b, c, d, e, 等。)
upper-alpha	|大写英文字母 The marker is upper-alpha (A, B, C, D, E, 等。)
lower-greek	|小写希腊字母(alpha, beta, gamma, 等。)
lower-latin	|小写拉丁字母(a, b, c, d, e, 等。)
upper-latin	|大写拉丁字母(A, B, C, D, E, 等。)
hebrew	|传统的希伯来编号方式
armenian|	传统的亚美尼亚编号方式
georgian	|传统的乔治亚编号方式(an, ban, gan, 等。)
cjk-ideographic	|简单的表意数字
hiragana	|标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
katakana	|标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
hiragana-iroha	|标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
katakana-iroha|	标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）

### 隐藏列表符号
```css
ul {
  list-style-type: none;
}
```

### 自定义列表样式

```css
ul li {
  /* list-style-image: url(xj-small.png);
  list-style-image: radial-gradient(10px 10px, red, black); */

  list-style-image: linear-gradient(45deg, red, black);
}
```

### 符号位置
控制符号显示在内容外面还是内部

选项	|说明
|----|----
inside|	内部
outside	|外部

```css
ul {
  list-style-position: inside;
}
```

### 组合定义

```css
ul {
    list-style: circle inside;
}
```

## 追加内容
### 基本使用

使用伪类 ::before 向前添加内容，使用 ::after 向后面添加内容。

```css
a::after {
  content: " (坚持努力) ";
}
```

### 提取属性

使用属性值添加内容，可以使用标准属性与自定义属性

```html
a {
    position: relative;
}

a:hover {
    &::before {
        content: "text: "attr(data-url);
        background: #555;
        color: white;
        position: absolute;
        top:-40px;
        padding: 3px 10px;
        border-radius: 10px;
    }
}
<a data-text="从此无心爱良夜，任他明月下西楼">诗词</a>
```
鼠标移入看效果
<Draw/>

### 自定义表单

```html
<style>
    body {
        padding: 80px;
    }

    .field {
        position: relative;
    }

    input {
        border: none;
        outline: none;
    }

    .field::after {
        content: '';
        background: linear-gradient(to right, white, red, green, blue, white);
        height: 30px;
        position: relative;
        width: 100%;
        height: 1px;
        display: block;
        left: 0px;
        right: 0px;
    }

    .field:hover::before {
        content: attr(data-placeholder);
        position: absolute;
        top: -20px;
        left: 0px;
        color: #555;
        font-size: 12px;
    }
</style>


<div class="field" data-placeholder="请输入少于100字的标题">
    <input type="text" id="name">
</div>

```
效果如下

<Form/>