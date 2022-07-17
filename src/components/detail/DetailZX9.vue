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
                  <div class="features-box">
                    <div class="features">
                      <h2 class="features__title">Features</h2>
                      <p class="features__text">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

                      <br class="features__space">  The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                    </div>
                    <div class="box">
                      <h2 class="box__title">In The Box</h2>
                      <div class="box__text-wrapper">
                        <p class="box__text"> <span class="box__amount">1x</span> Headphones Unit</p>
                        <p class="box__text"> <span class="box__amount">2x</span> Replacement Earcups</p>
                        <p class="box__text"> <span class="box__amount">1x</span> User Manual</p>
                        <p class="box__text"> <span class="box__amount">1x</span> 3.5mm 5m Audio Cable</p>
                        <p class="box__text"> <span class="box__amount">1x</span> Travel Bag</p>
                      </div>
                    </div>
                </div>
                <div class="product__photo-wrapper">
                  <div class="product__photo-first-second">
                    <div class="product__photo product__photo-first"></div>
                    <div class="product__photo product__photo-second"></div>
                  </div>
                  <div class="product__photo product__photo-third"></div>
                </div>
                <h3 class="shared-title">You May Also Like</h3>
                <div class="shared-wrapper"> 
                  <div class="shared">
                    <div class="shared__img shared__img-first"></div>
                    <h4 class="shared__product-name">ZX9 SPEAKER</h4>
                    <a href="" class="button">See product</a>
                  </div>
                  <div class="shared">
                    <div class="shared__img shared__img-second"></div>
                    <h4 class="shared__product-name">XX99 MARK I</h4>
                    <a href="" class="button">See product</a>
                  </div>
                  <div class="shared">
                    <div class="shared__img shared__img-third"></div>
                    <h4 class="shared__product-name">XX59</h4>
                    <a href="" class="button">See product</a>
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
import Menu from '../Menu.vue';
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import About from '../About.vue';
import Category from '../Category.vue';

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
          ],
          shared: [
              {name: 'ZX9 SPEAKER', img: 'zx9.jpg'},
              {name: 'ZX7 SPEAKER', img: 'zx7.jpg'},
              {name: 'ZX7 SPEAKER', img: 'zx7.jpg'},
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
  background: url('../../img/product-zx9-speaker/mobile/image-product.jpg')no-repeat center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px; 
  margin-bottom: 30px;
  border-radius: 10px;
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

.features-box {
  margin-bottom: 88px;
}
.features__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: left;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.features__text {
  opacity: .5;
  margin-bottom: 88px;
}

.box__title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
}



.box__text {
  opacity: .5;
}

.box__amount {
  color: var(--color-orange);
  margin-right: 24px;
  opacity: 1 !important;
}
.product__photo-wrapper {
  margin-bottom: 120px;
}

.product__photo {
  width: 100%;
  height: 175px;
  margin-bottom: 30px;
  border-radius: 10px;
}
.product__photo-first {
  background: url('../../img/product-zx9-speaker/mobile/image-gallery-1.jpg')no-repeat center;
  background-size: cover;
}
.product__photo-second {
  background: url('../../img/product-zx9-speaker/mobile/image-gallery-2.jpg')no-repeat center;
  background-size: cover;
}
.product__photo-third {
  background: url('../../img/product-zx9-speaker/mobile/image-gallery-3.jpg')no-repeat center;
  height: 368px;
  background-size: cover;
}

.shared {
  text-align: center;
}
.shared:not(:last-child) {
  margin-bottom: 56px;
}
.shared-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.shared__img {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-bottom: 32px;
}
.shared__img-first {
  background: url('../../img/shared/mobile/image-zx7-speaker.jpg')no-repeat center;
  background-size: contain;
}
.shared__img-second {
  background: url('../../img/shared/mobile/image-xx99-mark-one-headphones.jpg')no-repeat center;
  background-size: contain;
}
.shared__img-third {
  background: url('../../img/shared/mobile/image-xx59-headphones.jpg')no-repeat center;
  background-size: contain;
}
.shared__product-name {
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 1.7142857313156128px;
  text-align: center;
  text-transform: uppercase;
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
  width: 50%;
  align-items: start;
}
.product__img {
  background: url('../../img/product-zx9-speaker/tablet/image-product.jpg')no-repeat center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 500px;
}

.box__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.14px;
  text-align: left;
  margin-right: 100px;

}
.box {
  display: flex;
}
.product__photo-wrapper {
  display: flex;
}

.product__photo-first-second {
  margin-right: 30px;
}
.product__photo-first {
  background: url('../../img/product-zx9-speaker/tablet/image-gallery-1.jpg')no-repeat center;
  width: 274px;
  height: 175px;
  background-size: cover;
  margin-bottom: 17px;
}
.product__photo-second {
  background: url('../../img/product-zx9-speaker/tablet/image-gallery-2.jpg')no-repeat center;
  width: 274px;
  height: 175px;
  background-size: cover;
  margin: 0;
}
.product__photo-third {
  background: url('../../img/product-zx9-speaker/tablet/image-gallery-3.jpg')no-repeat center;
  width: 100%;
  height: 368px;
  background-size: cover;
}
.shared-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.1428571939468384px;
  text-align: center;
}

.shared-wrapper {
  display: flex;
  justify-content: center;
}
.shared:not(:last-child) {
  margin-right: 10px;
}
.shared__img {
  width: 250px;
  height: 320px;
}
.shared__img-first {
  background: url('../../img/shared/tablet/image-zx7-speaker.jpg')no-repeat center;
  background-size: contain;

}
.shared__img-second {
  background: url('../../img/shared/tablet/image-xx99-mark-one-headphones.jpg')no-repeat center;
  background-size: contain;
}
.shared__img-third {
  background: url('../../img/shared/tablet/image-xx59-headphones.jpg')no-repeat center;
  background-size: contain;
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
  align-items: center;
  margin: 0;
}
.product__img {
  background: url('../../img/product-zx9-speaker/desktop/image-product.jpg')no-repeat center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 560px;
  margin-right: 100px;
}

.product__content {
  width: 40% ;
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
.features-box {
  display: flex;
  justify-content: space-between;
}

.features {
  width: 65%;
}

.features__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.14px;
  text-align: left;

}

.box {
  flex-direction: column;
  justify-content: start;
}

.box__title {
  margin-bottom: 32px;
}

.product__photo-wrapper {
  margin-bottom: 160px;
}

.product__photo-first {
  background: url('../../img/product-zx9-speaker/desktop/image-gallery-1.jpg')no-repeat center;
  width: 480px;
  height: 175px;
  background-size: cover;
  margin-bottom: 17px;
}
.product__photo-second {
  background: url('../../img/product-zx9-speaker/desktop/image-gallery-2.jpg')no-repeat center;
  width: 480px;
  height: 175px;
  background-size: cover;
  margin: 0;
}
.product__photo-third {
  background: url('../../img/product-zx9-speaker/desktop/image-gallery-3.jpg')no-repeat center;
  width: 100%;
  height: 368px;
  background-size: cover;
}
.shared__img {
  width: 350px;
  height: 320px;
}

.shared:not(:last-child) {
  margin-right: 30px;
}
.shared__img-first {
  background: url('../../img/shared/desktop/image-zx7-speaker.jpg')no-repeat center;
  background-size: contain;

}
.shared__img-second {
  background: url('../../img/shared/desktop/image-xx99-mark-one-headphones.jpg')no-repeat center;
  background-size: contain;
}
.shared__img-third {
  background: url('../../img/shared/desktop/image-xx59-headphones.jpg')no-repeat center;
  background-size: contain;
}

}
</style>