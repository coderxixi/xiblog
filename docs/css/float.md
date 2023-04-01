<script setup>
import Float from './components/float.vue';
import Textwrapping from "./components/textwrapping.vue"
</script> 

## 浮动布局

float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素

### float

使用浮动可以控制相邻元素间的排列关系

 选项	|说明
|----|----|
left|	向左浮动
right	|向右浮动
none|	不浮动

### 文档流

没有设置浮动的块元素是独占一行的
```css
.nonefloat{
  width: 100px;
  height: 100px;
  border: solid 2px red;
  background: skyblue;
}
```
<Float>
<div class='nonefloat'></div>
<div class='leftfloat'></div>
</Float>


### 丢失空间

如果只给第一个元素设置浮动，第二个元素不设置，后面的元素会占用第一个元素空间
```css
.left{
float: left;
}
```
<Float>
<div class='nonefloat left'></div>
<div class='leftfloat'></div>
</Float>

### 使用浮动
两个元素都设置浮动后，会并排显示
```css
.left{
float: left;
}
.right{
  float:right;
}
```
<Float>
<div class='nonefloat left'></div>
<div class='leftfloat right'></div>
</Float>

### 浮动边界

浮动元素边界不能超过父元素的 padding

```css
.floatbox {
  width: 500px;
  &.bg {
    padding: 50px;
    background-color: antiquewhite;
    background-clip: content-box;
  }
  overflow: hidden;
  .nonefloat {
    border: 1px solid red;
  }
  .nonefloat,
  .leftfloat {
    width: 100px;
    height: 100px;
  }

  .leftfloat {
    background: skyblue;
  }
}
.left {
  float: left;
}
.right {
  float: right;
}

```
<Float :bg='true'>
 <div class='nonefloat left'></div>
 <div class='leftfloat right'></div>
</Float>


### 浮动转块

元素浮动后会变为块元素包括行元素如 span，所以浮动后的元素可以设置宽高

```css
a {
    float: left;
    width: 300px;
}
```

### 清除浮动

不希望元素受浮动元素影响时，可以清除浮动。

### clear

CSS 提供了 clear 规则用于清除元素浮动影响。

选项|	说明
|----|----|
left|	左边远离浮动元素
right	|右连远离浮动元素
both|	左右都远离浮动元素

使用清除浮动

```html
<style>
	div {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }

  div.green {
      border: solid 2px green;
      float: left;
  }

  div.red {
      border: solid 2px red;
      float: right;
  }

  div.blue {
      background: blue;
      clear: both;
  }
</style>
...

<div class="green"></div>
<div class="red"></div>
<div class="blue"></div>

```

<Float>
<div class='clear'>
<div class="green"></div>
<div class="red"></div>
<div class="blue"></div>
</div>


</Float>

在父元素内部最后面添加一个没有高度的了元素，并使用clear:both

```html
<style>
  div.blue {
      background: blue;
  }
</style>
<article>
        <div class="green"></div>
        <div class="red"></div>
        <div class="clear"></div>
    </article>
    <div class="blue"></div>
    </article>

```

### after
使用 ::after 伪类为父元素添加后标签，实现清除浮动影响

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

### overflow

子元素使用浮动后将不占用空间，这时父元素高度为将为零。通过添加父元素并设置 overflow 属性可以清除浮动
将会使用父元素产生 BFC 机制，即父元素的高度计算会包括浮动元素的高度

```css
 article {
      overflow: hidden;
  }
```

### 形状浮动

通过形状浮动可以让内容围绕图片，类似于我们在 word 中的环绕排版。要求图片是有透明度的 PNG 格

### 距离控制

选项|	说明
|---|---|
margin-box	|外边距环绕
padding-box|	内边距环绕
border-box	|边线环绕
content-box|	内容环绕

### 外边距环绕
```html
<style>
 span.shape {
      float: left;
      width: 100px;
      height: 100px;
      padding: 30px;
      margin: 30px;
      border: solid 30px green;
      border-radius: 50%;
      shape-outside: margin-box;
  }
</style>
  <p>
    <span class="shape">
    </span>
   入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，行遍江南烟水迷濛之路，不见伊人，消魂之苦无以倾诉，醒来后，消魂情状更难忍受。梦寻无望，只能弹筝诉说，可依然难解心中断肠之苦。在诗人的笔下，思念入骨入心，这样凄美，又这样地引人入胜，在这星光闪闪的静夜里，心中竟闪烁着无尽的柔情
  </p>

```
外边距环绕
```css
 .shape {
  shape-outside: margin-box;
  }
```

<Textwrapping text='margin-box'/>

```css
 .shape {
  shape-outside: border-box;
  }
```

边框环绕

<Textwrapping text='border-box'/>