---
layout: home

hero:
  name: "Pepe Blog"
  text: "技术博客 & 个人简历"
  tagline: "热爱技术，分享生活"
  actions:
    - theme: brand
      text: 查看简历
      link: /resume/
    - theme: alt
      text: 阅读博客
      link: /posts/

features:
  - icon: "📝"
    title: 技术博客
    details: 分享前端开发经验、技术文章和学习笔记
  - icon: "💼"
    title: 个人简历
    details: 了解我的工作经历和技能专长
  - icon: "🔗"
    title: 开源项目
    details: 探索我的 GitHub 项目和代码贡献
---

<div class="hero-section">
  <div class="hero-avatar">👨‍💻</div>
  <h1>你好，我是 Pepe</h1>
  <p class="subtitle">Full Stack Developer</p>
  <p class="bio">
    我是一名热爱技术的开发者，专注于构建高质量的 Web 应用程序。
    在这里，我会分享我的技术见解、学习心得和生活感悟。
  </p>
  <div class="cta-buttons">
    <a href="/resume/" class="cta-button primary">查看简历</a>
    <a href="/about/" class="cta-button secondary">了解更多</a>
  </div>
</div>

<div class="features-section">
  <div class="container">
    <h2 class="section-title">我擅长什么</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="icon">⚡</div>
        <h3>前端开发</h3>
        <p>精通 Vue.js、React、TypeScript，构建高性能用户界面</p>
      </div>
      <div class="feature-card">
        <div class="icon">🛠</div>
        <h3>工程化</h3>
        <p>熟悉Webpack、Vite，擅长构建工具链和性能优化</p>
      </div>
      <div class="feature-card">
        <div class="icon">📱</div>
        <h3>响应式设计</h3>
        <p>精通 CSS/SCSS，实现跨设备兼容的优雅界面</p>
      </div>
    </div>
  </div>
</div>

<BlogList :posts="posts" />
