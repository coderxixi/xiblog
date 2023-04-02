<script setup>
import Krelative from './components/krelative.vue'

</script>

## 基础知识

### 定位类型

| 选项     | 说明                 |
| -------- | -------------------- |
| static   | 默认形为，参考文档流 |
| relative | 相对定位             |
| absolute | 绝对定位             |
| fixed    | 固定定位             |
| sticky   | 粘性定位             |

### 位置偏移

可以为部分类型的定位元素设置上、下、左、右 的位置偏移

| 选项   | 说明     |
| ------ | -------- |
| top    | 距离顶边 |
| bottom | 距离下边 |
| left   | 距离左部 |
| right  | 距离右边 |

### 相对定位

相对定位是相对于元素原来的位置控制，当元素发生位置偏移时，原位置留白

```html
<style lang="scss">
  article {
    width: 400px;
    height: 200px;
    border: solid 10px blueviolet;
    font-size: 14px;
    padding: 30px;
  }
  article img {
    width: 50px;
    position: relative;
    top: -20px;
  }
</style>
<article>
  <img src="../../public/logo.png" alt="" />
  入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，望，只能弹筝诉说，
</article>
```

<Krelative>
 <article>
  <img src="./img/logo.png" alt="">
   入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，望，只能弹筝诉说，
 </article>
</Krelative>

### 绝对定位

绝对定位不受文档流影响，就像漂浮在页面中的精灵，绝对定位元素拥有行内块特性

#### 参照元素

如果父级元素设置了 relative | fixed | sticky ，绝对定位子元素将参数此父元素进行定位

```html
<style>
  body {
    padding: 50px;
  }

  article {
    width: 400px;
    height: 100px;
    border: solid 6px blueviolet;
    position: relative;
  }

  div {
    font-size: 25px;
    background: #f2a67d;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0px;
  }
</style>
...

<article>
  <div>入江南烟水路，行尽江南，不与离人遇</div>
</article>
```

### 绝对定位

```html
<style>
  body {
    padding: 50px;
  }

  article {
    width: 400px;
    height: 100px;
    border: solid 6px blueviolet;
    position: relative;
  }

  div {
    font-size: 25px;
    background: #f2a67d;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0px;
  }
</style>
...

<article>
  <div>入江南烟水路，行尽江南，不与离人遇</div>
</article>
```

<Krelative>
<article class='absolute'>
	<div>  入江南烟水路，行尽江南，不与离人遇</div>
</article>
</Krelative>

### 默认位置

如果没有为定位元素设置偏移，将受父元素的 padding 等属性影响。但使用定位一般都会设置偏移位置。

```css
article {
  width: 400px;
  height: 100px;
  border: solid 6px blueviolet;
  position: relative;
  padding: 20px;
}

div {
  background: #f2a67d;
  padding: 5px;
  position: absolute;
  top: 50px;
  left: 50px;
}
```

<Krelative>
<article class='relative'>
	<div>入江南烟水路，行尽江南，不与离人遇</div>
</article>
</Krelative>

### 设置尺寸

可以通过定位的偏移值设置元素的尺寸。

```css
article {
  width: 400px;
  height: 100px;
  border: solid 6px blueviolet;
  position: relative;
}
div {
  font-size: 25px;
  background: #f2a67d;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
}
```

<Krelative>
<article class='chicun'>
	<div>入江南烟水路，行尽江南，不与离人遇</div>
</article>
</Krelative>

### 居中定位

通过将 left 设置为 50% ,并向左偏移子元素宽度一半可以实现水平居中，垂直居中使用方式类似

```css
article {
  width: 400px;
  height: 400px;
  border: solid 6px blueviolet;
  position: relative;
}
div {
  width: 200px;
  height: 200px;
  background: #f2a67d;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50%;
  margin-top: -100px;
}
```

<Krelative>
<article class='center'>
	<div></div>
</article>
</Krelative>

### 滚动行为

固定定位元素会随滚动条发生滚动。

```html
<style>
  .centers {
    width: 300px;
    height: 200px;
    border: solid 10px blueviolet;
    position: relative;
    overflow: scroll;
    article {
      height: 600px;
      div {
        width: 200px;
        height: 200px;
        position: absolute;
        background: red;
        left: 0px;
        z-index: 2;
      }
    }
  }
</style>
<div class="centers">
  <article>
    <div></div>
  </article>
</div>
```

<Krelative>
<div  class='centers'>
<article>
	<div></div>
</article>
</div>

</Krelative>

### 纵向重叠

如果元素重叠在一起，可以使用 z-index 控制元素的上下层级，数值越大越在上面。
父级子元素设置 z-index 没有意义，子元素永远在父元素上面的


```html

<style>
	body {
    padding: 50px;
  }

  article {
    width: 200px;
    height: 200px;
    border: solid 10px blueviolet;
    position: relative;
    cursor: pointer;
  }

  article:hover div:nth-of-type(2) {
    z-index: 2;
  }

  article div {
    width: 200px;
    height: 200px;
    position: absolute;
  }

  article div:nth-of-type(1) {
    background: red;
    left: 0px;
    z-index: 2;
  }

  article div:nth-of-type(2) {
    background: green;
    left: 50px;
    top: 50px;
  }
</style>
...

<article>
	<div></div>
	<div></div>
</article>
```
<Krelative>
<article class='zindex'>
	<div></div>
	<div></div>
</article>

</Krelative>


### 固定定位


元素相对于页面固定定位在某个位置，固定定位元素不会在滚动时改变位置 ，使用position: fixed 产生固定定位


### 粘性定位

#### 同级定位


<Krelative>
<div class='kl'>
    <article>
        <section></section>
        <h2>燕草如碧丝</h2>
        <section></section>
        <h2>秦桑低绿枝</h2>
        <section></section>
    </article>
</div>
</Krelative>


#### 非同级定位

不属于同一个父元素设置粘性定位时，后面的元素挤掉原来位置的元素如下例。
```html
<style>
  * {
    padding: 0;
    margin: 0;
  }
  main {
    padding: 30px;
    font-size: 14px;
  }
  main article {
    width: 400px;
    border: solid 5px blueviolet;
    height: 200px;
    overflow: scroll;
  }
  main article section:nth-of-type(odd) h2 {
    background: blueviolet;
  }
  main article section h2 {
    background: #db1f77;
    color: white;
    text-indent: 20px;
    position: sticky;
    top: 0;
  }
  main article section p {
    padding: 20px;
  }
</style>
...

<main>
    <article>
        <section>
            <h2>蝶恋花</h2>
            <p>
               梦入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，行遍江南烟水迷濛之路，不见伊人，消魂之苦无以倾诉，醒来后，消魂情状更难忍受。梦寻无望，只能弹筝诉说，可依然难解心中断肠之苦。在诗人的笔下，思念入骨入心，这样凄美，又这样地引人入胜，在这星光闪闪的静夜里，心中竟闪烁着无尽的柔情
            </p>
        </section>
        <section>
            <h2>寻南溪常山道人隐居</h2>
            <p>
              一路经行处，莓苔见履痕。白云依静渚，春草闭闲门。过雨看松色，随山到水源。溪花与禅意，相对亦忘言。
             白云依偎安静沙洲，春草环绕道院闲门。新雨过后松色青翠，循着山路来到水源
            </p>
        </section>
        <section>
            <h2>阙题</h2>
            <p>
               道由白云尽，春与青溪长。时有落花至，远随流水香。闲门向山路，深柳读书堂。幽映每白日，清辉照衣裳。
山路悠长，溪水也悠长，一路的春色又与溪水同其悠长。不时有落花随溪水飘流而至，远远地就可闻到水中的芳香。
            </p>
        </section>
    </article>
</main>
```

<Krelative>
<div class='nm'>
    <article>
        <section>
            <h2>蝶恋花</h2>
            <p>
               梦入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，行遍江南烟水迷濛之路，不见伊人，消魂之苦无以倾诉，醒来后，消魂情状更难忍受。梦寻无望，只能弹筝诉说，可依然难解心中断肠之苦。在诗人的笔下，思念入骨入心，这样凄美，又这样地引人入胜，在这星光闪闪的静夜里，心中竟闪烁着无尽的柔情
            </p>
        </section>
        <section>
            <h2>寻南溪常山道人隐居</h2>
            <p>
              一路经行处，莓苔见履痕。白云依静渚，春草闭闲门。过雨看松色，随山到水源。溪花与禅意，相对亦忘言。
             白云依偎安静沙洲，春草环绕道院闲门。新雨过后松色青翠，循着山路来到水源
            </p>
        </section>
        <section>
            <h2>阙题</h2>
            <p>
               道由白云尽，春与青溪长。时有落花至，远随流水香。闲门向山路，深柳读书堂。幽映每白日，清辉照衣裳。
山路悠长，溪水也悠长，一路的春色又与溪水同其悠长。不时有落花随溪水飘流而至，远远地就可闻到水中的芳香。
            </p>
        </section>
    </article>
</div>
</Krelative>