import Home from './components/home/Home.vue'
import Headphones from './components/categories/Headphones.vue'
import Speakers from './components/categories/Speakers.vue'
import Earphones from './components/categories/Earphones.vue'
import DetailZX9 from './components/detail/DetailZX9.vue'
import DetailZX7 from './components/detail/DetailZX7.vue'

export default [
    { path: '/', component : Home},
    {path: '/headphones', component: Headphones},
    {path: '/earphones', component: Earphones},
    {path: '/speakers', component: Speakers},
    {path: '/zx9', component: DetailZX9},
    {path: '/zx7', component: DetailZX7}
]