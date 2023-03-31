## 图片处理

 ### 图像格式

 * 网络带宽成本很高，图片处理在保证用户体验好的前提下，文件尺寸也要尽可能小
 * 图片属性静态文件，不要放在 WEB 服务器上，而放在云储存服务器上并使用 CDN 加速
 * 以 JPEG 类型优先使用，文件尺寸更小
 * 小图片使用 PNG，清晰度更高，因为文件尺寸小，文件也不会太大
 * 网页图标建议使用 css 字体构建如 iconfont (opens new window)或 fontawesome

 |  标签   | 说明  | 透明  |
|  ----  | ----  | ---- |
| PNG  | 无损压缩格式，适合图标、验证码等。有些小图标建议使用 css 字体构建  |  支持  |
| GIF  | 256 色，可以产生动画效果（即 GIF 动图）| 支持 |
| JPEG  | 有损压缩的类型，如商品、文章的图片展示 | 不支持  |

## 使用图片

在网页中使用 img 标签展示图片，图片的大小、边框、倒角效果使用 css 处理。

```html
<img src="xxxx.png" alt="后盾人"/>

```
|  属性   | 说明  |
|  ----  | ----  | 
| src  | 图片地址 |
| alt  | 图像打开异常时的替代文本| 

## 网页链接

不能通过一个页面展示网站的所有功能，需要在不同页面中跳转，这就是链接所起到的功能。

```html
<a href="xxxxx.com" target="_blank" title="博客博客">博客博客</a>
```

|  选项   | 说明  |
|  ----  | ----  | 
| href  | 跳转地址 |
| target  | _blank 新窗口打开 _self 当前窗口打开|
| title  | 链接提示文本 |

## 打开窗口

下面设置 target 属性在指定窗口打开。

```html
<a href="xixixixi.com" target="hdcms">
        在IFRAME中打开
</a>
<script>
	window.open('xxxxxx.com', 'xixi');
</script>

```

## 锚点链接

锚点可以设置跳转到页面中的某个部分

* 为元素添加id 属性来设置锚点
* 设置 a 标签的 href 属性
```html

<a href="#comment-1">跳转到评论区</a>
<div style="height: 1000px;"></div>

<div id="comment-1" style="background: green;">
	评论内容区
</div>
```
* 也可以跳转到不同页面的锚点

```html
<a href="article.html#comment-1">跳转到评论区</a>
```

## 邮箱链接


除了页面跳转外可以指定其他链接。使用以下方式也有缺点，邮箱可能会被恶意用户采集到，所以有些用户使用 xxxxxxx#qq.com 然后提示用户 请将#改为@后发邮件的提示形式

```html

<a href="mailto:xxxxxx@qq.com">给xxxx发送邮件</a>
```

## 拨打电话

点击以下链接后，手机会询问用户是否拨打电话

```html
<a href="tel:99999999999">联系客服</a>
```

## 下载文件


默认情况下使用链接可以下载浏览器无法处理的文件，如果下载图片需要后台语言告之浏览器mime类型

```html
<a href="https://xxxxxx.zip">下载文件</a>

```

