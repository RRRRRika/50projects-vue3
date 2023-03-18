<script setup lang="ts">
import { ref } from 'vue';

const nav = ref<HTMLElement | null>();
const change = () => {
    nav.value?.classList.contains('active') ? nav.value.classList.remove('active') : nav.value?.classList.add('active');
}
</script>

<template>
    <div class="container">
        <nav ref="nav" class="nav active">
            <ul class="items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button class="icon" @click="change">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
            </button>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom,
            #eafbff 0%,
            #eafbff 50%,
            #5290f9 50%,
            #5290f9 100%);

    display: flex;
    justify-content: center;
    align-items: center;
}
nav {
    transition: all 0.6s linear;
}

.nav {
    width: 80px;
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.6s linear;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        width: 0;
        transition: all .6s linear;
    }
}

.items {
    list-style-type: none;

    display: flex;

    li {
        padding: 1rem;
        transform: rotateY(0deg);
        opacity: 0;
        transition: all 0.6s linear;

        a {
            font-size: 1.8rem;
            color: #111;
            text-decoration: none;
        }
    }
}

.icon {
    height: 30px;
    width: 30px;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    position: relative;
}

.line {
    background-color: #5290f9;
    height: 2px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    transition: transform 0.6s linear;

    &-2 {
        top: auto;
        bottom: 10px;
    }
}

.active {
    width: 40rem;
    
    ul {
        width: 100%;
    }

    li {
        opacity: 1;
        transform: rotateY(360deg);
    }

    .line-1 {
        transform: rotate(-765deg) translateY(5.5px);
    }

    .line-2 {
        transform: rotate(765deg) translateY(-5.5px);
    }
}
</style>
