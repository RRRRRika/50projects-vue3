<script setup lang="ts">
import { onMounted, ref } from 'vue'

const target = [342, 435, 89];
const followers = [ref<number>(0), ref<number>(0), ref<number>(0)];

onMounted(() => {
    followers.forEach((value, index) => {
        const up = () => {
            if (value.value < target[index]) {
                value.value += 1;
                setTimeout(up, 1);
            }
        }

        up();
    })

})
</script>

<template>
    <div class="container">
        <div class="boxes">
            <div class="box">
                <i class="icon fi fi-br-alarm-clock"></i>
                <div class="counter">{{ followers[0] }}</div>
                <span>XXX Followers</span>
            </div>
            <div class="box">
                <i class="icon fi fi-br-alarm-clock"></i>
                <div class="counter">{{ followers[1] }}</div>
                <span>XXX Followers</span>
            </div>
            <div class="box">
                <i class="icon fi fi-br-alarm-clock"></i>
                <div class="counter">{{ followers[2] }}</div>
                <span>XXX Followers</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../static/icon/webfonts/uicons-bold-rounded.css';
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

.container {
    width: 100vw;
    height: 100vh;
    background-color: blueviolet;
    font-family: 'Roboto Mono', sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
}

.boxes {
    display: flex;
}

.box {
    color: white;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        // font-size: 2.5rem;
        padding: 1rem;
    }
}

.counter {
    font-size: 4rem;
}

.icon {
    font-size: 4rem;
    padding: 1rem 0;
}
</style>
