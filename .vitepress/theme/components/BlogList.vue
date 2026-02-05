<template>
  <div class="blog-list">
    <article class="blog-item" v-for="post in posts" :key="post.path">
      <h3>
        <a :href="post.path">{{ post.title }}</a>
      </h3>
      <div class="meta">
        <span class="date">{{ post.date }}</span>
        <span class="author">{{ post.author }}</span>
      </div>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="tags">
        <span class="skill-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Post {
  path: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
}

const props = defineProps<{
  posts: Post[]
}>()
</script>
