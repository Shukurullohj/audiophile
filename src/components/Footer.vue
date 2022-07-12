<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="footer__head">
                    <img class="footer__sitelogo" src="../img/sitelogo.svg" alt="sitelogo">
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
                </div>
                <p class="footer__text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <div class="footer__copyright-icons-wrapper">
                    <p class="footer__text">Copyright 2021. All Rights Reserved</p>
                    <ul class="icon__list">
                        <li class="icon__item">
                            <a href="facebook.com/shukurullohj" class="icon__link">
                                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0Z" fill="#fff"/></svg>
                            </a>
                        </li>
                        <li class="icon__item">
                            <a href="twitter.com/" class="icon__link">
                                <svg width="24" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557Z" fill="#fff"/></svg>
                            </a>
                        </li>
                        <li class="icon__item">
                            <a href="instagram.com/shukurullohj" class="icon__link">
                                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001Z" fill="#fff"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import Menu from './Menu.vue';

export default {
    components: {
        'app-menu': Menu,
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
footer{
    background: var(--color-dark);
}
.footer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 54px;
    padding-bottom: 38px;
}
.footer::before {
    position: absolute;
    content: '';
    top: 0;
    margin: auto;
    padding: 2px;
    width: 100px;
    background-color: var(--color-orange);
}
.footer__sitelogo {
    width: 143px;
    height: 25px;
    margin-bottom: 45px;
}
.nav__list {
    display: flex;
    flex-direction: column;
    padding: 0;
    text-align: center;
    list-style: none;
    margin-bottom: 48px;
}

.nav__item {
    margin-bottom: 16px;
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

.footer__text {
    color: var(--color-white);
    opacity: .5;
    margin-bottom: 48px;
    text-align: center;
}

.icon__list {
    padding: 0;
    display: flex;
    justify-content: center;
}

.icon__item:not(:last-child) {
    margin-right: 16px;
}

.icon__link {
    text-decoration: none;
    color: var(--color-white);
}
.icon__link svg path {
    fill: currentColor;
}
.icon__link:hover {
    color: var(--color-orange);
}

@media screen and (min-width: 768px ){

    .footer {
        text-align: left;
        justify-content: start;
        align-items: start;
    }
    .nav__list {
        display: flex;
        flex-direction: row;
    }    

    .nav__item:not(:last-child) {
        margin: 0;
        margin-right: 34px;
    }

    .footer__text {
        text-align: left;
    }

    .footer__copyright-icons-wrapper {
        display: flex;
        justify-content: space-between;
        flex-flow: nowrap;
        align-items: center;
        width: 100%;
    }

    .footer__copyright-icons-wrapper .footer__text {
        margin: 0;
    }

    .icon__list {
        justify-content: end;
    }
}
    @media screen and (min-width: 1100px ){
    .footer__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-flow: nowrap;
    }
    
    .nav__list {
        justify-content: end;
    }
    .footer__text {
        width: 50%;
    }
    .icon__list {
        position: absolute;
        bottom: 80px;
        right: 0;
    }        
}
</style>
