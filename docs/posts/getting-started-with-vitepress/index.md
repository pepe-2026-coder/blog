---
title: VitePress 入门指南
date: 2024-01-15
author: Pepe
tags: ['VitePress', 'Vue', '静态站点']
---

# VitePress 入门指南

[VitePress](https://vitepress.dev/) 是一个静态站点生成器，基于 Vue 和 Vite 构建。它非常适合用来创建文档站点和博客。

## 为什么选择 VitePress？

1. **速度快**: 基于 Vite，启动和热更新非常快
2. **简洁**: 配置简单，易于上手
3. **Vue 支持**: 可以使用 Vue 组件来丰富内容
4. **主题美观**: 默认主题就很不错

## 快速开始

```bash
npm add -D vitepress vue
npx vitepress init
```

## 基本配置

在 `.vitepress/config.ts` 中可以配置站点标题、描述、导航栏等。

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '一个技术博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' }
    ]
  }
})
```

## 总结

VitePress 是一个优秀的静态站点生成器，非常适合用来搭建个人博客和文档站点。
