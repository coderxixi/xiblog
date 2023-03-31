


<script setup>
import H from './components/H.vue'


</script>




## 语意标签
HTML 标签都有具体语义，非然技术上可以使用 div 标签表示大部分内容，但选择清晰的语义标签更容易让人看明白。比如 h1表示标题、p标签表示内容、强调内容使用em标签

```html
<article>
	<h1>嘻嘻</h1>
	<p>博客</p>
</article>

```

## 嵌套关系

元素可以互相嵌套包裹，即元素存在父子级关系

```html

<article>
  <h1>嘻嘻</h1>
  <div>
    <p>博客</p>
    <span>coderxixi</span>
  </div>
</article>
```

## 基本结构

|  标签   | 说明  |
|  ----  | ----  |
| DOCTYPE  | 声明为 HTML 文档  |
| html  | lang:网页的语言，如 en/zh 等，非必选项目 |
| head  | 文档说明部分，对搜索引擎提供信息或加载 CSS、JS 等 |
| keyword  | 向搜索引擎说明你的网页的关键词 |
| description  | 向搜索引擎描述网页内容的摘要信息 |
| body  | 页面主体内容 |

## 内容标题

标题使用 h1 ~ h6 来定义，用于突出显示文档内容。

* 从 h1 到 h6 对搜索引擎来说权重会越来越小
* 页面中最好只有一个 h1 标签
* 标题最好不要嵌套如 h1 内部包含 h2

下面是使用默认样式的标题效果，掌握 CSS 后我们就可以随意美化了

```
<h1>嘻嘻</h1>
<h2>嘻嘻嘻嘻嘻嘻</h2>
<h3>嘻嘻嘻嘻嘻嘻嘻嘻</h3>
<h4>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</h4>
<h5>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</h5>
<h6>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</h6>

```
<H/>

## 页眉页脚

### header
header 标签用于定义文档的页眉，下图中的红色区域都可以使用header标签构建。
```html
<body>
    <header>
        <nav>
            <ul>
                <li><a href="">标签</a></li>
                <li><a href="">标签</a></li>
            </ul>
        </nav>
    </header>
    <article>
        <h2>嘻嘻博客</h2>
        <ul>
            <li><a href="">完成签到 开心每一天</a></li>
            <li><a href="">完成签到 来了，老铁</a></li>
        </ul>
    </article>
   	...
</body>
```
### footer

footer 标签定义文档或节的页脚，页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等

```html
<body>
    ...
    <article>
        <h2>嘻嘻博客</h2>
        <ul>
            <li><a href="">完成签到 开心每一天</a></li>
            <li><a href="">完成签到 来了，老铁</a></li>
        </ul>
    </article>
    <footer>
        <p>
           我是footer 我是footer 我是footer 我是footer 我是footer 我是footer
        </p>
    </footer>
</body>

```

## 导航元素
在 HTML 中使用nav设置导航链接

```html
<header>
        <nav>
            <ul>
                <li>
                    <a href="">nav</a>
                </li>
                <li>
                    <a href="">nav</a>
                </li>
            </ul>
        </nav>
</header>
```
## 主要区域

HTML5 中使用 main 标签表示页面主要区域，一个页面中main元素最好只出现一次。

```html
<body>
		...
    <main>
        <article>
            <h2>网站动态</h2>
            <ul>
                <li><a href="">完成签到 开心每一天</a></li>
                <li><a href="">完成签到 来了，老铁</a></li>
            </ul>
        </article>
    </main>
    ...
</body>
```

## 内容区域

使用 article 标签规定独立的自包含内容区域。不要被单词的表面意义所局限，article 标签表示一个独立的内容容器

```html
<main>
	<article>
    <h2>嘻嘻博客</h2>
    <ul>
      <li><a href="">完成签到 开心每一天</a></li>
      <li><a href="">完成签到 来了，老铁</a></li>
    </ul>
	</article>
</main>
```

## 区块定义

使用 section 定义一个区块，一般是一组相似内容的排列组合

```html
<main>
   <article>
     <section>
       <h2>section</h2>
     </section>
     <section>
      <h2>section</h2>
     </section>
   </article>
</main>
```
## 附加区域

使用 aside 用于设置与主要区域无关的内容，比如侧面栏的广告等。

```html
<body>
  <main>
    <article>
      ...
    </article>
    </main>
    <aside>
      <h2>aside</h2>
      <p>asideasideasideasideasideasideasideaside。</p>
    </aside>
  </main>
</body>

```

## 通用容器

div 通用容器标签是较早出现的，也是被大多数程序员使用最多的容器。不过我们应该更倾向于使用有语义的标签如article/section/aside/nav 等。

有些区域这些有语义的容器不好表达，这时可以采用div容器，比如轮播图效果中的内容。






