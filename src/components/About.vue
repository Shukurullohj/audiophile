<template>
    <div>
        <section class="about">
            <div class="about__img"></div>
            <div class="about__content">
                <h2 class="about__title">Bringing you the <span class="orange-text">best</span>  audio gear</h2>
                <p class="about__text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    </div>
</template>
<script>

export default {

    data(){
        return{

        }
    },
    methods: {
      
    }
}
</script>
<style scoped>

    .about {
        margin-bottom: 100px;
    }

    .about__img {
        background: url('../img/home/mobile/image-best-gear.jpg') no-repeat center;
        background-size: cover;
        width: 100%;
        height: 350px;
        border-radius: 10px;
        margin-bottom: 40px;
    }

    .about__content {
        text-align: center;
    }

    .about__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 32px;
    }

    .about__text {
        opacity: .5;
    }
    .orange-text {
        color: var(--color-orange);
        
    }


    @media screen and (min-width: 768px){

        .about {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 200px;
        }

        .about__img {
            background: url('../img/home/desktop/image-best-gear.jpg') no-repeat center;
            background-size: cover;
            width: 540px;
            height: 588px;
            order: 2;
        }

        .about__content {
            width: 50%;
            padding: 0;
            order: 1;
            text-align: left;
            margin-right: 125px;
        }
        
    }
</style>
