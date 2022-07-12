<template>
    <div>
        <app-header></app-header>
          <div>
            <section class="product-wrapper">
              <div class="container">
              <a href="/" class="back-button">Go Back</a>
                <div  class="product">
                  <div class="product__img"></div>
                  <div class="product__content">
                    <h4 class="product__title">New product</h4>
                    <h2 class="product__product-name">ZX9 SPEAKER</h2>
                    <p class="product__text">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <p class="product__price">$ 4.500</p>
                    <div class="product__footer">
                    <div class="cart-amount">
                    <i>-</i><p>1</p><i>+</i>
                    </div>
                    <button class="button product__button">Add to Product</button>
                  </div>
                  </div>

                </div>
              <div>
                  
                </div>
                <app-category></app-category>
                <app-about></app-about>
              </div>
            </section>
          </div>
        
        <app-footer></app-footer>
    </div>
</template>

<script>
// Imports
import Menu from './Menu.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import About from './About.vue';
import Category from './Category.vue';

export default {
    components: {
        'app-menu': Menu,
        'app-header': Header,
        'app-footer': Footer,
        'app-category': Category,
        'app-about': About,
    },
    data () {
        return {
          headphones: [
            {name: 'ZX9 SPEAKER', text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.', img: 'zx9.jpg'},
            {name: 'ZX7 SPEAKER', text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.', img: 'zx7.jpg'},
          ]
        }
    },
    methods: {
      
    }
}
</script>

<style scoped>
.back-button {
  text-decoration: none;
  display: block;
  color: var(--color-black);
  opacity: .5;
  padding-top: 35px;
  padding-bottom: 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;

}
.product-wrapper {
  margin-bottom: 88px;
}
.headphones__title {
  padding: 32px;
  color: var(--color-white);
  background-color: var(--color-black);
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  margin-left: -28px;
  margin-right: -28px;
  margin-bottom: 64px;
}


.product {
    padding-bottom: 120px;
    text-align: left;
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    color: var(--color-black);
}

.product__img {
  background: url('../img/product-zx9-speaker/mobile/image-product.jpg');
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 50vh;  
  margin-bottom: 30px;
}

.product__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: .5;
    color: var(--color-orange);
    margin-bottom: 16px;
}
.product__product-name {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.product__text {
    opacity: .75;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 28px;
}
.product__price {
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
  margin-bottom: 30px;

}

.product__footer {
  display: flex
}
.cart-amount {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-light);
    padding: 15px;
    margin-right: 16px;
}
.cart-amount i {
  opacity: 0.5;
}
.cart-amount p {
  padding: 0 20px;
}
@media only screen and (min-width: 768px) {

.headphones__title {
  margin-left: -40px;
  margin-right: -40px;
}

.product {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.product__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  align-items: start;
}
.product__img {
  background: url('../img/product-zx9-speaker/tablet/image-product.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 280px;
}

}
@media screen and (min-width: 1100px) {

.headphones__title {
  margin-left: -165px;
  margin-right: -165px;
  margin-bottom: 160px;
  padding: 100px 0;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.5px
}
.headphones__content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
}
.headphones__img {
  width: 540px;
  height: 570px;
}
.product {
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 125px;
}
.product__title {
  text-align: left;
}
.product__product-name {
  text-align: left;
}
.product__button {
  margin-right: auto;
}

}
</style>