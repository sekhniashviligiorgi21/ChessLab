import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createGtag } from 'vue-gtag' // 👈 1. Change to curly braces named import

import Analysis from './pages/Analysis.vue'
import Review from './pages/Review.vue'
import Play from './pages/Play.vue'
import Insights from './pages/Insights.vue'
import Puzzles from './pages/Puzzles.vue'

const routes = [
	{ path: "/", component: Analysis },
	{ path: "/Review", component: Review },
	{ path: "/Insights", component: Insights },
	{ path: "/vsComputer", component: Play }, 
	{ path: '/Puzzles', name: 'Puzzles', component: Puzzles}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)

// 👈 2. Use createGtag function constructor instead of app.use variable approach
app.use(
  createGtag({
    config: { id: "G-GYKFRBMF29" }
  }),
  router
)

app.use(router)
app.mount('#app')
