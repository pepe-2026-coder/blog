<template>
  <div class="resume-card">
    <div class="resume-header">
      <div class="avatar-emoji">👨‍💻</div>
      <h1>Pepe</h1>
      <p class="title">Full Stack Developer</p>
    </div>
    <div class="resume-body">
      <section class="resume-section">
        <h2>个人简介</h2>
        <p>
          热爱技术的全栈开发者，专注于构建高质量的 Web 应用程序。
          拥有多年前端开发经验，熟悉现代前端技术栈，
          致力于创造优秀的用户体验。
        </p>
      </section>

      <section class="resume-section">
        <h2>技能标签</h2>
        <div class="skill-tags">
          <span class="skill-tag" v-for="skill in skills" :key="skill">{{ skill }}</span>
        </div>
      </section>

      <section class="resume-section">
        <h2>工作经历</h2>
        <div class="resume-item" v-for="job in jobs" :key="job.company">
          <h3>{{ job.role }}</h3>
          <p class="company">{{ job.company }}</p>
          <p class="date">{{ job.period }}</p>
          <p>{{ job.description }}</p>
        </div>
      </section>

      <section class="resume-section">
        <h2>教育背景</h2>
        <div class="resume-item" v-for="edu in education" :key="edu.school">
          <h3>{{ edu.degree }}</h3>
          <p class="school">{{ edu.school }}</p>
          <p class="date">{{ edu.period }}</p>
        </div>
      </section>

      <section class="resume-section">
        <h2>联系方式</h2>
        <p>
          GitHub: <a href="https://github.com/pepe-2026-coder" target="_blank">@pepe-2026-coder</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'CSS/SCSS',
  'Git',
  'Webpack',
  'Vite'
]

const jobs = [
  {
    role: '高级前端工程师',
    company: '某科技公司',
    period: '2022 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，主导团队技术选型和代码规范制定。'
  },
  {
    role: '前端开发工程师',
    company: '某互联网公司',
    period: '2020 - 2022',
    description: '参与多个项目的开发，负责页面实现、性能优化和用户体验改进。'
  }
]

const education = [
  {
    degree: '计算机科学与技术学士',
    school: '某大学',
    period: '2016 - 2020'
  }
]
</script>
