<template>
  <div>
    <div v-if="showMenu" class="menu">
      <div class="menu__list">
        <div class="menu__item">
          <img class="menu__img" width="80" height="104" src="../img/headphone-icon.svg" alt="">
          <p class="menu__text">headphones</p>
          <router-link to="/headphones" class="button-shop">
            <p class="button-shop__text">shop</p>
            <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2" /></svg>
          </router-link>
        </div>
        <div class="menu__item">
          <img class="menu__img" width="80" height="104" src="../img/speaker-icon.svg" alt="">
          <p class="menu__text">speakers</p>
          <router-link to="/speakers" class="button-shop">
            <p class="button-shop__text">shop</p>
            <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2" /></svg>
          </router-link>
        </div>
        <div class="menu__item">
          <img class="menu__img" width="80" height="104" src="../img/earphone-icon.svg" alt="">
          <p class="menu__text">earphones</p>
          <router-link to="/speakers" class="button-shop">
            <p class="button-shop__text">shop</p>
            <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.322 1 5 5-5 5" stroke="#D87D4A" stroke-width="2" /></svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
  }
</script>

<style>
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

  @media screen and (min-width:768px) {

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

  @media screen and (min-width:1100px) {
    .menu {
      display: none;
    }
  }
</style>