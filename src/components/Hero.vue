<template>
    <div>
        <section class="showcase-wrapper">
            <div class="showcase">
                <h4 class="showcase__title">New product</h4>
                <h2 class="showcase__product-name">XX99 mark ii Headphones</h2>
                <p class="showcase__text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <router-link to="/product/xx99-mark-two-headphones"><button class="button">See product</button></router-link>
            </div>
        </section>
        <div class="container">
            <app-menu></app-menu>
            <section class="showcase-wrapper--zx9">
                <div class="showcase showcase--zx9">
                    <div class="showcase__img-wrapper">
                        <img class="showcase__img" src="../img/home/desktop/image-speaker-zx9.png" alt="">
                        <img class="showcase__pattern" src="../img/home/desktop/pattern-circles.svg" alt="">
                    </div>
                    <div class="showcase__content">
                        <h2 class="showcase__product-name">XX99 mark ii Headphones</h2>
                        <p class="showcase__text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <router-link to="/product/xx99-mark-two-headphones"><button class="button button--zx9">See product</button></router-link>
                    </div>
                </div>
            </section>
            <section class="showcase-wrapper--zx7">
                <div class="showcase showcase__content showcase--zx7">
                    <h2 class="showcase__product-name showcase__product-name--zx7">ZX7 Speaker </h2>
                    <router-link to="/product/zx7-speaker"><button class="button button--zx7">See product</button></router-link>
                </div>
            </section>
            <section class="showcase-wrapper--yx1">
                <img class="yx1-img" src="../img/home/mobile/image-earphones-yx1.jpg" alt="">
                <div class="showcase--zx7 showcase--yx1">
                    <h2 class="showcase__product-name--zx7 showcase__product-name--yx1">yx1 Speaker </h2>
                    <router-link to="/product/yx1-earphones"><button class="button button--zx7">See product</button></router-link>
                </div>
            </section>
            <section class="shared">
                <div class="shared__img"></div>
                <div class="shared__content">
                    <h2 class="shared__title">Bringing you the <span class="orange-text">best</span> audio gear</h2>
                    <p class="shared__text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience
                        a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu.vue';
    export default {
        components: {
            'app-menu': Menu,
        },
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .showcase-wrapper {
        background: url('../img/home/mobile/image-header.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        padding: 108px 0;
    }
    .showcase {
        text-align: center;
        margin: 0 24px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .showcase__title {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 10px;
        text-transform: uppercase;
        opacity: .5;
        color: var(--color-white);
        margin-bottom: 16px;
    }
    .showcase__product-name {
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: var(--color-white);
        text-transform: uppercase;
        margin-bottom: 24px;
    }
    .showcase__text {
        color: var(--color-white);
        opacity: .75;
        font-weight: 500;
        font-style: normal;
        margin-bottom: 28px;
    }
    .menu {
        position: relative;
        top: 0;
        z-index: 2;
        height: 100%;
    }
    .menu__list {
        padding-bottom: 100px;
    }
    .showcase-wrapper--zx9 {
        background-color: var(--color-orange);
        margin: 24px auto;
        padding: 55px 0;
        border-radius: 10px;
    }
    .showcase__img-wrapper {
        position: relative;
    }
    .showcase__pattern {
        position: absolute;
        width: 487px;
        top: -62%;
        left: -86%;
        z-index: 1;
    }
    .showcase__content {
        position: relative;
        z-index: 999;
    }
    .button--zx9 {
        background-color: var(--color-black);
    }
    .showcase__img {
        margin-bottom: 20px;
        width: 175px;
        height: 205px;
    }
    .showcase-wrapper--zx7 {
        background: url('../img/home/mobile/image-speaker-zx7.jpg') no-repeat center;
        background-size: cover;
        padding-top: 148px;
        padding-bottom: 100px;
        border-radius: 10px;
        margin-bottom: 24px;
    }
    .showcase--zx7 {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
    .showcase__product-name--zx7 {
        color: var(--color-black);
        font-size: 28px !important;
        line-height: 38px;
        letter-spacing: 2px;
        margin-bottom: 32px;
        text-transform: uppercase;
    }
    .button--zx7 {
        font-family: 'Manrope', Arial, serif;
        color: var(--color-black);
        background-color: transparent;
        font-size: 13px;
        line-height: 17px;
        border: 1px solid var(--color-black);
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .showcase-wrapper--yx1 {
        margin-bottom: 120px;
    }
    .showcase--yx1 {
        padding: 41px 22px;
        background-color: var(--color-light);
        width: 100%;
        border-radius: 10px;
    }
    .yx1-img {
        border-radius: 10px;
        width: 100%;
        margin-bottom: 24px;
    }
    .shared {
        margin-bottom: 100px;
    }
    .shared__img {
        background: url('../img/home/mobile/image-best-gear.jpg') no-repeat center;
        background-size: cover;
        width: 100%;
        height: 350px;
        border-radius: 10px;
        margin-bottom: 40px;
    }
    .shared__content {
        text-align: center;
    }
    .shared__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 32px;
    }
    .shared__text {
        opacity: .5;
    }
    .orange-text {
        color: var(--color-orange);
    }
    @media screen and (min-width: 768px) {
        .showcase-wrapper {
            background: url('../img/home/tablet/image-header.jpg') no-repeat center;
            background-size: cover;
            background-color: #1c1c1c;
            padding: 126px 180px 167px;
            position: relative;
            z-index: 2;
        }
        .showcase--zx9 {
            background-position: center -350px;
            background-size: 944px 944px;
        }
        .showcase__product-name {
            font-size: 51px;
            line-height: 56px;
        }
        .showcase {
            margin: 0 40px;
        }
        .showcase-wrapper--zx9 {
            position: relative;
            width: 100%;
        }
        .showcase-wrapper--zx7 {
            width: 100%;
            background: url('../img/home/tablet/image-speaker-zx7.jpg') no-repeat center;
            background-size: cover;
            border-radius: 10px;
        }
        .showcase-wrapper--yx1 {
            display: flex;
            justify-content: space-between;
        }
        .showcase--yx1 {
            width: 49%;
        }
        .yx1-img {
            width: 49%;
            height: 300px;
            object-fit: cover;
            margin: 0;
        }
        .shared__img {
            background: url('../img/home/tablet/image-best-gear.jpg') no-repeat center;
            background-size: cover;
            width: 100%;
        }
        .shared__content {
            padding: 0 100px;
        }
        .shared__title {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 1.3px;
        }
    }
    @media screen and (min-width: 1100px) {
        .menu {
            display: block;
        }
        .showcase-wrapper {
            background: url('../img/home/desktop/image-hero.jpg') center no-repeat;
            background-size: cover;
            padding-left: 165px;
        }
        .showcase {
            margin: 0;
            text-align: left;
            display: flex;
            align-items: start;
            width: 350px;
        }
        .showcase__title {
            text-align: left;
        }
        .showcase-wrapper--zx9 {
            display: flex;
            justify-content: end;
        }
        .showcase--zx9 {
            margin: 130px 80px;
            text-align: left;
        }
        .showcase--zx7 {
            margin-left: 100px;
        }
        .showcase--yx1 {
            padding: 70px;
        }
        .showcase__img-wrapper {
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .showcase__pattern {
            z-index: 1;
            width: 944px;
            height: 944px;
            left: -30%;
            top: -30%;
        }
        .showcase__img {
            width: 410px;
            height: 490px;
            margin-left: 130px;
            margin-bottom: -10px;
            position: relative;
            z-index: 5;
        }
        .showcase-wrapper--zx7 {
            background: url('../img/home/desktop/image-speaker-zx7.jpg') no-repeat;
            background-size: cover;
        }
        .shared {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 200px;
        }
        .shared__img {
            background: url('../img/home/desktop/image-best-gear.jpg') no-repeat center;
            background-size: cover;
            width: 540px;
            height: 588px;
            order: 2;
        }
        .shared__content {
            width: 50%;
            padding: 0;
            order: 1;
            text-align: left;
            margin-right: 125px;
        }
    }
</style>
