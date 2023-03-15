<script setup lang="ts">
import { onMounted, ref } from 'vue';

const key = ref<string>();
const keyCode = ref<string>();
const code = ref<string>();

onMounted(() => {
    window.addEventListener('keydown', (ev) => {
        key.value = ev.key;
        keyCode.value = ev.keyCode.toString();
        code.value = ev.code;
    })
})
</script>

<template>
<div class="container">
    <h1>Press any key</h1>
    <div class="key-box">
        <div class="key">
            {{ key }}
            <small>event.key</small>
        </div>
        <div class="key">
            {{ keyCode }}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            {{ code }}
            <small>event.code</small>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #ddd;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    color: rgba(0, 0, 0, .5);
    letter-spacing: 1px;
}

.key-box {
    margin-top: 5rem;

    display: flex;
    width: 50%;
    justify-content: space-around;
}

.key {
    min-width: 20rem;
    min-height: 8rem;
    background-color: #fafafa;
    border: 2px solid #000;
    padding: 2rem 2.5rem;
    font-size: 2.5rem;
    position: relative;
    text-align: center;

    small {
        width: 100%;
        font-size: 1.5rem;
        position: absolute;
        top: -2.5rem;
        left: 0;
        text-align: center;
    }
}
</style>
