<template>
    <header>
        <div class="container">
          <div class="nav">
            <span @click="showMenu = !showMenu" class="button-sidebar">
              <svg class="button-sidebar__icon" width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
            </span>
            <ul class="nav__list">
              <li class="nav__item">
                <router-link to="/" class="nav__link">Home</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/headphones" class="nav__link">headphones</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/speakers" class="nav__link">speakers</router-link>
              </li>
              <li class="nav__item">
                <router-link to="earphones" class="nav__link">earphones</router-link>
              </li>
            </ul>
            <img class="sitelogo"  alt="">
            <button class="button-cart">
              <svg width="23" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.411 13.195a.667.667 0 0 0-.673.66c0 .363.303.659.674.659h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.114 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 0 1 0 .66C0 .296.302 0 .674 0h4.043c.316 0 .59.215.658.517l.481 2.122h16.47c.212 0 .41.097.538.262.127.166.168.38.11.579l-2.695 9.236a.672.672 0 0 1-.648.478H7.41Zm1.214 2.638c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084Zm9.857 0c1.133 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084Zm.64-3.958 2.31-7.917H6.157l1.797 7.917h11.17ZM9.31 17.917a.69.69 0 0 0-.685-.695.69.69 0 0 0-.685.695.69.69 0 0 0 .685.694.69.69 0 0 0 .685-.694Zm9.172-.695a.69.69 0 0 1 .685.695.69.69 0 0 1-.685.694.69.69 0 0 1-.684-.694.69.69 0 0 1 .684-.695Z" fill="#fff"/></svg>
            </button>
            
          </div>
          
        </div>



        <div>
      <div v-if="showMenu" class="menu">
            <div class="menu__list">
                <div class="menu__item">
                    <img class="menu__img" width="80" height="104" src="../img/headphone-icon.svg" alt="">
                    <p class="menu__text">headphones</p>
                    <button class="button-shop">
                    <p class="button-shop__text">shop</p>
                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2"/></svg>
                    </button>
                </div>
                <div class="menu__item">
                    <img class="menu__img" width="80" height="104" src="../img/speaker-icon.svg" alt="">
                    <p class="menu__text">speakers</p>
                    <button class="button-shop">
                    <p class="button-shop__text">shop</p>
                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2"/></svg>
                    </button>
                </div>
                <div class="menu__item">
                    <img class="menu__img" width="80" height="104" src="../img/earphone-icon.svg" alt="">
                    <p class="menu__text">earphones</p>
                    <button class="button-shop">
                    <p class="button-shop__text">shop</p>
                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2"/></svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </header>
</template>
<script>

import Menu from './Menu.vue';

export default {
    components : {
      'app-menu': Menu,
    },
    props: {
      
    },
    data(){
        return{
          showMenu : false,
        }
    },

}
</script>
<style scoped>

  header {
    background-color: var(--color-black);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid #3b3b3b;
  }

  .nav__list {
    display: none;
  }

  .button-cart {
    border: none;
    flex: none;
    background-color: transparent;
  }

   .menu {
    position: absolute;
    z-index: 9998;
    top: 85px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .menu__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 85px 24px 35px;
    background-color: var(--color-white);
  }

  .menu__item {
    position: relative;
    width: 327px;
    height: 165px;
    background-color: var(--color-light);
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 10px;
    margin: auto 24px;
  }

  .menu__item:not(:last-child) {
    margin-bottom: 68px;
  }

  .menu__img {
    position: relative;
    top: -30%;
    filter: drop-shadow(1px 18px 28px var(--color-black));
  }

  .menu__text {
    margin-top: -30px;
    margin-bottom: 15px;
  }

  .button-shop {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
  
  @media only screen and (min-width:768px) {

    .nav {
      justify-content: start;
    }

    .button-sidebar {
      margin-right: 40px;
    }

    .button-cart {
      flex: 1;
      text-align: right;
    }

    .menu__list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-bottom: 68px;
      border-radius: 0 0 10px 10px;
    }

    .menu__item {
      width: 223px;
    }

    .menu__item:not(:last-child) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  @media only screen and (min-width:1100px) {
    .nav__list {
      display: flex;
      list-style: none;
    }
    .sitelogo {
      flex: 1;
    }
    .nav__item {
      margin-right: 34px;
    }

    .nav__link {
      font-size: 13px;
      color: var(--color-white);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-style: normal;
      font-weight: 700;
    }

    .nav__link:hover {
      color: var(--color-orange);
    }

    .button-sidebar__icon {
      display: none;
    }

    .sitelogo {
      order: -1;
    }

    .menu {
      display: none;
    }

    
  }
</style>
