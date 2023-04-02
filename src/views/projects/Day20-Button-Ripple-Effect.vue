<script setup lang="ts">
import { ref } from 'vue';

const btn = ref<HTMLButtonElement | null>();
const show = ref<boolean>(false);
const style = ref<any>();
const onClick = (payload: MouseEvent) => {
    const x = payload.pageX;
    const y = payload.pageY;

    const offsetX = (payload.target as HTMLElement).offsetLeft;
    const offsetY = (payload.target as HTMLElement).offsetTop;

    style.value = { top: `${y - offsetY}px`, left: `${x - offsetX}px` };
    show.value = true;
    setTimeout(() => show.value = false, 500);
}
</script>

<template>
    <div class="container">
        <div ref="btn" class="button" @click="onClick">
            Click Me
            <span class="circle" :style="style" v-show="show"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #2a2a2a;

    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    background-color: rebeccapurple;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 300;
    padding: 2rem 3rem;
    letter-spacing: 2px;
    outline: none;
    user-select: none;
    position: relative;
    overflow: hidden;

    &:focus {
        outline: none;
    }
}

.circle {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale .5s ease-out;
}

@keyframes scale {
    to {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}
</style>
