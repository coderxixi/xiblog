---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import Add from './components/add.vue';
import Hover from "./components/hover.vue";
import Invalid from "./components/invalid.vue";
import Checked from "./components/checked.vue"
</script>



## 选择器

样式是做用在元素标签上的，通过本章将可以随意查找元素来应用样式。

## 基本选择器


|  选择器 | 示例 | 描述 
|  ----  | ----  | ---- 
| 类选择器| .intro |   选择 class="intro" 的所有元素 
| id选择器| #firstname |   选择 id="firstname" 的所有元素 
| 通配符选择器| * |   选择所有元素 
| 标签选择| p |   选择所有 p 元素 

|


## 层次选择器

|  选择器 | 示例 | 描述 
|  ----  | ----  | ---- 
| 后代选择器| elemP elemC |   元素的后代元素
| 子代选择器| elemP>elemC |  元素的子代元素
| 相邻同胞选择器| elemP+elemC |   元素相邻的同胞元素	
| 通用同胞选择器| elem1~elem2 |   元素后面的同胞元素

## 集合选择器

|  选择器 | 示例 | 描述 
|  ----  | ----  | ---- 
| 并集选择器 | div,p |   多个指定的元素 
| 交集选择器| div.p |   指定类名的元素 

## 条件选择器

|  选择器 | 描述  
|  ----  | ----  | 
|:lang|指定标记语言的元素
|:dir()|指定编写方向的元素
|:is|指定条件的元素
|:not	|非指定条件的元素
|:where|指定条件的元素
|:scope|指定元素作为参考点	
|:any-link|所有包括href的链接元素	
|:local-link|所有包括href且属于绝对地址的链接元素


## 状态选择器
|  选择器 | 描述  
|  ----  | ----  
|:hover	|鼠标悬浮的元素	
|:link	|未访问的链接元素	
|:visited|	已访问的链接元素	
|:target	|当前锚点的元素	
|:focus	|输入聚焦的表单元素	
|:required|	输入必填的表单元素	
|:valid	|输入合法的表单元素	
|:invalid	|输入非法的表单元素	
|:in-range	|输入范围内的表单元素	
|:out-of-range|	输入范围外的表单元素	
|:checked|	选项选中的表单元素	
|:optional	|选项可选的表单元素	
|:enabled	|事件启用的表单元素	
|:disabled|	事件禁用的表单元素	
|:read-only|	只读的表单元素	
|:read-write	|可读可写的表单元素	
|:target-within|	内部锚点元素处于激活状态的元素	
|:focus-within	|内部表单元素处于聚焦状态的元素	
|:focus-visible|	输入聚焦的表单元素	
|:blank|	输入为空的表单元素	
|:user-invalid|	输入合法的表单元素	
|:indeterminate	|选项未定的表单元素	
|:placeholder-shown|	占位显示的表单元素	
|:current()|	浏览中的元素	
|:past()	|已浏览的元素	
|:future()|	未浏览的元素	
|:playing	|开始播放的媒体元素	
|:paused	|暂停播放的媒体元素

## 结构选择器
|  选择器 | 描述  
|  ----  | ---- 
|:root	|文档的根元素	
|:empty	|无子元素的元素	
|:nth-child(n)|	元素中指定顺序索引的元素	
|:nth-last-child(n)|	元素中指定逆序索引的元素	
|:first-child	|元素中为首的元素	
|:last-child|	元素中为尾的元素	
|:only-child	|父元素仅有该元素的元素	
|:nth-of-type(n)|	标签中指定顺序索引的标签	
|:nth-last-of-type(n)|	标签中指定逆序索引的标签	
|:first-of-type	|标签中为首的标签	
|:last-of-type	|标签中为尾的标签	
|:only-of-type	|父元素仅有该标签的标签

## 属性选择器
|  选择器 | 描述  
|  ----  | ---- 
|[attr]	|指定属性的元素	
|[attr=val]	|属性等于指定值的元素
|[attr*=val]|属性包括指定值的元素	
|[attr^=val]|	属性以指定值开头的元素	
|[attr$=val]|	属性以指定值结尾的元素	
|[attr~=val]|	属性包括指定值(完整单词)的元素(不推荐使用)	
|[attr=val]|	属性以指定值(完整单词)开头的元素(不推荐使用)	

## 伪元素
|  选择器 | 描述  
|  ----  | ---- 
|::before|	在元素前加入的内容	
|::after|	在元素后加入的内容	
|::first-letter	|元素的首字母	
|::first-line|	元素的首行	
|::selection	|鼠标选中的元素	
|::backdrop	|全屏模式的元素	
|::placeholder|	表单元素的占位

使用选择器有什么好处

* 减少很多无用或少用的类，保持css文件的整洁性与观赏性，代码也是一门艺术
* 减少修改类而有可能导致样式失效的问题，有时修改类但未确保HTML与CSS一样而导致样式失效
* 减少无实质性使用的类，例如很多层嵌套的标签，这些标签可能只用到一个属性，就无必要创建类关联
* 对于那些结构与行为分离的写法，使用Scss/Less编写属性时结构会更清晰易读
* 使用选择器可实现一些看似只能由JS才能实现的效果，既减少代码量也减少JS对DOM的操作，使得交互效果更流畅

## +与~
+/~都是作用于当前节点后的同胞节点，但两者有一个明显的区别，+是针对紧随该节点的节点，而~是针对后面所有节点，包括紧随该节点的节点。~还可针对一些指定类与选择器的节点，所以其使用性更广泛。
另外，+/~通常都会结合:checked完成一些高难度的CSS效果，当input触发了:checked选中状态后可通过+/~带动后面指定的节点声明一些特别属性。

```html
 <div class="specify-selector">
  	<ul class="list">
  		<li>同胞元素</li>
  		<li class="next">当前元素</li>
  		<li>同胞元素</li>
  		<li>同胞元素</li>
  		<li>同胞元素</li>
  	</ul>
  	<ul class="list">
  		<li>同胞元素</li>
  		<li class="next-all">当前元素</li>
  		<li>同胞元素</li>
  		<li>同胞元素</li>
  		<li>同胞元素</li>
  	</ul>
  	<ul class="list">
  		<li>同胞元素</li>
  		<li class="next-filter">当前元素</li>
  		<li>同胞元素</li>
  		<li class="filter">同胞元素</li>
  		<li>同胞元素</li>
  	</ul>
  </div>
  <div class="specify-selector">
  	<div class="button">
  		<input id="btn1" type="radio" name="btns" hidden>
  		<label for="btn1">点击我切换样式</label>
  	</div>
  	<div class="button">
  		<input id="btn2" type="radio" name="btns" hidden>
  		<label for="btn2">点击我切换样式</label>
  	</div>
  	<div class="button">
  		<input id="btn3" type="radio" name="btns" hidden>
  		<label for="btn3">点击我切换样式</label>
  	</div>
  </div>

```

```css
  .specify-selector {
	display: flex;
	& + .specify-selector {
		margin-top: 20px;
	}
	.list {
		border: 1px solid #f66;
		width: 200px;
		line-height: 2;
		font-weight: bold;
		font-size: 20px;
		color: #f66;
		& + .list {
			margin-left: 20px;
		}
		li {
			padding: 0 10px;
		}
		.next {
			background-color: #66f;
			color: #fff;
			& + li {
				background-color: #f90;
				color: #fff;
			}
		}
		.next-all {
			background-color: #66f;
			color: #fff;
			& ~ li {
				background-color: #09f;
				color: #fff;
			}
		}
		.next-filter {
			background-color: #66f;
			color: #fff;
			& ~ .filter {
				background-color: #09f;
				color: #fff;
			}
		}
	}
	.button {
		& + .button {
			margin-left: 20px;
		}
		label {
			display: block;
			padding: 0 10px;
			height: 40px;
			background-color: #3c9;
			cursor: pointer;
			line-height: 40px;
			font-size: 16px;
			color: #fff;
			transition: all 300ms;
		}
		input:checked + label {
			padding: 0 20px;
			border-radius: 20px;
			background-color: #f66;
		}
	}
}
```
<Add/>

## :hover

:hover作用于鼠标悬浮的节点，是一个很好用的选择器。在指定场景可代替mouseenter与mouseleave两个鼠标事件，加上transtion让节点的动画更丝滑。

* 结合attr()有一个很好用的场景，就是鼠标悬浮在某个节点中显示提示浮层，提示浮层中包括着该动作的文本
* 给节点标记一个用户属性data-*
* 当鼠标悬浮在该节点中触发:hover
* 通过attr()获取data-*的内容
* 将data-*的内容赋值到伪元素的content中

```html
<ul class="hover-tips">
	<li data-name="姨妈红"></li>
	<li data-name="基佬紫"></li>
	<li data-name="箩底橙"></li>
	<li data-name="姣婆蓝"></li>
	<li data-name="大粪青"></li>
	<li data-name="原谅绿"></li>
</ul>

```
```scss
$color-list: #f66 #66f #f90 #09f #9c3 #3c9;
.hover-tips {
	display: flex;
	justify-content: space-between;
	width: 200px;
	li {
		position: relative;
		padding: 2px;
		border: 2px solid transparent;
		border-radius: 100%;
		width: 24px;
		height: 24px;
		background-clip: content-box;
		cursor: pointer;
		transition: all 300ms;
		&::before,
		&::after {
			position: absolute;
			left: 50%;
			bottom: 100%;
			opacity: 0;
			transform: translate3d(0, -30px, 0);
			transition: all 300ms;
		}
		&::before {
			margin: 0 0 12px -35px;
			border-radius: 5px;
			width: 70px;
			height: 30px;
			background-color: rgba(#000, .5);
			line-height: 30px;
			text-align: center;
			color: #fff;
			content: attr(data-name);
		}
		&::after {
			margin-left: -6px;
			border: 6px solid transparent;
			border-top-color: rgba(#000, .5);
			width: 0;
			height: 0;
			content: "";
		}
		@each $color in $color-list {
			$index: index($color-list, $color);
			&:nth-child(#{$index}) {
				background-color: $color;
				&:hover {
					border-color: $color;
				}
			}
		}
		&:hover {
			&::before,
			&::after {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}
	}
}

```
运行效果

<Hover/>

## :valid与:invalid

完成一个完整的表单验证，需以下HTML属性与选择器搭配。

* placeholder：占位，在未输入内容时显示提示文本
* pattern：正则，在输入内容时触发正则验证
* :valid：作用于输入合法的表单节点
* :invalid：作用于输入非法的表单节点

```html
<form class="form-validation">
	<div>
		<label>名字</label>
		<input type="text" placeholder="请输入你的名字(1到10个中文)" pattern="^[\u4e00-\u9fa5]{1,10}$" required>
	</div>
	<div>
		<label>手机</label>
		<input type="text" placeholder="请输入你的手机" pattern="^1[3456789]\d{9}$" required>
	</div>
	<div>
		<label>简介</label>
		<textarea required></textarea>
	</div>
</form>

```
```scss

.form-validation {
	width: 500px;
	div + div {
		margin-top: 10px;
	}
	label {
		display: block;
		padding-bottom: 5px;
		font-weight: bold;
		font-size: 16px;
	}
	input,
	textarea {
		display: block;
		padding: 0 20px;
		border: 1px solid #ccc;
		width: 100%;
		height: 40px;
		outline: none;
		caret-color: #09f;
		transition: all 300ms;
		&:valid {
			border-color: #3c9;
		}
		&:invalid {
			border-color: #f66;
		}
	}
	textarea {
		height: 122px;
		resize: none;
		line-height: 30px;
		font-size: 16px;
	}
}
```

<Invalid/>


## :checked
checked作用于选项选中的表单节点，当input的type设置为radio与checkbox时可用

```html
   <input class="switch-btn" type="checkbox">
```

```css
.btn {
	border-radius: 31px;
	width: 102px;
	height: 62px;
	background-color: #e9e9eb;
}
.switch-btn {
	position: relative;
	appearance: none;
	cursor: pointer;
	transition: all 100ms;
	@extend .btn;
	&::before {
		position: absolute;
		content: "";
		transition: all 300ms cubic-bezier(.45, 1, .4, 1);
		@extend .btn;
	}
	&::after {
		position: absolute;
		left: 4px;
		top: 4px;
		border-radius: 27px;
		width: 54px;
		height: 54px;
		background-color: #fff;
		box-shadow: 1px 1px 5px rgba(#000, .3);
		content: "";
		transition: all 300ms cubic-bezier(.4, .4, .25, 1.35);
	}
	&:checked {
		background-color: #5eb662;
		&::before {
			transform: scale(0);
		}
		&::after {
			transform: translateX(40px);
		}
	}
}
```



<Checked/>