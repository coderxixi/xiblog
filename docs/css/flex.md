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
<style>
  ...
  article {
   
    display: inline-flex;
    
  }
  ...
</style>
```

<FlexBox>

  <div>1</div>
	<div>2</div>
	<div>3</div>

</FlexBox>

### flex-direction

用于控制盒子元素排列的方向

值	|描述
|----|----|
row|	从左到右水平排列元素（默认值）
row-reverse	|从右向左排列元素
column	|从上到下垂直排列元素
column-reverse|	从下到上垂直排列元素

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


选项|	说明
|----|----|
nowrap	|元素不拆行或不拆列（默认值）
wrap|	容器元素在必要的时候拆行或拆列。
wrap-reverse|	容器元素在必要的时候拆行或拆列，但是以相反的顺序

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

<FlexBox  direction='column' wrap='wrap'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</FlexBox>