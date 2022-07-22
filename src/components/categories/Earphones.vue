<template>
    <div>
          <div>
            <section class="categories">
              <div class="container">
                <h2 class="categories__title">Earphones</h2>
                <div v-for="category in categories" :key="category.id"  class="categories__content">
                  <img class="categories__img" :src="require(`../../img/earphones/${category.img}`)" alt="">
                  <div  class="showcase">
                    <h4 class="showcase__title">New product</h4>
                    <h2 class="showcase__product-name">{{category.name}}</h2>
                    <p class="showcase__text">{{category.text}}</p>
                    <router-link :to="`/product/${category.slug}`">
                    <button class="button showcase__button">See product</button></router-link>
                  </div>
                </div>
                <app-category></app-category>
                <app-about></app-about>
              </div>
            </section>
          </div>
    </div>
</template>

<script>
// Imports
import Menu from '../Menu.vue';
import About from '../About.vue';
import Category from '../Category.vue';

export default {
    components: {
        'app-menu': Menu,
        'app-category': Category,
        'app-about': About,
    },
    data () {
        return {
          categories: [
            {"slug": 'yx1-earphones', name: 'YX1 EARPHONES', text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', img: 'yx1.jpg'},
          ]
        }
    },
    methods: {
      
    }
}
</script>

<style scoped>


.categories__title {
  padding: 32px;
  color: var(--color-white);
  background-color: var(--color-black);
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: 64px;
}

.categories__img{
  width: 100%;
  height: 320px;
  margin-bottom: 32px;
  border-radius: 10px;
}
.showcase {
    padding-bottom: 120px;
    text-align: center;
    margin: 0 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--color-black);
}

.showcase__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: .5;
    color: var(--color-orange);
    margin-bottom: 16px;
}
.showcase__product-name {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.showcase__text {
    opacity: .75;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 28px;
}

@media screen and (min-width: 768px) {

.categories__title {
  margin-left: -40px;
  margin-right: -40px;
}
}
@media screen and (min-width: 1100px) {

.categories__title {
  margin-left: -165px;
  margin-right: -165px;
  margin-bottom: 160px;
  padding: 100px 0;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.5px
}
.categories__content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
}
.categories__img {
  width: 540px;
  height: 570px;
}
.showcase {
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 125px;
}
.categories__content:nth-child(3) .categories__img {
  order: 1;
}
.categories__content:nth-child(3) .showcase {
  margin-left: 0;
  margin-right: 125px;
}
.showcase__title {
  text-align: left;
}
.showcase__product-name {
  text-align: left;
}
.showcase__button {
  margin-right: auto;
}

}
</style>