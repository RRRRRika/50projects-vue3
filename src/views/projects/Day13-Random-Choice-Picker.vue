<script setup lang="ts">
import { ref } from 'vue';

const tags = ref<string[]>([]);
const inputArea = ref<string>('');

const onInput = () => {
    tags.value = inputArea.value.split(',').filter((value, index) => {
        if (value.trim()) {
            return value;
        }
    })
}
</script>

<template>
<div class="container">
    <textarea v-model="inputArea" @input="onInput" class="input" rows="10" cols="50" placeholder="please enter tags here, devide with ','"></textarea>
    <div class="tags-box">
        <div class="tag" v-for="(value, index) in tags" :key="index">{{ value }}</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: steelblue;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input {
    width: 50rem;
    height: 15rem;
    letter-spacing: 1px;
    border: 2px solid #000;
    padding: 1rem;
    line-height: 1.5;
    font-family: inherit;
    outline: none;
}
.tags-box {
    margin-top: 3rem;
    max-width: 50rem;
    display: flex;
    flex-wrap: wrap;
}

.tag {
    font-size: 1.6rem;
    padding: .5rem 1rem;
    margin: 1rem;
    background-color: violet;
    border-radius: 20px;
}
</style>
