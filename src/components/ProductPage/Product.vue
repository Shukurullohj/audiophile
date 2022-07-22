<template>
  <div>
    <div>
      <section class="product-wrapper">
        <div class="container">
          <a href="/" @click="$router.back()" class="back-button">Go Back</a>
          <div class="product">
            <img :src="editSrc" :alt="currentProduct.name" class="product__img" />
            <div class="product__content">
              <h4 class="product__title">New product</h4>
              <h2 class="product__product-name">{{ currentProduct.name }}</h2>
              <p class="product__text">{{ currentProduct.description }}</p>
              <p class="product__price">$ 3.500</p>
              <div class="product__footer">
                <div class="cart-amount"><i class="inc-dec-button" @click="decreaseTotal">-</i>
                  <p >{{total}}</p><i class="inc-dec-button" @click="increaseTotal">+</i>
                </div>
                <button class="button product__button" @click="addToCartHandler">Add to Product</button>
              </div>
            </div>
          </div>
          <div class="features-box">
            <div class="features">
              <h2 class="features__title">Features</h2>
              <p class="features__text" v-for="paragraph in editedText" :key="paragraph">{{paragraph}}</p>
            </div>
            <div class="box">
              <h2 class="box__title">In The Box</h2>
              <ul class="box__list">
                <li class="box__item" v-for="item in currentProduct.includes" :key="item.item">
                  <p class="box__text"><span class="box__amount">{{item.quantity }}</span>{{item.item}}</p>
                </li>
              </ul>
            </div>
          </div>
          <section class="gallery">
            <div class="gallery__left">
              <img :src="gallerySrc('first')" :alt="`${currentProduct.name} presentation image`" class="gallery__img gallery__left-img gallery__left__first" />
              <img :src="gallerySrc('second')" :alt="`${currentProduct.name} presentation image`" class="gallery__img gallery__left-img gallery__left__second" />
            </div>
            <div class="gallery__right">
              <img class="gallery__img gallery__third" :src="gallerySrc('third')" :alt="`${currentProduct.name} presentation image`" />
            </div>
          </section>
          <h3 class="shared-title">You May Also Like</h3>
          <div class="shared-wrapper">
            <div class="shared">
              <img class="shared__img" src="../../img/shared/mobile/image-zx9-speaker.jpg" alt="">
              
              <h4 class="shared__product-name">ZX9 SPEAKER</h4><a href="" class="button">See product</a>
            </div>
            <div class="shared">
              <img class="shared__img" src="../../img/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="">
              <h4 class="shared__product-name">XX99 MARK I</h4><a href="" class="button">See product</a>
            </div>
            <div class="shared">
              <img class="shared__img" src="../../img/shared/mobile/image-xx59-headphones.jpg" alt="">
              <h4 class="shared__product-name">XX59</h4><a href="" class="button">See product</a>
            </div>
          </div>
          <div></div>
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
  import data from "../../data.json";
  export default {
    name: 'Product',
    components: {
      'app-menu': Menu,
      'app-category': Category,
      'app-about': About,
    },
    data() {
      return {
        total : 1,
        products: data,
        windowSize: null,
        headphones: [{
            name: 'ZX9 SPEAKER',
            text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            img: 'zx9.jpg'
          },
          {
            name: 'ZX7 SPEAKER',
            text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            img: 'zx7.jpg'
          },
        ],
        shared: [{
            name: 'ZX9 SPEAKER',
            img: 'zx9.jpg'
          },
          {
            name: 'ZX7 SPEAKER',
            img: 'zx7.jpg'
          },
          {
            name: 'ZX7 SPEAKER',
            img: 'zx7.jpg'
          },
        ],
      }
    },
    computed: {
      currentProduct() {
        return this.products
          .slice()
          .find((product) => product.slug === this.$route.params.product);
      },
      editSrc() {
        if (this.windowSize === "mobile") {
          return require(`../../${this.currentProduct.image.mobile.slice(2)}`);
        } else if (this.windowSize === "tablet") {
          return require(`../../${this.currentProduct.image.tablet.slice(2)}`);
        } else {
          return require(`../../${this.currentProduct.image.desktop.slice(2)}`);
        }
      },
      editedText() {
        const paragraphs = [];
        let myString = this.currentProduct.features;
        while (myString.includes("\n")) {
          let index = myString.indexOf("\n");
          paragraphs.push(myString.slice(0, index));
          myString = myString.slice(index + 1);
        }
        if (paragraphs.length > 0) {
          paragraphs.push(myString);
        } else {
          paragraphs.push(this.currentProduct.features);
        }
        return paragraphs;
      },
    },
    methods: {
      setWindowSize() {
        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
          this.windowSize = "mobile";
        } else if (windowWidth < 1205) {
          this.windowSize = "tablet";
        } else {
          this.windowSize = "desktop";
        }
      },
      increaseTotal() {
        this.total++;
      },
      decreaseTotal() {
        if (this.total > 1) {
          this.total--;
        }
      },
      resetTotal() {
        this.total = 1;
        this.justAdded = false;
      },
      gallerySrc(index) {
        if (index === "first") {
          if (this.windowSize === "mobile") {
            return require(`../../${this.currentProduct.gallery.first.mobile.slice(
              2
            )}`);
          } else if (this.windowSize === "tablet") {
            return require(`../../${this.currentProduct.gallery.first.tablet.slice(
              2
            )}`);
          } else {
            return require(`../../${this.currentProduct.gallery.first.desktop.slice(
              2
            )}`);
          }
        } else if (index === "second") {
          if (this.windowSize === "mobile") {
            return require(`../../${this.currentProduct.gallery.second.mobile.slice(
              2
            )}`);
          } else if (this.windowSize === "tablet") {
            return require(`../../${this.currentProduct.gallery.second.tablet.slice(
              2
            )}`);
          } else {
            return require(`../../${this.currentProduct.gallery.second.desktop.slice(
              2
            )}`);
          }
        } else {
          if (this.windowSize === "mobile") {
            return require(`../../${this.currentProduct.gallery.third.mobile.slice(
              2
            )}`);
          } else if (this.windowSize === "tablet") {
            return require(`../../${this.currentProduct.gallery.third.tablet.slice(
              2
            )}`);
          } else {
            return require(`../../${this.currentProduct.gallery.third.desktop.slice(
              2
            )}`);
          }
        }
      },
    },
    created() {
      this.setWindowSize();
      window.addEventListener("resize", this.setWindowSize);
      window.scrollTo(0, 0);
    },
    props: {},
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
  .product {
    padding-bottom: 120px;
    text-align: left;
    display: flex;
    flex-direction: column;
    color: var(--color-black);
    width: 100%;
  }
  .product__img {
    width: 100%;
    height: 400px;
    border-radius: 0.8rem;
    object-fit: cover;
    object-position: center;
    margin-bottom: 32px;
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
  .inc-dec-button {
    font-style: normal;
    cursor: pointer;
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
  .box__list {
    padding: 0;
  }
  .box__item {
    list-style: none;
  }
  .box__text {
    opacity: .5;
  }
  .box__amount {
    color: var(--color-orange);
    margin-right: 24px;
    opacity: 1 !important;
  }
  .gallery-wrapper {
    margin-bottom: 120px;
  }

  .gallery__img {
    width: 100%;
    border-radius: 10px;
    margin: 10px 0;
    object-fit: cover;
    object-position: center;
  }
  .gallery__left-img {
    height: 170px;
  }
  .gallery-first {
    margin-top: 0 !important;
  }
  .gallery__third {
    margin-bottom: 0 !important;
    height: 360px;
    width: 100%;
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
      height: 480px;
      width: 280px;
      margin-right: 70px;
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
    .gallery {
      display: flex;
    }
    .gallery-img {
      margin: 0;
    }
    .gallery__left {
      width: 270px;
    }
    .gallery__third {
      width: 390px;
      margin-left: 18px;
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
  }
  @media screen and (min-width: 1100px) {
    .product {
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
    .product__img {
      width: 540px;
      height: 560px;
      margin-right: 125px;
    }
    .product__content {
      width: 60%;
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
    .gallery__left {
      width: 450px;
    }
    .gallery__left-img {
      height: 280px;
    }
    .gallery__first {
      margin-bottom: 32px;
    }
    .gallery__third {
      width: 640px;
      height: 590px;
      margin-left: 30px;
    }
    .shared__img {
      width: 350px;
      height: 320px;
    }
    .shared:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>