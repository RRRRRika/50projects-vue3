<script setup lang="ts">
import { onMounted, ref } from 'vue';

const original = 'We Love Programming!';
const speed = ref<number>(1);
const text = ref<string>('');
let index = 1;

const write = () => {
    text.value = original.slice(0, index);
    index = index === original.length ? 1 : index + 1;

    setTimeout(write, 300 / speed.value);
}

onMounted(() => {
    write();
})
</script>

<template>
<div class="container">
    <h1 class="text">{{ text }}</h1>

    <div class="speed-box">
        <label for="speed">Speed</label>
        <input type="number" id="speed" v-model="speed" min="1" max="10" step="1" />
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text {
    font-size: 5rem;
}

.speed-box {
    padding: 2rem 3rem;
    background-color: steelblue;
    margin-top: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    label {
        color: #fafafa;
        font-size: 2rem;
        padding-right: 3rem;
    }

    input {
        padding: .5rem 1rem;    
        border: none;
        outline: none;
        line-height: 2rem;

        &:focus {
            outline: none;
        }
    }
}
</style>