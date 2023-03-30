---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: coderxixi
  text: 嘻嘻个人前端博客
  tagline: 使用 VitePress 打造个人前端博客
  image:
    src: /logo.png
    alt: 嘻嘻物语
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<br />如有异议按你的理解为主，不接受反驳
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  - icon: 💡
    title: 奇淫技巧
    details: 各种各样的奇淫技巧<br />配合 CV 大法来解决疑难杂症
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---

<style>
  .text {
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  margin-top: 20px;

  background: -webkit-linear-gradient(315deg,
      rgb(210, 86, 53) 10%,
      #647eff 50%,
      rgb(238, 224, 112) 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
/*爱的魔力转圈圈*/
.logo{
   border-radius: 50%;
}
.m-home-layout .image-src{
    border-radius: 50%;
}
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
