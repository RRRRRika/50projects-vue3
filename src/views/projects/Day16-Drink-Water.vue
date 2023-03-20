<script setup lang="ts">
import { ref } from 'vue';

const percentage = ref<number>(0);
const remain = ref<number>(2);
const cups = ref<HTMLDivElement | null>();
const remainBox = ref<HTMLDivElement | null>();
const water = ref<HTMLDivElement | null>();
const fill = (index: number) => {
    let cur = 0;
    const children = cups.value!.querySelectorAll('*');
    for (let i = 0; i < index; i++) {
        cur += 0.25;
        if (!children[i].classList.contains('full')) {
            children[i].classList.add('full');
        }
    }
    for (let i = index; i < 8; i++) {
        children[i].classList.remove('full');
    }
    remain.value = 2 - cur;
    percentage.value = Number(((2 - remain.value) / 2).toFixed(3));

    water.value!.style.height = `${percentage.value * 330}px`;
    remainBox.value!.style.height = `${330 - percentage.value * 330}px`;
}
</script>

<template>
    <div class="container">
        <h1>Drink Water</h1>
        <h3>Goal: 2 Liters</h3>

        <div class="cup">
            <div ref="remainBox" class="remained" id="remained">
                <span id="liters">{{ remain === 0 ? '' : `${remain}L` }}</span>
                <small v-if="remain !== 0">Remained</small>
            </div>

            <div ref="water" class="percentage" id="percentage">{{ percentage === 0 ? '' : `${percentage * 100}%` }}</div>
        </div>

        <p class="text">Select how many glasses of water that you have drank</p>

        <div ref="cups" class="cups">
            <div class="cup cup-small" v-for="index in 8" :key="index" @click="fill(index)">250 ml</div>
            <!-- <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div>
            <div class="cup cup-small">250 ml</div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    color: #fff;
    background-color: #3494e4;

    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    margin: 1rem 0 0;
}

h3 {
    font-weight: 400;
    margin: 1rem 0;
}

.cup {
    background-color: #fff;
    border: 4px solid #144fc6;
    color: #144fc6;
    border-radius: 0 0 40px 40px;
    height: 330px;
    width: 150px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &-small {
        height: 95px;
        width: 50px;
        border-radius: 0 0 15px 15px;
        background-color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 5px;
        transition: 0.3s ease;
    }
}

.full {
    background-color: #6ab3f8;
    color: #fff;
}

.cups {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 280px;
}

.remained {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50%;
    flex: 1;
    transition: 0.3s ease;
}

.remained span {
    font-size: 20px;
    font-weight: bold;
}

.remained small {
    font-size: 12px;
}

.percentage {
    background-color: #6ab3f8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    height: 0;
    transition: 0.3s ease;
}

.text {
    text-align: center;
    margin: 0 0 5px;
}
</style>
