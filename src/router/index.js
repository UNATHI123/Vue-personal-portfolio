import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
     component: About 
  },
  
  {
    path: '/projects',
    name: 'Projects',
     component:Projects 
  },
  {
    path: '/resume',
    name: 'Resume',
     component: Resume 
  },

  {
    path: '/testimonials',
    name: 'testimonials',
     component:Testimonials
  },
  
  {
    path: '/contact',
    name: 'contact',
     component: Contact
  },
  {
    path:'/all-projects',
    redirect:'/projects'
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
