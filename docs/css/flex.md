<script setup>
import FlexBox from './components/flexBox.vue'

</script>

## 了解弹性

Flex 是 Flexible Box 的缩写，意为"弹性布局"，可以轻松的控制元素排列、对齐和顺序的控制。

现在的终端类型非常多，使用弹性盒模型可以让元素在不同尺寸终端控制尺寸

### 兼容性

可以在 https://caniuse.com/ (opens new window)网站查看，绝大多数设备尤其是移动端都很好的支持 flex，所以可以放心使用

## 弹性盒子

### 声明定义

容器盒子里面包含着容器元素，使用 display:flex 或 display:inline-flex 声明为弹性盒子

### 声明块级弹性盒子

```html
<style>
  article {
    height: 150px;
    margin-left: 100px;
    margin-top: 100px;
    outline: solid 5px silver;
    display: flex;
    padding: 20px;
  }
  article div {
    outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
    line-height: 5em;
    width: 300px;
  }
</style>
...

<article>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</article>
```

<FlexBox>
  <div>1</div>
	<div>2</div>
	<div>3</div>
</FlexBox>

### 声明内联级弹性盒子

```css
<style > ... article {
  display: inline-flex;
}
... </style >;
```

<FlexBox>

  <div>1</div>
	<div>2</div>
	<div>3</div>

</FlexBox>

### flex-direction

用于控制盒子元素排列的方向

| 值             | 描述                           |
| -------------- | ------------------------------ |
| row            | 从左到右水平排列元素（默认值） |
| row-reverse    | 从右向左排列元素               |
| column         | 从上到下垂直排列元素           |
| column-reverse | 从下到上垂直排列元素           |

```html
<style>
  article {
    width: 500px;
    border: solid 5px silver;
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    flex-direction: row-reverse;
  }
  article * {
    border: solid 5px blueviolet;
    padding: 10px;
    margin: 10px;
  }
</style>
...

<article>
  <h4>嘻嘻</h4>
  <span>嘻嘻</span>
  <p>嘻嘻</p>
</article>
```

<FlexBox direction='row-reverse'>
<!-- <article class='ibox'> -->
 <h4>嘻嘻</h4>
	<span>嘻嘻</span>
	<p>嘻嘻</p>
<!-- </article> -->
</FlexBox>

### column-reverse

```css
flex-direction: column-reverse;
```

<FlexBox direction='column-reverse'>

 <h4>嘻嘻</h4>
	<span>嘻嘻</span>
	<p>嘻嘻</p>

</FlexBox>

### flex-wrap

flex-wrap 属性规定 flex 容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。

| 选项         | 说明                                             |
| ------------ | ------------------------------------------------ |
| nowrap       | 元素不拆行或不拆列（默认值）                     |
| wrap         | 容器元素在必要的时候拆行或拆列。                 |
| wrap-reverse | 容器元素在必要的时候拆行或拆列，但是以相反的顺序 |

#### 行元素换行

```html
<style>
  article {
    width: 500px;
    border: solid 5px silver;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  article div {
    border: solid 5px blueviolet;
    padding: 30px 80px;
    margin: 10px;
    text-align: center;
    font-size: 28px;
  }
</style>
...

<article>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</article>
```

<FlexBox  direction='row' wrap='wrap'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

### 水平排列反向换行

```css
flex-direction: row;
flex-wrap: wrap-reverse;
```

<FlexBox  direction='row' wrap='wrap-reverse'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

### 垂直元素换行

```css
flex-direction: row;
flex-wrap: wrap-reverse;
```

<FlexBox  direction='column' wrap='wrap'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

### 垂直元素反向换行

```css
flex-direction: column;
flex-wrap: wrap-reverse;
```

<FlexBox  direction='column' wrap='wrap-reverse'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

### flex-flow

flex-flow 是 flex-direction 与 flex-wrap 的组合简写模式。

### justify-content

用于控制元素在主轴上的排列方式，再次强调是主轴的排列方式

| 选项          | 说明                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| flex-start    | 元素紧靠主轴起点                                                           |
| flex-end      | 元素紧靠主轴终点                                                           |
| center        | 元素从弹性容器中心开始                                                     |
| space-between | 第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间                 |
| space-around  | 每个元素两侧的间隔相等。所以，元素之间的间隔比元素与容器的边距的间隔大一倍 |
| space-evenly  | 元素间距离平均分配                                                         |

水平排列元素，并使用 justify-content: flex-end 对齐到主轴终点

<FlexBox  direction='row' wrap='wrap' justify='flex-end'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

使用 space-evenly 平均分配容器元素

<FlexBox  direction='row' wrap='wrap' justify='space-evenly'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

垂直排列时对齐到主轴终点

<FlexBox  direction='column' wrap='wrap' justify='flex-end'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>

### 交叉轴行

元素在交叉轴上有行的概念，理解这个概念会对理解 align-items 与 align-content 有更好的帮助

- align-item 是控制元素在行上的排列
- align-content 是控制行在交差轴上的排列

### align-items

用于控制容器元素在交叉轴上的排列方式。

| 选项       | 说明                           |
| ---------- | ------------------------------ |
| stretch    | 元素被拉伸以适应容器（默认值） |
| center     | 元素位于容器的中心             |
| flex-start | 元素位于容器的交叉轴开头       |
| flex-end   | 元素位于容器的交叉轴结尾       |

### 拉伸适应交叉轴

如果设置了 width | height | min-height | min-width | max-width | max-height ，将影响 stretch 的结果，因为 stretch 优先级你于宽高设置

<FlexBox direction='row' align='stretch'>
    <div class='stretch'>1</div>
    <div class='stretch'>2</div>
    <div class='stretch'>3</div>
</FlexBox>

### 对齐到交叉轴的顶部

```css
flex-direction: row;
align-items: flex-start;
```

<FlexBox direction='row' align='flex-start'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### 对齐到交叉轴底部

```css
flex-direction: row;
align-items: flex-end;
```

<FlexBox direction='row' align='flex-end'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### 对齐到交叉轴中心

```css
flex-direction: row;
align-items: center;
```

<FlexBox direction='row' align='center'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### 纵向排列时交叉轴排列

```css
flex-direction: column;
align-items: center;
```

<FlexBox direction='column' align='center'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### align-content

只适用于多行显示的弹性容器，用于控制行（而不是元素）在交叉轴上的排列方式

| 选项          | 说明                                                                 |
| ------------- | -------------------------------------------------------------------- |
| stretch       | 将空间平均分配给元素                                                 |
| flex-start    | 元素紧靠主轴起点                                                     |
| flex-end      | 元素紧靠主轴终点                                                     |
| center        | 元素从弹性容器中心开始                                               |
| space-between | 第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间           |
| space-around  | 每个元素两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 |
| space-evenly  | 元素间距离平均分配                                                   |

### 水平排列在交叉轴中居中排列

```css
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
align-content: center;
```

<FlexBox height='500px' direction='row' wrap='wrap' align='flex-start' content='center'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### 垂直排列时交叉轴的排列

```css
flex-direction: row;
flex-wrap: column;
align-items: flex-start;
align-content: center;
```

<FlexBox height='500px' direction='column' wrap='wrap' align='flex-start' content='center'>
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

## 弹性元素

放在容器盒子中的元素即为容器元素。

- 不能使用 float 与 clear 规则
- 弹性元素均为块元素
- 绝对定位的弹性元素不参与弹性布局

### align-self

用于控制单个元素在交叉轴上的排列方式，align-items 用于控制容器中所有元素的排列，而 align-self 用于控制一个弹性元素的交叉轴排列

| 选项       | 说明                   |
| ---------- | ---------------------- |
| stretch    | 将空间平均分配给元素   |
| flex-start | 元素紧靠主轴起点       |
| flex-end   | 元素紧靠主轴终点       |
| center     | 元素从弹性容器中心开始 |

```css
& div:nth-of-type(1) {
  align-self: flex-start;
}

& div:nth-of-type(3) {
  align-self: flex-end;
}
```

<FlexBox height='400px' direction='row' align='center' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### flex-grow

用于将弹性盒子的可用空间，分配给弹性元素。可以使用整数或小数声明。

下例中为三个 DIV 弹性元素设置了 1、3、6 ，即宽度分成 10 等份，第三个元素所占宽度为(宽度/(1+3+6)) X 6。

<FlexBox class='flexgrow' width='650px' height='100px' direction='row' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

如果弹性元素设置了宽度，将把（弹性盒子-弹性元素宽度和）后按照 flex-grow 进行分配

```css
article div:nth-of-type(1) {
  width: 100px;
  flex-grow: 1;
}
article div:nth-of-type(2) {
  width: 100px;
  flex-grow: 3;
}
article div:nth-of-type(3) {
  width: 300px;
  flex-grow: 6;
}
```

<FlexBox  class='grow' width='650px' height='100px' direction='row' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### flex-shrink

与 flex-grow 相反 flex-shrink 是在弹性盒子装不下元素时定义的缩小值。

下例在 600 宽的弹性盒子中放了 1000 宽的弹性元素。并为最后两个元素设置了缩放，最后一个元素的缩放比例为 500 -( ( (1000-600) / (100X1+400x3+500X6) ) x 3 ) X 500 = 220.9，计算公式说明如下

```
缩小比例 = 不足的空间 / (元素 1 宽度 x 缩小比例) + (元素 2 宽度 x 缩小比例) ...
最终尺寸 = 元素三宽度 - (缩小比例 x  元素 3 的宽度) X 元素宽度

```

<FlexBox  class='shrink' width='400px' height='120px' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### flex-basis

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。

可以是长度单位，也可以是百分比。flex-basis 的优先级高于 width、height 属性

#### 优先级

flex-basis 优先级大于 width、height

```css
.basis {
  position: relative;
  margin-left: 100px;
  // margin-top: 100px;
  outline: solid 5px silver;
  display: flex;
  padding: 20px;
}

.basis div {
  outline: solid 5px blueviolet;
  text-align: center;
  font-size: 28px;
}

.basis div:nth-of-type(1) {
  flex-basis: 100px;
  width: 200px;
}

.basis div:nth-of-type(2) {
  flex-basis: 200px;
}

.basis div:nth-of-type(3) {
  flex-basis: 200px;
}
```

<FlexBox  class='basis' width='600px' height='150px' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### flex

flex 是 flex-grow、flex-shrink 、flex-basis 缩写组合

```
建议使用 flex 面不要单独使用 flex-grow / flew-shrink / flex-basis
```

下例定义平均分配剩余空间，并不进行尺寸缩小，基础尺寸为 200px

```css
.flexbase {
  width: 600px;
  position: relative;
  height: 150px;
 outline: solid 5px silver;
  display: flex;
  padding: 20px;
  div {
    outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
    flex: 1 0 100px;
  }
}
```

<FlexBox  class='flexbase' width='600px' height='150px' >
    <div >1</div>
    <div >2</div>
    <div >3</div>
</FlexBox>

### order

用于控制弹性元素的位置，默认为 order:0 数值越小越在前面，可以负数或整数。





### 绝对定位

绝对定位的弹性元素不参与弹性布局


### 自动空间

在弹性布局中对元素使用margin-right:auto 等形式可以自动撑满空间。