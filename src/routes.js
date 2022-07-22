import Home from './components/home/Home.vue'
import Headphones from './components/categories/Headphones.vue'
import Speakers from './components/categories/Speakers.vue'
import Earphones from './components/categories/Earphones.vue'
import Product from "./components/ProductPage/Product.vue";
import Checkout from './components/Checkout.vue'

export default [
    {path: '/', component : Home},
    {path: '/checkout', component: Checkout},
    {path: '/headphones', component: Headphones},
    {path: '/earphones', component: Earphones},
    {path: '/speakers', component: Speakers},
    {path: "/product/:product", name: "Product", component: Product},
]
