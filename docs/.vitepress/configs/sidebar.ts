import type { DefaultTheme } from 'vitepress'

export const sidebar = {
    '/html/':[
    {
      // text: 'html',
      items: [
      
        { text: '页面结构', link: '/html/' }, // /guide/index.md
        { text: '文本相关', link: '/html/text' }, // /guide/one.md
        { text: '链接与图片', link: '/html/picturesandlinks' } ,// /guide/two.md
        { text: '表单和列表', link: '/html/formsandlists' },
        { text: '表格多媒体', link: '/html/tablemultimedia' }
      ]
    }
    ],
  '/css/': [
    {
      // text: 'html',
      items: [

        { text: '基础知识', link: '/css/' }, // /guide/index.md
        { text: '选择器', link: '/css/selector' }, // /guide/one.md
        { text: '元素权重', link: '/css/picturesandlinks' },// /guide/two.md
        { text: '文本控制', link: '/css/formsandlists' },
        { text: '盒子模型', link: '/css/tablemultimedia' },
        { text: '背景处理', link: '/css/tablemultimedia' },
        { text: '数据样式', link: '/css/tablemultimedia' },
        { text: '浮动布局', link: '/css/tablemultimedia' },
        { text: '定位布局', link: '/css/tablemultimedia' },
        { text: '弹性布局', link: '/css/tablemultimedia' },
        { text: '栅格布局', link: '/css/tablemultimedia' },
        { text: '变形动画', link: '/css/tablemultimedia' },
        { text: '过渡延迟', link: '/css/tablemultimedia' },
        { text: '媒体查询', link: '/css/tablemultimedia' },
        { text: '响应尺寸', link: '/css/tablemultimedia' },
        { text: '字体图标', link: '/css/tablemultimedia' },
        { text: '常用技巧', link: '/css/tablemultimedia' }








      ]
    }
  ]
  }

// export const sidebar: DefaultTheme.Config['sidebar'] = [
//   {
//     text: '页面结构',
//     // collapsed: true,
//     link: '/html/'
 
  
//   },
//   {
//     text: '文本相关',
//     // collapsed: true,
//     link: '/text/'
//   },
//   {
//     text: '链接与图片',
//     // collapsed: true,
//     link: '/picturesandlinks/'
//   },
//   {
//     text: '表单和列表',
//     // collapsed: true,
//     link: '/formsandlists/'
//   },
//   {
//     text: '表格多媒体',
//     // collapsed: true,
//     link: '/tablemultimedia/'
//   }
// ]