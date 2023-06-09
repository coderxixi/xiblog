import type { DefaultTheme } from 'vitepress'

export const sidebar = {
    '/html/':[
    {
      items: [
        { text: '页面结构', link: '/html/' }, // /guide/index.md
        { text: '文本相关', link: '/html/text' }, // /guide/one.md
        { text: '链接与图片', link: '/html/picturesandlinks' } ,// /guide/two.md
        { text: '表单和列表', link: '/html/formsandlists' },
        { text: '表格多媒体', link: '/html/tablemultimedia' }
      ]
    }
    ],
  '/javascript/': [
    {
      items: [
        { text: '基础知识', link: '/javascript/' },
        { text: '运算符和流程控制', link: '/javascript/processcontrol' },
        { text: '基本类型', link: '/javascript/basicdata' },
        { text: '数组类型', link: '/javascript/arr' },  
        { text: 'Set数据结构', link: '/javascript/setdata' },
        { text: 'Map数据结构', link: '/javascript/mapdata' },
        { text: '迭代器和生成器', link: '/javascript/iterativegeneration' } 
        // /guide/index.md
      ]
    }
  ],
    '/css/': [
    {
      items: [
        { text: '基础知识', link: '/css/' }, // /guide/index.md
        { text: '选择器', link: '/css/selector' }, // /guide/one.md
        { text: '元素权重', link: '/css/elementweight' },// /guide/two.md
        { text: '文本控制', link: '/css/textcontrol' },
        { text: '盒子模型', link: '/css/boxmodel' },
        { text: '背景处理', link: '/css/backgroundprocessing' },
        { text: '数据样式', link: '/css/datastyle' },
        { text: '浮动布局', link: '/css/float' },
        { text: '定位布局', link: '/css/positions' },
        { text: '弹性布局', link: '/css/flex' },
        { text: '栅格布局', link: '/css/tablemultimedia' },
        { text: '变形动画', link: '/css/tablemultimedia' },
        { text: '过渡延迟', link: '/css/tablemultimedia' },
        { text: '媒体查询', link: '/css/tablemultimedia' },
        { text: '响应尺寸', link: '/css/tablemultimedia' },
        { text: '字体图标', link: '/css/tablemultimedia' },
        { text: '常用技巧', link: '/css/tablemultimedia' }
      ]
    }
     ],
  '/typescriptmd/': [
    {
      items: [
        { text: '环境配置', link: '/typescriptmd/' },
        { text: '基础类型', link: '/typescriptmd/foundationtype' },
        { text: '配置和调试', link: '/typescriptmd/dispose' },
        { text: '断言的使用', link: '/typescriptmd/certainty' },
        { text: '类和接口', link: '/typescriptmd/class' },// /guide/index.md certainty// 
        { text: '泛型', link: '/typescriptmd/genericparadigm' },
        { text: '装饰器', link: '/typescriptmd/decorator' },
        { text: 'ts模块管理', link: '/typescriptmd/tsmodule' },
        { text: '类型工具', link: '/typescriptmd/typetool' }
      ] 
    }
  ],
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

