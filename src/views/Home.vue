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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
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
        border-radius: 1.5rem;
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
