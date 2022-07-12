<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import Headphones from './components/Headphones.vue'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },
    data () {
        return {
          ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
        }
    },
    methods: {
      
    }
}
</script>

<style>
html {
  box-sizing: border-box;
  height: 100%;
  scroll-behavior: smooth;
}
:root {
  --color-orange: #d87d4a;
  --color-black: #1a1a1a;
  --color-light: #f1f1f1;
  --color-white-light: #fafafa;
  --color-orange-light: #fbaf85;
  --color-white: #ffffff;
  --color-dark: #000000;
}

@font-face {
    font-family: 'Manrope';
    src: local("Manrope"), url('/fonts/Manrope-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: local("Manrope"), url('/fonts/Manrope-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: local("Manrope"), url('/fonts/Manrope-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  margin: 0;
  font-weight: 500;
  line-height: 25px;
  font-size: 15px;
  font-family: 'Manrope', "Arial", sans-serif;
  background-color: var(--color-white);
  color: var(--color-dark);
}

ul {
  margin: 0;
}

a {
  margin: 0;
  text-decoration: none;
}
p {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
.container {
  padding-left: 24px;
  padding-right: 24px;
}

.button {
  display: inline-block;
  border: none;
  background-color: var(--color-orange);
  color: var(--color-white);
  padding: 15px 31px;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;

}

.button:hover {
  background-color: var(--color-orange-light);
}

.button--white {
  background-color: var(--color-white);
  color: var(--color-black);
  border: 1px var(--color-black) solid;
}

.button--white {
  background-color: var(--color-dark);
  color: var(--color-white);
}

.button-shop {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
}

.button-shop__text {
  margin-right: 10px;
  color: var(--color-dark);
  opacity: .5;
}

.button-shop__text:hover {
  color: var(--color-orange);
  opacity: 1;
}

@media screen and (min-width:768px) {
    .container {
    padding-left: 40px;
    padding-right: 40px;
  }

}

@media screen and (min-width:1110px) {
    .container {
    padding-left: 165px;
    padding-right: 165px;
  }

}
</style>
