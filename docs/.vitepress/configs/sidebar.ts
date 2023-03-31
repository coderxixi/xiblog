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