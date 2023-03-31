import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: 'https://github.com/coderxixi' },
  {
    text: '日常笔记',
    items: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/csslink/' },
      { text: 'Javascript', link: '/item-3' }
    ]
  },
  {
    text: '前端工具导航',
    link: '/nav/'
  },
 
]
