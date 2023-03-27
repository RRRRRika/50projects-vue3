<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="kinetic"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: rgb(51, 93, 128);

    display: flex;
    justify-content: center;
    align-items: center;
}

.kinetic {
    width: 80px;
    height: 80px;
    position: relative;

    &::after,
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        // background-color: #000;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        animation: rotateA 2s ease infinite .5s;
    }

    &::before {
        transform: rotate(90deg);
        border-right-color: #fff;
        animation: rotateB 2s ease infinite;
    }
}

@keyframes rotateA {

    0%,
    25% {
        transform: rotate(0);
    }

    50%,
    75% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotateB {

    0%,
    25% {
        transform: rotate(90deg);
    }

    50%,
    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(450deg);
    }
}
</style>
