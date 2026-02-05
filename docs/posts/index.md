# 博客文章

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    path: '/posts/getting-started-with-vitepress',
    title: 'VitePress 入门指南',
    date: '2024-01-15',
    author: 'Pepe',
    excerpt: 'VitePress 是一个静态站点生成器，基于 Vue 和 Vite 构建。本文将介绍如何快速上手 VitePress 创建个人博客。',
    tags: ['VitePress', 'Vue', '静态站点']
  },
  {
    path: '/posts/typescript-best-practices',
    title: 'TypeScript 最佳实践',
    date: '2024-01-10',
    author: 'Pepe',
    excerpt: 'TypeScript 已经成为现代前端开发的标准配置。本文分享一些实用的 TypeScript 最佳实践和技巧。',
    tags: ['TypeScript', 'JavaScript', '最佳实践']
  },
  {
    path: '/posts/vue-composition-api',
    title: 'Vue 3 Composition API 指南',
    date: '2024-01-05',
    author: 'Pepe',
    excerpt: 'Vue 3 引入了 Composition API，这是一种全新的代码组织方式。本文将深入讲解其用法和优势。',
    tags: ['Vue', 'Composition API', '前端']
  }
])
</script>

<BlogList :posts="posts" />
