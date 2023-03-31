

## 字体设置

可以定义多个字体，系统会依次查找，比如 'Courier New' 字体不存在将使用 Courier 以此类推。

```html
font-family: 'Courier New', Courier, monospace;
```
###  自定义字体
可以声明自定义字段，如果客户端不存在将下载该字体，使用方式也是通过 font-family 引入。

```css

<style>
  @font-face {
  	font-family: "xixi";
  	src: 	url("SourceHanSansSC-Light.otf") format("opentype"),
  				url("SourceHanSansSC-Heavy.otf") format("opentype");
  }

  span {
  	font-family: 'xixi';
  }
</style>
```

|  字体   | 格式  |
|  ----  | ----  | 
| .otf | opentype |
| .woff  | woff| 
| .ttf | truetype|
| .eot| Embedded-opentype|

### 字重定义

字重指字的粗细定义。取值范围 normal | bold | bolder | lighter | 100 ~900。

400 对应 normal,700 对应 bold ，一般情况下使用 bold 或 normal 较多

```css
<style>
span {
	font-weight: bold;
}

strong:last-child {
	font-weight: normal;
}
</style>
...

<span>心似双丝网，中有千千结</span>
<strong>思君如流水，何有穷已时</strong>
```

### 文本字号

字号用于控制字符的显示大小，包括 xx-small | x-small | small | meidum | large | x-large | xx-large。

#### 百分数
百分数是子元素相对于父元素的大小，如父元素是 20px，子元素设置为 200%即为你元素的两倍大小。

```css
<style>
  article {
  	font-size: 20px;
  }

  span {
  	font-size: 500%;
  }
</style>
...

<article>
	<span>况谁知我此时情。枕前泪共帘前雨，隔个窗儿滴到明。</span>
</article>

```
#### em

em 单位等同于百分数单位。

```html
<style>
  article {
  	font-size: 20px;
  }

  span {
  	font-size: 5em;
  }
</style>
...

<article>
	<span>春心莫共花争发，一寸相思一寸灰</span>
</article>
```
### 文本颜色

#### 字符串颜色
可以使用如 red | green 等字符颜色声明
```css
color:red;
```

#### 使用十六进制网页颜色

```css
color:#ddffde
```

如果颜色字符相同如 #dddddd 可以简写为 #ddd

#### 透明颜色

透明色从 0~1 间，表示从透明到不透明
```css
color:rgba(38, 149, 162,.2);
```

### 行高定义

```html
div {
	line-height: 2em;
}
```
### 倾斜风格

字符的倾斜样式控制

```html
<style>
  span {
  	font-style: italic;
  }

  em {
  	font-style: normal;
  }
</style>
...

<span>瘦影自怜秋水照，卿须怜我我怜卿</span>
<hr>
<em>老骥伏枥，志在千里。烈士暮年，壮心不已</em>

```

### 组合定义

可以使用 font 一次将字符样式定义，但要注意必须存在以下几点：

* 必须有字体规则
* 必须有字符大小规则

```html
span {
	font: bold italic 20px/1.5 'Courier New', Courier, monospace;
}

<span>智者千虑，必有一失；愚者千虑，必有一得</span>
```

## 文本样式

### 大小转换

小号大写字母


```html
span {
	font-variant: small-caps;
}
...

<span>liuxixixi</span>
```
字母大小写转换

```css
<style>
h2 {
  /* 首字母大小 */
  text-transform: capitalize;

  /* 全部大小 */
  text-transform: uppercase;

  /* 全部小写 */
  text-transform: lowercase;
  }
</style>

```
### 文本线条

添加隐藏删除线

```html
a {
	text-decoration: none;
}

span.underline {
	text-decoration: underline;
}

span.through {
	text-decoration: line-through;
}

span.overline {
	text-decoration: overline;
}
...

<a href="">不登高山，不知天之高也；不临深渊，不知地之厚也</a>
<hr>
<span class="underline">下划线</span>
<hr>
<span class="through">删除线</span>
<hr>
<span class="overline">上划线</span>

```
### 阴影控制

参数顺序为：颜色，水平偏移，垂直偏移，模糊度。

```html
<style>
  h2 {
  	text-shadow: rgba(13, 6, 89, 0.8) 3px 3px 5px;
  }
</style>
...

<h2>古之成大事者，不惟有超世之才，亦有坚忍不拔之志</h2>

```

### 空白处理

使用 white-space 控制文本空白显示

|  选项   | 说明  |
|  ----  | ----  | 
| pre | 保留文本中的所有空白，类似使用 pre 标签 |
| nowrap  | 禁止文本换行| 
| pre-wrap | 保留空白，保留换行符|
| pre-linet| 空白合并，保留换行符|

```html
h2 {
	white-space: pre;
	width: 100px;
	border: solid 1px #ddd;
}
...

<h2>前不见古人，后不    见来者。念天地之悠    悠，独怆然而   涕下</h2>
```
### 文本溢出

#### 单行文本

溢出文本容器后换行处理
```html
h2 {
  overflow-wrap: break-word;
  width: 100px;
	border: solid 1px #ddd;
}
...

<h2>九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才</h2>
```

溢出内容末尾添加 ...


```html
<style>
  div {
    width: 200px;
    border: solid 1px blueviolet;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
<div>
 秋风清，秋月明，落叶聚还散，寒鸦栖复惊。

相亲相见知何日，此时此夜难为情。

入我相思门，知我相思苦。

长相思兮长相忆，短相思兮无穷极。

早知如此绊人心，何如当初莫相识.

秋天的夜晚，诗人望见了天上的明月和栖息在枯树上的乌鸦。对恋人的思念让他感到无穷的悲伤和无奈，难以忍受的思念甚至让诗人后悔当初的相识。
</div>

```
#### 多行文本
控制多行文本溢出时添加 ...

```html
<style>
 div{
  width: 200px;
  border:solid 1px blueviolet;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
 }
</style>
<div>
中国古诗词名句精选遡游从之，宛若水中央 诗经 蒹葭风萧萧兮易水寒，壮士一去兮不复返。
诗经 渡易歌惟草木之零落兮，恐美人之迟暮。 屈原 离骚长太息以掩涕兮，哀民生之多坚。
屈原 离骚路漫漫其修远兮，吾将上下而求索。 屈原 离骚竹竿何袅袅，鱼尾何簁簁。
卓文君 白头呤河汉清且浅，相去复几许。盈盈一水间，脉脉不得语。
古诗十九首 迢迢牵牛星少壮不努力，老大徒伤悲。 汉乐府 长歌行枯桑知天风，海水知天寒。
汉乐府 饮马长城窟行对酒当歌，人生几何？譬如朝露，去日苦多。何以解忧，唯有杜康。
月明星稀，绕树三匝，何枝可依？山不在高，海不厌深。 曹操 短歌行日月之行，若出其中；星汉灿烂，若出其里。
曹操 观沧海老骥伏枥，志在千里；烈士暮年，壮心不已。 曹操 龟虽寿秋风萧瑟天气凉，草木摇落露为霜。
明月皎皎照我床，星汉西流夜未央。 曹丕 短歌行高树多悲风，朝日照北林。
曹植 杂诗其一仰手接飞猿，府身散马蹄。捐躯赴国难，视死忽如归。
</div>

```

#### 表格文本溢出

表格文本溢出控制需要为 table 标签定义 table-layout: fixed; css 样式，表示列宽是由表格和单元格宽度定义。

```html
<style>
  table {
    table-layout: fixed;
  }

  table tbody tr td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

```

### 段落控制

#### 文本缩进

控制元素部的文本、图片进行缩进操作

```html
<style>
  p {
	  text-indent: 2em;
  }
</style>
<p>
中国古诗词名句精选遡游从之，宛若水中央 诗经 蒹葭风萧萧兮易水寒，壮士一去兮不复返。
诗经 渡易歌惟草木之零落兮，恐美人之迟暮。 屈原 离骚长太息以掩涕兮，哀民生之多坚。
屈原 离骚路漫漫其修远兮，吾将上下而求索。 屈原 离骚竹竿何袅袅，鱼尾何簁簁。
卓文君 白头呤河汉清且浅，相去复几许。盈盈一水间，脉脉不得语。
古诗十九首 迢迢牵牛星少壮不努力，老大徒伤悲。 汉乐府 长歌行枯桑知天风，海水知天寒。
汉乐府 饮马长城窟行对酒当歌，人生几何？譬如朝露，去日苦多。何以解忧，唯有杜康。
月明星稀，绕树三匝，何枝可依？山不在高，海不厌深。 曹操 短歌行日月之行，若出其中；星汉灿烂，若出其里。
曹操 观沧海老骥伏枥，志在千里；烈士暮年，壮心不已。 曹操 龟虽寿秋风萧瑟天气凉，草木摇落露为霜。
明月皎皎照我床，星汉西流夜未央。 曹丕 短歌行高树多悲风，朝日照北林。
曹植 杂诗其一仰手接飞猿，府身散马蹄。捐躯赴国难，视死忽如归。
</p>
```

#### 水平对齐

使用 left|right|center 对文本进行对齐操作

```html
h2 {
	text-align: center;
}
...
<h2>狗吠深巷中，鸡鸣桑树巅。暧暧远人村，依依墟里烟。</h2>

```

#### 垂直对齐

使用 vertical-align 用于定义内容的垂直对齐风格，包括middle | baseline | sub | super 等。

图像在段落中居中对齐

```html
img {
	height: 50px;
	width: 50px;
	vertical-align: middle;
}
...

<p>
<img src="xxxx.jpg">
李白 静夜思桃花潭水深千尺，不及汪伦送我情。 李白 赠汪伦青箬笠，绿蓑衣，斜风细不须归。
张志和 渔歌子日出江花红似火，春来江水绿如蓝。山寺月中听桂子，郡亭枕上看潮头。
白居易 忆江南三首梧桐树，三更雨，不道离情更苦。一叶叶，一声声，空阶滴到明。
温庭筠 更漏子春水碧于天，画船听雨眠。垆边人似月，皓腕凝霜雪。
韦庄 菩萨蛮深院闭，小庭空，落花香露重。 韦庄 更漏子隔帘微雨双飞燕，砌花零落红深浅。
李珣 菩萨蛮烟月不知人事改，夜阑还照深宫。藕花相向野塘中。
</p>
```

###### 顶部与底部对齐

bottom | top 相对于行框底部或顶部对齐。

```html
h2>span {
	vertical-align: bottom;
	font-size: 12px;
}
...

<h2>暗伤亡国，清露泣香红。 <span> 鹿虔扆 临江仙细雨梦回鸡塞远，小楼吹彻玉笙寒</span></h2>

```

##### 使用单位对齐

可以使用具体数值设置对齐的位置。

```css
h2>span {
	vertical-align: -20px;
	font-size: 12px;
}
```

### 字符间隔

#### 单词与字符间距

使用 word-spacing 与 letter-spacing 控制单词与字符间距。


```css
h2 {
	word-spacing: 2em;
	letter-spacing: 3em;
}
```

### 排版模式

|  模式   | 说明  |
|  ----  | ----  | 
| horizontal-tb| 水平方向自上而下的书写方式 |
| vertical-rl  | 垂直方向自右而左的书写方式| 
| vertical-lr | 垂直方向内内容从上到下，水平方向从左到右|