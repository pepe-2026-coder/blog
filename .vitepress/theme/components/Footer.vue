<template>
  <footer class="footer">
    <p>
      &copy; {{ currentYear }} pepe-2026-coder. Built with
      <a href="https://vitepress.dev" target="_blank">VitePress</a>.
    </p>
    <p style="margin-top: 8px;">
      <a href="https://github.com/pepe-2026-coder/blog" target="_blank">View Source</a>
    </p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
