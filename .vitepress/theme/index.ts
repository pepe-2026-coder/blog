import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import ResumeCard from './components/ResumeCard.vue'
import BlogList from './components/BlogList.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ResumeCard', ResumeCard)
    app.component('BlogList', BlogList)
  }
}
