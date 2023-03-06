<script setup lang="ts">
import { ref } from 'vue';

let progress = 5;
const prevBtn = ref<HTMLButtonElement | null>();
const nextBtn = ref<HTMLButtonElement | null>();
const progressLine = ref<HTMLDivElement | null>();
const numbers = document.getElementsByClassName('number') as HTMLCollectionOf<HTMLDivElement>;

const setProgress = (x: number) => {
    progress += x;
    progressLine.value!.style.width = `${progress}%`;
    if (x > 0) {
        numbers[Math.floor(progress / 30)].classList.add('active');
    } else {
        numbers[Math.floor(progress / 30) + 1].classList.remove('active');
    }
};
const prev = () => {
    setProgress(-30);
    nextBtn.value!.disabled = false;
    if (progress === 5) {
        prevBtn.value!.disabled = true;
    }
};
const next = () => {
    setProgress(30);
    prevBtn.value!.disabled = false;
    if (progress === 95) {
        nextBtn.value!.disabled = true;
    }
};
</script>

<template>
    <div class="container">
        <div class="step-box">
            <div class="progress" ref="progressLine"></div>
            <div class="number active">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
        </div>
        <div class="btn-box">
            <button class="btn" ref="prevBtn" @click="prev" disabled>prev</button>
            <button class="btn" ref="nextBtn" @click="next">next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #eee;
}
.btn-box {
    width: 30%;
    padding: 2rem;
    margin-top: 2rem;

    display: flex;
    justify-content: space-around;
}
.btn {
    width: 30%;
    border: none;
    padding: 1rem;
    background-color: rgb(111, 176, 229);

    color: #fff;
    font-size: 2rem;
    font-family: sans-serif;
    border-radius: 5px;

    &:disabled {
        background-color: #bbb;
    }
}
.step-box {
    width: 30%;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 4px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
.progress {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 4px;
    background-color: steelblue;

    transition: all .4s ease;
}
.number {
    font-size: 2.5rem;
    height: 4rem;
    width: 4rem;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}
.active {
    border: .3rem solid rgb(111, 176, 229);
    transition: all .1s .2s;
}

@media screen and (max-width: 768px) {
    .step-box {
        width: 50%;
    }
    .btn-box {
        width: 50%;
    }
}

@media screen and (max-width: 500px) {
    .step-box {
        width: 80%;
    }
    .btn-box {
        width: 80%;
    }
}
</style>
