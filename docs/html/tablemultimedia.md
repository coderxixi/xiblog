## 表格

表格在网页开发中使用频率非常高，尤其是数据展示时。

|  属性   | 说明  |
|  ----  | ----  | 
| caption  | 表格标题 |
| thead  | 表头部分| 
| tbody  | 表格主体部分|
| tfoot  | 表格尾部|


## 基本使用

```html
<table border="1">
        <caption>龚自珍</caption>
        <thead>
            <tr>
                <th>落红不是无情物</th>
                <th>化作春泥更护花</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>何处望神州，满眼风光北固楼</td>
                <td>千古兴亡多少事，悠悠。不尽长江滚滚流</td>
            </tr>
        </tbody>
</table>

```

## 单元格合并

下面是水平单元格合并

```html
<table border="1">
        <thead>
            <tr>
                <th>年少万兜鍪</th>
                <th>坐断东南战未休</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">天下英雄谁敌手？曹刘</td>
               <td>生子当如孙仲谋</td> 
            </tr>
        </tbody>
    </table>
```

下面是垂直单元格合并

```html
<table border="1">
        <thead>
            <tr>
                <th>衣带渐宽终不悔，为伊消得人憔悴</th>
                <th>两情若是久长时，又岂在朝朝暮暮</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">有美人兮，见之不忘</td>
                <td>一日不见兮，思之如狂</td>
            </tr>
            <tr>
                <td>入我相思门，知我相思苦</td>
                <td>长相思兮长相忆，短相思兮无穷极</td>
            </tr>
        </tbody>
</table>

```

## 视频

Adobe 与苹果公司对 FLASH 都不支持或消极状态，这时 HTML 提供对视频格式的支持，除了使用 html 提供的标签来播放视频外，也有很多免费或付费的插件，如video.js (opens new window)、阿里云播放器 (opens new window)等等。

属性说明

|  属性   | 描述  |
|  ----  | ----  | 
| autoplay  | 如果出现该属性，则视频在就绪后马上播放（需要指定类型如 type="video/mp4") |
| preload  | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。|
如果视频观看度低可以设置为 preload="none" 不加载视频数据减少带宽。|
如果设置为 preload=metadata值将加载视频尺寸或关键针数据，目的也是减少带宽占用。|
设置为preload="auto" 时表示将自动加载视频数据| 
| controls  | 如果出现该属性，则向用户显示控件，比如播放按钮。|
| height  | 设置视频播放器的高度。|
| width  | 设置视频播放器的宽度。|
| loop  | 如果出现该属性，则当媒介文件完成播放后再次开始播放。|
| muted  | 规定视频的音频输出应该被静音。|
| poster  | 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。|
| src  | 要播放的视频的 URL。|

