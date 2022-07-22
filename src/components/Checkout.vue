<template>
    <div>
        <div class="container">
            <a href="/" @click="$router.back()" class="back-button">Go Back</a>
            
            <div class="checkout">
                <form class="form" action="">
                    <h2 class="form-main-title">Checkout</h2>
                    <div class="form__list">
                        <div class="form__item">
                            <h5 class="form__title">Billing Details</h5>
                            <div class="form__flex">
                                <div>
                                    <label class="form__label" for="name">Name</label>
                                    <input name="name" class="form__input" type="text" placeholder="Alex Wrapper">
                                </div>
                                <div>
                                    <label class="form__label" for="email">Email Adress</label>
                                    <input name="email" class="form__input" type="email"
                                        placeholder="Alexwrapper@gmail.com">
                                </div>
                                <div>
                                    <label class="form__label" for="phone">Phone Number</label>
                                    <input name="phone" class="form__input" type="number" placeholder="+1 234 242 4242">
                                </div>
                            </div>
                        </div>
                        <div class="form__item">
                            <h5 class="form__title">Shipping Info</h5>
                            <div class="form__flex">
                                <div>
                                    <label class="form__label" for="adress">Your Adress</label>
                                    <input name="adress" class="form__input form__input-adress"
                                        placeholder="1137 Williams Avenue" type="number">
                                </div>
                                <div>
                                    <label class="form__label" for="zipcode">Zip Code</label>
                                    <input name="zipcode" class="form__input" placeholder="10123" type="text">
                                </div>
                                <div>
                                    <label class="form__label" for="city">City</label>
                                    <input name="city" class="form__input" placeholder="New York" type="text">
                                </div>
                                <div>
                                    <label class="form__label" for="country">Country</label>
                                    <input name="country" class="form__input" placeholder="United States" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="form__item">
                            <h5 class="form__title">Payment Details</h5>
                            <div class="form__payment-method">
                                <p class="form__label form__label-radio">Payment Method</p>
                                <div class="form-radio-wrapper">
                                    <label for="e-money" class="form__radio">
                                        <input class="form__radio__input" id="e-money" name="money" type="radio">
                                        <div class="form__radio__content">E-Money</div>
                                    </label>
                                    <label for="e" class="form__radio">
                                        <input class="form__radio__input" id="e" name="money" type="radio">
                                        <div class="form__radio__content">Cash on Delivery</div>
                                    </label>
                                </div>
                            </div>
                            <div class="form__flex">
                                <div>
                                    <label class="form__label" for="name">e-Money Number</label>
                                    <input name="name" class="form__input" placeholder="232321341" type="text">
                                </div>
                                <div>
                                    <label class="form__label" for="email">e-Money Pin</label>
                                    <input name="email" class="form__input" placeholder="6891" type="email">
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </form>
                <div class="summary">
                    <h4 class="summary__title">Summary</h4>
                    <div class="summary__header">
                        <img src="../assets/cart/image-zx7-speaker.jpg" width="64" height="64" alt="">
                        <div>
                            <p class="summary__product-name">XX59</p>
                            <p class="summary__price">$ 2.900</p>
                        </div>
                        <p class="summary__amount">X11</p>
                    </div>
                    <div class="summary__total">
                        <div class="summary__total-wrapper">
                            <p class="summary__total__text">Total</p>
                            <p class="summary__total__price">$2.9900</p>
                        </div>
                        <div class="summary__total-wrapper">
                            <p class="summary__total__text">Shipping</p>
                            <p class="summary__total__price">$ 50</p>
                        </div>
                        <div class="summary__total-wrapper">
                            <p class="summary__total__text">Vat (included)</p>
                            <p class="summary__total__price">$ 65.666</p>
                        </div>
                        <div class="summary__total-wrapper">
                            <p class="summary__total__text ">Grand Total</p>
                            <p class="summary__total__price summary__total__price-grand">$ 33. 0000</p>
                        </div>
                    </div>
                    <button class="button summary__button">Continue & Payment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Imports
    import Menu from './Menu.vue';
    import About from './About.vue';
    export default {
        components: {
            'app-menu': Menu,
            'app-about': About,
        },
        data() {
            return {
                categories: [{
                        "slug": 'zx7-speaker',
                        name: 'ZX9 SPEAKER',
                        text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
                        img: 'zx9.jpg'
                    },
                    {
                        "slug": 'zx9-speaker',
                        name: 'ZX7 SPEAKER',
                        text: 'The new XX99 Mark II categories is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                        img: 'zx7.jpg'
                    },
                ]
            }
        },
        methods: {}
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

    .form-main-title {
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.14px;
        text-transform: uppercase;
        margin-bottom: 32px;
    }

    .form__title {
        font-size: 13px;
        line-height: 25px;
        color: var(--color-orange);
        margin-bottom: 16px;
    }

    .form__label {
        display: inline-block;
        margin-bottom: 10px;
        font-weight: 700;
    }

    .form__input {
        display: block;
        width: 100%;
        padding: 18px 24px;
        background-color: transparent;
        border: 1px solid var(--color-light);
        border-radius: 8px;
        margin-bottom: 24px;
    }

    .form-radio-wrapper {
        margin-bottom: 24px;
    }

    .form__label-radio {
        margin-bottom: 0;
    }

    .form__radio {
        display: inline-block;
        width: 100%;
    }

    .form__radio:first-child {
        margin-right: 24px;
    }

    .form__radio__input {
        appearance: none;
    }

    .form__radio__content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 14px 24px;
        border: 1px solid var(--color-light);
        border-radius: 8px;
    }

    .form__radio__content::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 10px;
        border: 1px solid var(--color-light);
    }

    .form__radio__input:checked~.form__radio__content::before {
        content: "";
        background-color: var(--color-orange);
        padding: 5px;
    }


    .summary {
        margin-bottom: 120px;
    }

    .summary__title {
        font-size: 18px;
        letter-spacing: 1.3px;
        font-weight: 700;
        margin-bottom: 32px;
    }

    .summary__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
    }

    .summary__price {
        opacity: .5;
    }

    .summary__amount {
        opacity: .5;
    }

    .summary__total {
        margin-bottom: 32px;
    }

    .summary__total-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .summary__total__text {
        opacity: .5;
        text-transform: uppercase;
    }

    .summary__total__price {
        font-weight: 700;
    }

    .summary__total__price-grand {
        color: var(--color-orange);
    }

    .summary__button {
        display: block;
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        .form {
            background-color: var(--color-white);
            padding: 30px;
            margin-top: 40px;
            border-radius: 8px 8px 0 0;
        }

        .form__item:not(:last-child) {
            margin-bottom: 54px;
        }

        .form__flex {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            width: 100%;
        }

        .form__input {
            width: 300px;
            margin-bottom: 0;
        }

        .form__input-adress {
            width: 620px;
        }

        .form__label-radio {
            margin-top: 17px;
        }

        .form__radio__content {
            width: 330px;
        }

        .form-radio-wrapper {
            width: 49%;
        }

        .form__payment-method {
            display: flex;
            justify-content: space-between;
        }
        .summary {
            background-color: var(--color-white);
            padding: 30px;
            margin-bottom: 40px;
            border-radius: 0 0 8px 8px;
        }
    }

    @media screen and (min-width: 1100px) {
        .checkout {
            display: flex;
        }
        .form {
            width: 65%;
            border-radius: 8px;
            margin: 0;
            margin-bottom: 40px;
            margin-right: 40px;
        }
        .summary {
            width: 35%;
            margin: 0;
            height: 100%;
            border-radius: 8px;
        }
        
    }
</style>