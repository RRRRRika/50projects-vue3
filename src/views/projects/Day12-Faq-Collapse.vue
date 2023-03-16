<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    const faqs = document.getElementsByClassName('faq') as HTMLCollectionOf<HTMLDivElement>;
    const toggles = document.getElementsByClassName('faq-toggle') as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < toggles.length; i++) {
        toggles[i]?.addEventListener('click', () => {
            faqs[i].classList.contains('faq-active') ? faqs[i].classList.remove('faq-active') : faqs[i].classList.add('faq-active');
        })
    }
})
</script>

<template>
    <div class="container">
        <h1>Frequently Asked Questions</h1>
        <div class="faq-box">
            <div class="faq faq-active">
                <h3 class="faq-title">
                    Why shouldn't we trust atoms?
                </h3>
                <p class="faq-text">
                    They make up everything
                </p>
                <button class="faq-toggle">
                    <i class="fi fi-br-angle-small-down"></i>
                    <i class="fi fi-br-angle-small-up"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    What do you call someone with no body and no nose?
                </h3>
                <p class="faq-text">
                    Nobody knows.
                </p>
                <button class="faq-toggle">
                    <i class="fi fi-br-angle-small-down"></i>
                    <i class="fi fi-br-angle-small-up"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    What's the object-oriented way to become wealthy?
                </h3>
                <p class="faq-text">
                    Inheritance.
                </p>
                <button class="faq-toggle">
                    <i class="fi fi-br-angle-small-down"></i>
                    <i class="fi fi-br-angle-small-up"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    How many tickles does it take to tickle an octopus?
                </h3>
                <p class="faq-text">
                    Ten-tickles!
                </p>
                <button class="faq-toggle">
                    <i class="fi fi-br-angle-small-down"></i>
                    <i class="fi fi-br-angle-small-up"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    What is: 1 + 1?
                </h3>
                <p class="faq-text">
                    Depends on who are you asking.
                </p>
                <button class="faq-toggle">
                    <i class="fi fi-br-angle-small-down"></i>
                    <i class="fi fi-br-angle-small-up"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../static/icon/css/uicons-bold-rounded.css';

.container {
    width: 100vw;
    min-height: 100vh;
    background-color: #f0f0f0;
}

h1 {
    text-align: center;
    padding: 4rem;
}

.faq-box {
    max-width: 60rem;
    margin: 0 auto;
}

.faq {
    background-color: transparent;
    border: 1px solid #9fa4a8;
    border-radius: 1rem;
    margin: 2rem 0;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    transition: all .3s ease;

    &-title {
        margin: 0 35px 0 0;
    }

    &-text {
        display: none;
        margin: 30px 0 0;
    }

    &-toggle {
        border: none;
        background-color: transparent;
        border-radius: 50%;
        font-size: 16px;

        position: absolute;
        top: 3rem;
        right: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-active {
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);

        // &::before,
        // &::after {
        //     content: '\f075';
        //     color: #2ecc71;
        //     font-family: 'Font Awesome 5 Free';
        //     font-size: 7rem;
        //     position: absolute;
        //     opacity: 0.2;
        //     top: 20px;
        //     left: 20px;
        //     z-index: 0;
        // }

        & .faq-text {
            display: block;
        }

        & .fi-br-angle-small-down {
            display: none;
        }

        & .fi-br-angle-small-up {
            display: block;
        }
    }
}

.fi-br-angle-small-up {
    display: none;
}
</style>
