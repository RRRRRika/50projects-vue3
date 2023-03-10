<script setup lang="ts">
import { onMounted } from 'vue';

const comein = (el: Element) => {
    el.classList.add('show');
}
const comeout = (el: Element) => {
    el.classList.remove('show');
}
onMounted(() => {
    const boxes = document.querySelectorAll('.box');
    const winTop = window.innerHeight * 4 / 5;
    const scroll = () => {
        boxes.forEach(box => {
            const top = box.getBoundingClientRect().top;
            console.log(winTop, top)
            if (top < winTop) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }
    scroll();   // 手动调用一次
    window.addEventListener('scroll', scroll);
})
</script>

<template>
    <div class="container">
        <h1>Scroll Down!</h1>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: bisque;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    margin-top: 2rem;
}

.box {
    width: 40rem;
    height: 20rem;
    background-color: cornflowerblue;
    margin: 2rem 0;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, .3);

    transition: all .4s ease;

    &:nth-child(even) {
        transform: translateX(-400%);
    }

    &:nth-child(odd) {
        transform: translateX(400%);
    }
}

.show {
    transform: translateX(0) !important;
}
</style>
