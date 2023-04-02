import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: 'https://github.com/coderxixi' },
  {
    text: '日常笔记',
    items: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Javascript', link: '/javascript' },
      { text: 'Typescript', link: '/typescriptmd/' },
      { text: 'vue相关', link: '/vue' },
      { text: 'react相关', link: '/react' },
      { text: '前端可视化', link: '/react' },
      { text: '前端工程化', link: '/react' }
    ]
  },
  {
    text: '前端工具导航',
    link: '/nav/'
  },
 
]
