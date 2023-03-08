<script setup lang="ts">
import { ref } from 'vue';

const input = ref<HTMLInputElement | null>();

const handleClick = () => {
    if (input.value?.classList.contains('active')) {
        input.value.classList.remove('active');
    } else {
        input.value?.classList.add('active');
    }
}
</script>

<template>
<div class="container">
    <div class="search">
        <input ref="input" type="text" class="search-input" placeholder="Search something...">
        <button class="search-btn" @click="handleClick">
            <i class="fi fi-br-search"></i>
        </button>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../../static/icon/css/uicons-bold-rounded.css';

.container {
    width: 100vw;
    height: 100vh;
    background-color: blueviolet;

    display: flex;
    justify-content: center;
    align-items: center;
}
.search {
    height: 5rem;
    font-size: 1.8rem;
    border-radius: 5px;
    overflow: hidden;
    transform: translateY(-2rem);

    &-input {
        border: none;
        height: 100%;
        width: 0;
        outline: none;
        transition: all .5s ease;

        &:focus {
            outline: none;
            border: none;
        }
    }

    &-btn {
        height: 100%;
        border: none;
        padding: 1rem;
        outline: none;
        background-color: #fff;
        cursor: pointer;
        // transform: translateX(-2rem);
    }
}

.active {
    padding-left: 2rem;
    width: 25rem;
}
</style>
