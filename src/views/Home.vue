<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="container">
        <div class="title">Projects List</div>
        <div class="projects-box">
            <div class="item" @click="router.push('/Expanding-Cards')">
                <img src="../static/day1.png" alt="day1" class="item__img">
                <h3 class="item__label">Expanding Cards</h3>
            </div>
            <div class="item" @click="router.push('/Progress-Steps')">
                <img src="../static/day2.png" alt="day2" class="item__img">
                <h3 class="item__label">Progress Steps</h3>
            </div>
            <div class="item" @click="router.push('/Rotating-Nav-Ani')">
                <img src="../static/day3.png" alt="day3" class="item__img">
                <h3 class="item__label">Rotating Navigation Animation</h3>
            </div>
            <div class="item" @click="router.push('/Hidden-Search')">
                <img src="../static/day4.png" alt="day4" class="item__img">
                <h3 class="item__label">Hidden Search Widget</h3>
            </div>
            <div class="item" @click="router.push('/Blurry-Loading')">
                <img src="../static/day5.png" alt="day5" class="item__img">
                <h3 class="item__label">Blurry Loading</h3>
            </div>
            <div class="item" @click="router.push('/Scroll-Animation')">
                <img src="../static/day6.png" alt="day6" class="item__img">
                <h3 class="item__label">Scroll Animation</h3>
            </div>
            <div class="item" @click="router.push('/Split-Landing-Page')">
                <img src="../static/day7.png" alt="day7" class="item__img">
                <h3 class="item__label">Split Landing Page</h3>
            </div>
            <div class="item" @click="router.push('/Form-Wave')">
                <img src="../static/day8.png" alt="day8" class="item__img">
                <h3 class="item__label">Form Wave</h3>
            </div>
            <div class="item" @click="router.push('/Sound-Board')">
                <img src="../static/day9.png" alt="day9" class="item__img">
                <h3 class="item__label">Sound Board</h3>
            </div>
            <div class="item" @click="router.push('/Dad-Jokes')">
                <img src="../static/day10.png" alt="day10" class="item__img">
                <h3 class="item__label">Dad Jokes</h3>
            </div>
            <div class="item" @click="router.push('/Event-Keyboard')">
                <img src="../static/day11.png" alt="day11" class="item__img">
                <h3 class="item__label">Event Keyboard</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: min-content;
    background-image: linear-gradient(to right top, #051937, #004e78, #008993, #00c178, #b7ef39);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 5rem;
}

.projects-box {
    width: 100%;
    flex-grow: 1;
    padding: 5rem 5rem;

    display: grid;
    gap: 3rem;
    grid-template-rows: repeat(2, minmax(10rem, min-content));
    grid-template-columns: repeat(4, 1fr);
}

.item {

    &__img {
        width: 100%;
        border-radius: 1rem;
    }

    &__label {
        padding-top: 1rem;
        display: block;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
    }
}
</style>
