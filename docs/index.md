---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My VitePress Demo Project"
  text: "This is my VitePress demo project"
  tagline: "My great project tagline"
  image:
    src: /ext.svg
    alt: Chrome 浏览器插件
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: brand
      text: extension
      link: https://18055975947.github.io/extension/
      target: _blank
      rel: external

features:
  - title: 什么是浏览器插件？
    icon:
      src: /ext.svg
    details: Chrome 插件可通过自定义界面、观察浏览器事件和修改网络来提升浏览体验。
  - title: Chrome 插件是如何构建的？
    icon:
      src: /develop.svg
    details: 使用与创建 Web 应用相同的 Web 技术来构建扩展程序：HTML、CSS 和 JavaScript。
  - title: Chrome 插件可以做些什么？
    icon:
      src: /ext-2.svg
    details: 设计界面、控制浏览器、管理插件、覆盖网页和设置、控制网络、注入 JS 和 CSS、录音和屏幕截图
  - title: Vue 开发插件
    icon:
      src: /vue.svg
    details: 是一个使用 Vue.js 框架开发的 Chrome 插件，旨在为开发者展示如何使用 Vue.js 构建强大的浏览器扩展。
    link: https://juejin.cn/post/7330227149177028617
    linkText: 查看详情
  - title: React 开发插件
    icon:
      src: /react.svg
    details: 是一个使用 React.js 框架开发的 Chrome 插件，旨在为开发者展示如何使用 React.js 构建强大的浏览器扩展。
    link: https://juejin.cn/post/7349936384512213027
    linkText: 查看详情
  - title: 实用插件推荐
    icon:
      src: /tj.svg
    details: 推荐一些对前端开发来说实用的 Chrome 插件。
    link: https://juejin.cn/post/7327893130572824611
    linkText: 查看详情
---

## 首页模块 MD 文档

MD 文件

下面是添加 `style` 标签和引入 `md` 文件

<style module>
article>img{
  height: 48px;
}
</style>

<!--@include: ./components/test.md-->