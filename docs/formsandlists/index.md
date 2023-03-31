## 表单
表单是服务器收集用户数据的方式。

## form

一般情况下表单项要放在 FORM 内提交
```html
<form action="hd.php" method="POST">
	<fieldset>
		<legend>测试</legend>
		<input type="text">
	</fieldset>
</form>
```

|  属性   | 说明  |
|  ----  | ----  | 
| action  | 后台地址 |
| method  | 提交方式 GET 或 POST|

## label

使用 label 用于描述表单标题，当点击标题后文本框会获得焦点，需要保证使用的 ID 在页面中是唯一的。

```html
<form action="服务器地址" method="POST" novalidate>
<label for="title">标题</label>
<input type="text" name="title" id="title">
</form>
```

## input

文本框用于输入单行文本使用，下面是常用属性与示例。

|  属性   | 说明  |
|  ----  | ----  | 
| type  | 表单类型默认为 text |
| name  | 后台接收字段名|
| required  | 必须输入|
| placeholder  | 默认值|
| maxlength  | 允许最大输入字符数|
| size  | 表单显示长度，一般用不使用而用 css 控制|
| disabled  | 只读，可提交到后台|
| readonly  | 后台接收字段名|
| capture  | 使用麦克风、视频或摄像头哪种方式获取手机上传文件，支持的值有 microphone, video, camera|

基本示例

```html
<form action="hd.php" method="POST" novalidate>
  <fieldset>
      <legend>文本框</legend>
      <input type="text" name="title" required placeholder="请输入标题" maxlength="5" value="" size="100">
  </fieldset>
</form>

```

调取摄像头

当 input 类型为 file 时手机会让用户选择图片或者拍照，如果想直接调取摄像头使用以下代码。

```html
<input type="file" capture="camera" accept="image/*" />

```
其他类型


|  类型   | 说明  |
|  ----  | ----  | 
| email  | 输入内容为邮箱 |
| url  | 输入内容为 URL 地址|
| password  | 输入内容为密码项|
| search  | 搜索框|
| hidden  | 隐藏表单|
| submit  | 提交表单|

## hidden

隐藏表单用于提交后台数据，但在前台内容不显示所以在其上做用样式定义也没有意义

```html
<input type="hidden" name="id" value="1">
```

## 提交表单

创建提交按钮可以将表单数据提交到后台，有多种方式可以提交数据如使用 AJAX，或 HTML 的表单按钮。

1.使用 input 构建提交按钮，如果设置了 name 值按钮数据也会提交到后台，如果有多个表单项可以通过些判断是哪个表单提交的。

```html
<input type="submit" name="submit" value="提交表单">

```

2.使用 button 也可以提交，设置 type 属性为submit 或不设置都可以提交表单

```html
<button type="submit">提交表单</button>
```

## 禁用表单

通过为表单设置 disabled 或 readonly 都可以禁止修改表单，但 readonly表单的数据可以提交到后台。

```html
<input type="text" name="web" value="houdunren.com" readonly>
```

## pattern

表单可以通过设置 pattern 属性指定正则验证，也可以使用各种前端验证库如 formvalidator (opens new window)或 validator.js

|  类型   | 说明  |
|  ----  | ----  | 
| pattern  | 正则表达式验证规则 |
| oninvalid  | 输入错误时触发的事件|

```html
<form action="">
	<input type="text" name="username" pattern="[A-z]{5,20}"
	oninvalid="validate('请输入5~20位字母的用户名')">
	<button>提交</button>
</form>

<script>
	function validate(message) {
		alert(message);
	}
</script>
```

## textrea

文本域指可以输入多行文本的表单，当然更复杂的情况可以使用编辑器如ueditor、ckeditor等。

|  选项   | 说明  |
|  ----  | ----  | 
| cols  | 列字符数（一般使用 css 控制更好 |
| rows  | 行数（一般使用 css 控制更好|

```html
<textarea name="content" cols="30" rows="3">念故人，千里至此共明月</textarea>
```
## select

下拉列表项可用于多个值中的选择


|  选项   | 说明  |
|  ----  | ----  | 
| multiple  | 支持多选 |
| size  | 列表框高度|
| optgroup  | 选项组|
| selected  | 选中状态|
| option  | 选项值|

```html
<select name="lesson">
        <option value="">== 选择课程 ==</option>
        <optgroup label="后台">
            <option value="php">PHP</option>
            <option value="linux">LINUX</option>
            <option value="mysql">MYSQL</option>
        </optgroup>
        <optgroup label="前台">
            <option value="php">HTML</option>
            <option value="linux">JAVASCRIPT</option>
            <option value="mysql">CSS</option>
        </optgroup>
</select>

```

## radio

单选框指只能选择一个选项的表单，如性别的选择男、女、保密 只能选择一个。

|  选项   | 说明  |
|  ----  | ----  | 
| checked  | 选中状态 |


```html
<input type="radio" name="sex" value="boy" id="boy">
<label for="boy">男</label>

<input type="radio" name="sex" value="girl" id="girl" checked>
<label for="girl">女</label>
```
## checkbox

复选框指允许选择多个值的表单。

```html
<fieldset>
        <legend>复选框</legend>
        <input type="checkbox" name="sex" value="boy" id="boy">
        <label for="boy">PHP</label>

        <input type="checkbox" name="sex" value="girl" id="girl" checked>
        <label for="girl">MYSQL</label>
</fieldset>

```

## 文件上传

文件上传有多种方式，可以使用插件或 JS 拖放上传处理。HTML 本身也提供了默认上传的功能，只是上传效果并不是很美观

|  选项   | 说明  |
|  ----  | ----  | 
| multiple  | 支持多选 |

| accept  | 允许上传类型 .png,.psd 或 image/png,image/gif |

```html
<form action="" method="POST" enctype="multipart/form-data">
	<fieldset>
		<input type="file" name="icon" multiple="multiple" accept="image/png,image/gif">
	</fieldset>
	<button>保存</button>
</form>

```

## 日期与时间

|  属性   | 说明  |
|  ----  | ----  | 
| step  | 最小时间|

| min  | 最小时间 |
| max  | 最大时间 |

## 日期选择

```html
<input type="date" step="5" min="2020-09-22" max="2025-01-15" name="datetime">

```
## 周选择


```html
<input type="week">

```

## 月份选择

```html
<input type="month">

```

## 日期与时间
```html
<input type="datetime-local" name="datetime">
  ```

  ## autocomplete

浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
```html
<form action="">
  <input type="search" autocomplete="on" name="content" />
  <button>提交</button>
</form>
```


## 列表


列表的使用与word 等软件的列表概念相似，只不过是应用在网页展示中


## 有序列表

有序列表是指有数字编号的列表项，可以使用CSS定义更多样式，具体请查看 CSS 章节

```html
<style>
        .li-style1{
            /*
            circle      空心圆
            disc        实心圆
            square      实心方块
            decimal     数字
            upper-alpha 大写字母
            lower-alpha 小写字母
            upper-roman 大写罗马数字
            lower-roman 小写罗马数字
             */
            list-style-type: decimal;
        }

        .li-style2{
        	/* 取消风格 */
            list-style: none;
        }
        .li-style3{
        	/*inside 内部 outside 外部（默认）*/
        	list-style-position: inside;
        }
</style>

<ol start="1">
	<li>脸慢笑盈盈，相看无限情</li>
	<li>残灯孤枕梦，轻浪五更风</li>
	<li>青松影里，红藕香中</li>
</ol>

```

## 无序列表

没有数字编号的列表项，可以使用CSS定义更多样式，

```html
<ul>
	<li>寄相思，寒雨灯窗，芙蓉旧院</li>
	<li>竹影和诗瘦，梅花入梦香</li>
	<li>千里共如何，微风吹兰杜</li>
</ul>
```

## 描述列表

描述列表指每个列表项有单独的标题。



```html
dl>
	<dt>王昌龄《同从弟南斋玩月忆山阴崔少府》</dt>
	<dd>千里共如何</dd>
	<dd>微风吹兰杜</dd>

	<dt>查慎行《舟夜书所见》</dt>
	<dd>微微风簇浪</dd>
	<dd>散作满河星</dd>
</dl>

```



