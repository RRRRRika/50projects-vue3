<script setup lang="ts">
import { ref } from 'vue';

const show = ref<boolean>(false);
const position = ref<any>();
const times = ref<number>(0);

const onClick = (payload: MouseEvent) => {
    times.value++;
    createHeart(payload);
}

const createHeart = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    const offsetX = (event.target as HTMLElement).offsetLeft;
    const offsetY = (event.target as HTMLElement).offsetTop;

    // console.log(x, offsetX, y, offsetY);
    const innerX = x - offsetX;
    const innerY = y - offsetY;

    // console.log(innerX, innerY);
    position.value = { top: `${innerY}px`, left: `${innerX}px` };
    show.value = true;

    setTimeout(() => show.value = false, 800);
}
</script>

<template>
    <div class="container">
        <h1 class="title">Double click on the image to <i class="fi fi-br-heart" style="color: red;"></i> it</h1>
        <h1 class="info" :style="times === 0 ? 'opacity: 0' : 'opacity: 1'"><small class="info__number">{{ times }}</small>
            hearts !</h1>
        <div ref="screen" class="screen" @dblclick="onClick">
            <i class="fi fi-br-heart inner-heart" :style="position" v-show="show"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('../../static/icon/css/uicons-bold-rounded.css');

.container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    margin: 3rem 0;
    margin-bottom: 1rem;
}

.info {
    margin-bottom: 3rem;

    &__number {
        font-size: 1.8rem;
        color: orangered;
    }
}

.screen {
    width: 32rem;
    height: 50rem;
    background-image: url('../../static/day7-xz.png');
    background-size: cover;
    background-position: 60% 0%;
    margin: 0 2rem;
    border: 2px solid #000;
    position: relative;
}

.inner-heart {
    color: red;
    position: absolute;
    animation: grow 0.6s linear;
    transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
    to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
    }
}
</style>