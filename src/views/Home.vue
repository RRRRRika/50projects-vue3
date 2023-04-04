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
            <div class="item" @click="router.push('/Faq-Collapse')">
                <img src="../static/day12.png" alt="day12" class="item__img">
                <h3 class="item__label">Faq Collapse</h3>
            </div>
            <div class="item" @click="router.push('/Random-Choice-Picker')">
                <img src="../static/day13.png" alt="day13" class="item__img">
                <h3 class="item__label">Random Choice Picker</h3>
            </div>
            <div class="item" @click="router.push('/Animated-Navigation')">
                <img src="../static/day14.png" alt="day14" class="item__img">
                <h3 class="item__label">Animated Navigation</h3>
            </div>
            <div class="item" @click="router.push('/Increasing-Counter')">
                <img src="../static/day15.png" alt="day15" class="item__img">
                <h3 class="item__label">Increasing Counter</h3>
            </div>
            <div class="item" @click="router.push('/Drink-Water')">
                <img src="../static/day16.png" alt="day16" class="item__img">
                <h3 class="item__label">Drink Water</h3>
            </div>
            <div class="item" @click="router.push('/Movie-App')">
                <img src="../static/day17.png" alt="day17" class="item__img">
                <h3 class="item__label">Movie App</h3>
            </div>
            <div class="item" @click="router.push('/Background-Slider')">
                <img src="../static/day18.png" alt="day18" class="item__img">
                <h3 class="item__label">Background-Slider</h3>
            </div>
            <div class="item" @click="router.push('/Theme-Clock')">
                <img src="../static/day19.png" alt="day19" class="item__img">
                <h3 class="item__label">Theme Clock</h3>
            </div>
            <div class="item" @click="router.push('/Button-Ripple-Effect')">
                <img src="../static/day20.png" alt="day20" class="item__img">
                <h3 class="item__label">Button Ripple Effect</h3>
            </div>
            <div class="item" @click="router.push('/Drag-N-Drop')">
                <img src="../static/day21.png" alt="day21" class="item__img">
                <h3 class="item__label">Drag N Drop</h3>
            </div>
            <div class="item" @click="router.push('/Drawing-App')">
                <img src="../static/day22.png" alt="day22" class="item__img">
                <h3 class="item__label">Drawing App</h3>
            </div>
            <div class="item" @click="router.push('/Kinetic-Loader')">
                <img src="../static/day23.png" alt="day23" class="item__img">
                <h3 class="item__label">Kinetic Loader</h3>
            </div>
            <div class="item" @click="router.push('/Skeleton-Loading')">
                <img src="../static/day24.png" alt="day24" class="item__img">
                <h3 class="item__label">Skeleton Loading</h3>
            </div>
            <div class="item" @click="router.push('/Sticky-Navigation')">
                <img src="../static/day25.png" alt="day25" class="item__img">
                <h3 class="item__label">Sticky Navigation</h3>
            </div>
            <div class="item" @click="router.push('/Double-Verticle-Slider')">
                <img src="../static/day26.png" alt="day26" class="item__img">
                <h3 class="item__label">Double Verticle Slider (<span style="background-color: brown;">UNCOMPLETE</span>)</h3>
            </div>
            <div class="item" @click="router.push('/Toast-Notification')">
                <img src="../static/day27.png" alt="day27" class="item__img">
                <h3 class="item__label">Toast Notification</h3>
            </div>
            <div class="item" @click="router.push('/Github-Profile')">
                <img src="../static/day28.png" alt="day28" class="item__img">
                <h3 class="item__label">Github Profile</h3>
            </div>
            <div class="item" @click="router.push('/Double-Click-Heart')">
                <img src="../static/day29.png" alt="day29" class="item__img">
                <h3 class="item__label">Double Click Heart</h3>
            </div>
            <div class="item" @click="router.push('/Auto-Text-Effect')">
                <img src="../static/day30.png" alt="day30" class="item__img">
                <h3 class="item__label">Auto Text Effect</h3>
            </div>
            <div class="item" @click="router.push('/Password-Generator')">
                <img src="../static/day31.png" alt="day31" class="item__img">
                <h3 class="item__label">Password Generator</h3>
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
    color: #fafafa;
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
