<script setup lang="ts">
import { onMounted, ref } from 'vue';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const mode = ref<string>('Dark mode');
const timeText = ref<string>('');
const dateText = ref<string>('');
const container = ref<HTMLDivElement | null>();
const hourEl = ref<HTMLDivElement | null>();
const minuteEl = ref<HTMLDivElement | null>();
const secondEl = ref<HTMLDivElement | null>();

const changeMode = () => {
    if (mode.value === 'Dark mode') {
        mode.value = 'Light mode';
        container.value?.classList.add('dark');
    } else {
        mode.value = 'Dark mode';
        container.value?.classList.remove('dark');
    }
}
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
const setTime = () => {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.value!.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.value!.style.transform = `translate(0, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.value!.style.transform = `translate(0, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeText.value = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateText.value = `${days[day]}, ${months[month]} ${date}`
}

onMounted(() => {
    setTime();

    setInterval(setTime, 1000);
})
</script>

<template>
    <div class="container" ref="container">
        <button class="toggle" @click="changeMode">{{ mode }}</button>

        <div class="clock-container">
            <div class="clock">
                <div ref="hourEl" class="needle needle-hour"></div>
                <div ref="minuteEl" class="needle needle-minute"></div>
                <div ref="secondEl" class="needle needle-second"></div>
                <div class="center-point"></div>
            </div>

            <div class="time">{{ timeText }}</div>
            <div class="date">{{ dateText }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$dark-mode: #000;
$light-mode: #fff;

.container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all .2s;
}

.dark {
    background-color: #1a1a1a;
    color: $light-mode;

    .toggle {
        color: $dark-mode;
        background-color: $light-mode;
    }

    .needle {
        &-hour {
            background-color: $light-mode;
        }

        &-minute {
            background-color: $light-mode;
        }
    }
}

.toggle {
    padding: 1rem;
    border: none;
    background-color: $dark-mode;
    color: $light-mode;
    border-radius: 5px;
    margin-bottom: 5rem;

    &:focus {
        outline: none;
    }
}

.clock-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.clock {
    height: 20rem;
    width: 20rem;
    position: relative;

    margin: 2rem;
    margin-bottom: 4rem;
}

.needle {
    height: 6.5rem;
    width: 3px;

    background-color: $dark-mode;

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: bottom left;
    transition: all .5s ease-in;

    &-hour {
        transform: translate(-50%, -100%) rotate(0deg);
    }

    &-minute {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 10rem;
    }

    &-second {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 10rem;
        background-color: #e74c3c;
    }
}

.center-point {
    background-color: #e74c3c;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;

    &::after {
        content: '';
        background-color: $dark-mode;
        width: 5px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
}

.time {
    font-size: 6rem;
}

.date {
    color: #aaa;
    font-size: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
}
</style>
