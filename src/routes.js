import Home from './components/home/Home.vue'
import Headphones from './components/Headphones.vue'
import Speakers from './components/Speakers.vue'
import Earphones from './components/Earphones.vue'
import DetialXX991 from './components/DetialXX991.vue'
import DetialXX992 from './components/DetialXX992.vue'

export default [
    { path: '/', component : Home},
    {path: '/headphones', component: Headphones},
    {path: '/earphones', component: Earphones},
    {path: '/speakers', component: Speakers},
    {path: '/detail', component: DetialXX991},
    {path: '/detail99xxll', component: DetialXX992}
]