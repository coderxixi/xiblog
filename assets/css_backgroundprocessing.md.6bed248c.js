import{_ as o,o as t,c as r,d,a as b,n as C,u,b as s,e as a}from"./app.3863e978.js";const y={data(){return{}}};function h(e,l,p,c,i,R){return t(),r("div")}const g=o(y,[["render",h],["__scopeId","data-v-c0064f41"]]),A=d({__name:"gradualchange",props:["bg"],setup(e){const l=e,p=b(()=>l.bg);return(c,i)=>(t(),r("div",{style:C({background:u(p)})},null,4))}});const n=o(A,[["__scopeId","data-v-d33e0bb7"]]),_=a(`<h2 id="背景样式" tabindex="-1">背景样式 <a class="header-anchor" href="#背景样式" aria-hidden="true">#</a></h2><h3 id="背景颜色" tabindex="-1">背景颜色 <a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a></h3><p>背景颜色可以使用 rga | rgba | 十六进制 等颜色格式</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">耶溪采莲女，见客棹歌回。笑入荷花去，佯羞不出来。&lt;/</span><span style="color:#FFCB6B;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="背景图片" tabindex="-1">背景图片 <a class="header-anchor" href="#背景图片" aria-hidden="true">#</a></h3><p>可以使用 png| gif |jpeg 等图片做为背景使用</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(</span><span style="color:#FFCB6B;">icon-s</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">jpg</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="背景裁切" tabindex="-1">背景裁切 <a class="header-anchor" href="#背景裁切" aria-hidden="true">#</a></h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>border-box</td><td>包括边框</td></tr><tr><td>padding-box</td><td>不含边框，包括内边距</td></tr><tr><td>content-box</td><td>内容区域</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-clip</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">border-box</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="背景重复" tabindex="-1">背景重复 <a class="header-anchor" href="#背景重复" aria-hidden="true">#</a></h3><p>用于设置背景重复的规则</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>repeat</td><td>水平、垂直重复</td></tr><tr><td>repeat-x</td><td>水平重复</td></tr><tr><td>repeat-y</td><td>垂直重复</td></tr><tr><td>no-repea</td><td>不重复</td></tr><tr><td>space</td><td>背景图片对称均匀分布</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-repeat</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">repeat-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="背景滚动" tabindex="-1">背景滚动 <a class="header-anchor" href="#背景滚动" aria-hidden="true">#</a></h3><p>用于设置在页面滚动时的图片处理方式</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>scroll</td><td>背景滚动</td></tr><tr><td>fixed</td><td>背景固定</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-attachment</span><span style="color:#A6ACCD;">: fixed;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="背景位置" tabindex="-1">背景位置 <a class="header-anchor" href="#背景位置" aria-hidden="true">#</a></h3><p>用于设置背景图片的水平、垂直定位</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>左对齐</td></tr><tr><td>right</td><td>右对齐</td></tr><tr><td>center</td><td>居中对齐</td></tr><tr><td>top</td><td>顶端对齐</td></tr><tr><td>bottom</td><td>底部对齐</td></tr></tbody></table><p>居中对齐</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">或</span></span>
<span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: 50% 50%;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>水平居右，垂直居中</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: right center;</span></span>
<span class="line"><span style="color:#A6ACCD;">或</span></span>
<span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: 100% 50%;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用具体数值定义</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: 100px 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">也支持使用负值</span></span>
<span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: -200px 100px;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="背景尺寸" tabindex="-1">背景尺寸 <a class="header-anchor" href="#背景尺寸" aria-hidden="true">#</a></h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>cover</td><td>背景完全覆盖，可能会有背景溢出</td></tr><tr><td>contain</td><td>图片不溢出的放在容器中，可能会漏出部分区域</td></tr></tbody></table><p>指定数值定义宽高尺寸</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-size</span><span style="color:#A6ACCD;">: 50% 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">或</span></span>
<span class="line"><span style="color:#FFCB6B;">background-size</span><span style="color:#A6ACCD;">: 200px 200px;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>宽度固定高度自动</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-size</span><span style="color:#A6ACCD;">: 50% auto;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="多个背景" tabindex="-1">多个背景 <a class="header-anchor" href="#多个背景" aria-hidden="true">#</a></h3><p>后定义的背景置于底层</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(</span><span style="color:#FFCB6B;">xj-small</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">), url(bg</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>多属性定义</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(</span><span style="color:#FFCB6B;">xj-small</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">), url(bg</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">background-repeat</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">background-position</span><span style="color:#A6ACCD;">: top left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right bottom;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以一次定义多个背景图片</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: url(</span><span style="color:#FFCB6B;">xj-small</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">) left 50% </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                url(bg</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">) right 100% </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;"> red;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="组合设置" tabindex="-1">组合设置 <a class="header-anchor" href="#组合设置" aria-hidden="true">#</a></h3><p>可以使用一条指令设置背景</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: red url(</span><span style="color:#FFCB6B;">xj-small</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">) </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;"> right 50% fixed;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="盒子阴影" tabindex="-1">盒子阴影 <a class="header-anchor" href="#盒子阴影" aria-hidden="true">#</a></h2><p>可以使用 box-shadow 对盒子元素设置阴影，参数为 水平偏移,垂直偏移,模糊度,颜色 构成</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: 10px 10px 5px rgba(100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">5);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果如下</p>`,47),D=a(`<h2 id="颜色渐变" tabindex="-1">颜色渐变 <a class="header-anchor" href="#颜色渐变" aria-hidden="true">#</a></h2><h3 id="线性渐变" tabindex="-1">线性渐变 <a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a></h3><p>渐变一般用在背景颜色中使用</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),m=a(`<p>渐变角度</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(30deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),F=a(`<p>向右渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(to right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),v=a(`<p>向左渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(to left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),x=a(`<p>设置多个颜色</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rgb(0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 200), green</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rgba(122</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 211</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),T=a(`<h3 id="径向渐变" tabindex="-1">径向渐变 <a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a></h3><p>设置渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),k=a(`<p>设置渐变宽度与高度</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(100px 200px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),B=a(`<p>左下渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(at bottom left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),S=a(`<p>右下渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(at bottom right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),f=a(`<p>侧向中心渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(at </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),w=a(`<p>底部向中心渐变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: radial-gradient(at 50% 100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),I=a(`<h2 id="标识位" tabindex="-1">标识位 <a class="header-anchor" href="#标识位" aria-hidden="true">#</a></h2><p>颜色未指定标识时，颜色会平均分布。</p><p>红色与蓝色在 50%gc 60%间发生激变</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(45deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red 50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue 0%)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),V=a(`<p>径向标识位绘制小太阳</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">width: 150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background: radial-gradient(red 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> yellow 30%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> black 60%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> black 100%);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),P=a(`<p>渐变重复</p><p>下例定义从 0 到 25 为蓝色,25px 到 50px 的红色，并进行重复后产生渐变的进度条。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">background: repeating-linear-gradient(90deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 25px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> yellow 25px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 25px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red 50px);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),N=a(`<p>径向重复</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background: repeating-radial-gradient(100px 100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red 0%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> yellow 40%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> black 60%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> black 200%);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"背景样式","slug":"背景样式","link":"#背景样式","children":[{"level":3,"title":"背景颜色","slug":"背景颜色","link":"#背景颜色","children":[]},{"level":3,"title":"背景图片","slug":"背景图片","link":"#背景图片","children":[]},{"level":3,"title":"背景裁切","slug":"背景裁切","link":"#背景裁切","children":[]},{"level":3,"title":"背景重复","slug":"背景重复","link":"#背景重复","children":[]},{"level":3,"title":"背景滚动","slug":"背景滚动","link":"#背景滚动","children":[]},{"level":3,"title":"背景位置","slug":"背景位置","link":"#背景位置","children":[]},{"level":3,"title":"背景尺寸","slug":"背景尺寸","link":"#背景尺寸","children":[]},{"level":3,"title":"多个背景","slug":"多个背景","link":"#多个背景","children":[]},{"level":3,"title":"组合设置","slug":"组合设置","link":"#组合设置","children":[]}]},{"level":2,"title":"盒子阴影","slug":"盒子阴影","link":"#盒子阴影","children":[]},{"level":2,"title":"颜色渐变","slug":"颜色渐变","link":"#颜色渐变","children":[{"level":3,"title":"线性渐变","slug":"线性渐变","link":"#线性渐变","children":[]},{"level":3,"title":"径向渐变","slug":"径向渐变","link":"#径向渐变","children":[]}]},{"level":2,"title":"标识位","slug":"标识位","link":"#标识位","children":[]}],"relativePath":"css/backgroundprocessing.md","lastUpdated":1680680169000}'),E={name:"css/backgroundprocessing.md"},z=Object.assign(E,{setup(e){return(l,p)=>(t(),r("div",null,[_,s(g),D,s(n,{bg:"linear-gradient(red, rgb(0, 0, 200), green, rgba(122, 211, 100, 0))"}),m,s(n,{bg:"linear-gradient(30deg, red, green)"}),F,s(n,{bg:"linear-gradient(to right, red, green)"}),v,s(n,{bg:"linear-gradient(to left, red, green)"}),x,s(n,{bg:"linear-gradient(red, rgb(0, 0, 200), green, rgba(122, 211, 100, 0))"}),T,s(n,{bg:"radial-gradient(red, blue, green)"}),k,s(n,{bg:"radial-gradient(100px 200px, red, blue, green))"}),B,s(n,{bg:"radial-gradient(at bottom left, red, blue)"}),S,s(n,{bg:"radial-gradient(at bottom right, red, blue)"}),f,s(n,{bg:"radial-gradient(at center left, red, blue)"}),w,s(n,{bg:"radial-gradient(at 50% 100%, red, blue)"}),I,s(n,{bg:"linear-gradient(45deg, red 50%, blue 0%)"}),V,s(n,{bg:"radial-gradient(red 0, yellow 30%, black 60%, black 100%)"}),P,s(n,{bg:"repeating-linear-gradient(90deg, blue, 25px, yellow 25px, 25px, red 50px)"}),N,s(n,{bg:"repeating-radial-gradient(100px 100px, red 0%, yellow 40%, black 60%, black 200%)"})]))}});export{$ as __pageData,z as default};