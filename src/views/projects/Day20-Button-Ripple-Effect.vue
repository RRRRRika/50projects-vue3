<script setup lang="ts">
import { ref } from 'vue';

const btn = ref<HTMLButtonElement | null>();
const onClick = (payload: MouseEvent) => {
    const x = payload.clientX;
    const y = payload.clientY;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = x + 'px';
    circle.style.left = y + 'px';

    btn.value?.appendChild(circle);

    // setTimeout(() => circle.remove(), 500);
}
</script>

<template>
    <div class="container">
        <div ref="btn" class="button" @click="onClick">
            Click Me
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
