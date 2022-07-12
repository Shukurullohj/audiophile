<template>
    <header>
        <div class="container">
          <div class="nav">
            <span @click="showMenu = !showMenu" class="button-sidebar">
              <svg class="button-sidebar__icon" width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
            </span>
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#" class="nav__link">Home</a>
              </li>
              <li class="nav__item">
                <a href="" class="nav__link">headphones</a>
              </li>
              <li class="nav__item">
                <a href="" class="nav__link">speakers</a>
              </li>
              <li class="nav__item">
                <a href="" class="nav__link">earphones</a>
              </li>
            </ul>
            <img class="sitelogo" src="../img/sitelogo.svg" alt="">
            <button class="button-cart">
              <svg width="23" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.411 13.195a.667.667 0 0 0-.673.66c0 .363.303.659.674.659h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.114 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 0 1 0 .66C0 .296.302 0 .674 0h4.043c.316 0 .59.215.658.517l.481 2.122h16.47c.212 0 .41.097.538.262.127.166.168.38.11.579l-2.695 9.236a.672.672 0 0 1-.648.478H7.41Zm1.214 2.638c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084Zm9.857 0c1.133 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084Zm.64-3.958 2.31-7.917H6.157l1.797 7.917h11.17ZM9.31 17.917a.69.69 0 0 0-.685-.695.69.69 0 0 0-.685.695.69.69 0 0 0 .685.694.69.69 0 0 0 .685-.694Zm9.172-.695a.69.69 0 0 1 .685.695.69.69 0 0 1-.685.694.69.69 0 0 1-.684-.694.69.69 0 0 1 .684-.695Z" fill="#fff"/></svg>
            </button>
            
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

    
  }
</style>
