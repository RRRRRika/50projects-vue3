<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);
const bg = ref<HTMLElement | null>();
const countText = ref<HTMLDivElement | null>();

// 将一个数字放缩到指定范围，例如，将 0 - 100 放缩到 0 - 30
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const interval = setInterval(blurring, 30);

function blurring() {
    count.value++;
    if (count.value > 99) {
        clearInterval(interval);
    }

    bg.value!.style.filter = `blur(${scale(count.value, 0, 100, 25, 0)}px)`;
    countText.value!.style.opacity = `${scale(count.value, 0, 100, 1, 0)}`;
}
</script>

<template>
    <section class="bg" ref="bg"></section>
    <div class="loading-text" ref="countText">{{ count }}%</div>
</template>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background-image: url('../../static/day5-bg.jpg');
    background-size: cover;     // !! 背景图片重要设置  !!

    position: relative;
}
.loading-text {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;

    position: absolute;
    top: 48%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>
