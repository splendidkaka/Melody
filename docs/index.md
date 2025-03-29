---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "前台服务员指导手册"
  text: "A front-end developer turned front desk staff is all you need."
  tagline: "vue react 等前端知识记录本"
  image:
    src: /image.png
    alt: Chrome 浏览器插件
  actions:
    - theme: brand
      text: 快速开始
      link: /basic
    - theme: alt
      text: 门户网站
      link: https://melodykira.netlify.app/
    # - theme: brand
    #   text: extension
    #   link: https://18055975947.github.io/extension/
    #   target: _blank
    #   rel: external

features:
  - title: Vue
    icon:
      src: /vue.svg
    details: 学习 Vue.js 核心语法、组件化开发及生态系统。
    link: https://cn.vuejs.org/
    linkText: 查看详情
  - title: React
    icon:
      src: /react.svg
    details: 掌握 React Hooks、状态管理及现代前端开发实践。
    link: https://zh-hans.react.dev/
    linkText: 查看详情
  - title: Vite 极速构建
    icon:
      src: /vite.svg
    details: 基于原生 ESM 的下一代前端工具，编译速度远超 Webpack。
    link: https://cn.vitejs.dev/
    linkText: 查看详情
    
  # - title: Vue
  #   icon:
  #     src: /vue.svg
  #   details: 学习 Vue.js 核心语法、组件化开发及生态系统。
  #   link: https://cn.vuejs.org/
  #   linkText: 查看详情
  # - title: React
  #   icon:
  #     src: /react.svg
  #   details: 掌握 React Hooks、状态管理及现代前端开发实践。
  #   link: https://zh-hans.react.dev/
  #   linkText: 查看详情
  # - title: Vite 极速构建
  #   icon:
  #     src: /vite.svg
  #   details: 基于原生 ESM 的下一代前端工具，编译速度远超 Webpack。
  #   link: https://cn.vitejs.dev/
  #   linkText: 查看详情

    
---

<!-- ## 首页模块 MD 文档

MD 文件

下面是添加 `style` 标签和引入 `md` 文件 -->

<style module>
article>img{
  height: 48px;
}
</style>

<!--@include: ./components/test.md-->