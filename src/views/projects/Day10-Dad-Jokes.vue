<script setup lang="ts">
import { onMounted, ref } from 'vue';

const joke = ref<string>('');

const getJoke = () => {
    fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network Error.');
        })
        .then(data => {
            joke.value = data.joke;
        })
        .catch(err => {
            console.log(err);
        });
}

onMounted(() => {
    getJoke();
})
</script>

<template>
    <div class="container">
        <div class="jokes-box">
            <h3 class="jokes-box__title">Don't Laugh Challenge</h3>
            <div class="jokes-box__joke">{{ joke }}</div>
            <button class="jokes-box__btn" @click="getJoke">Get Another</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: steelblue;

    display: flex;
    justify-content: center;
    align-items: center;
}

.jokes-box {
    min-width: 50%;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        color: rgba(0, 0, 0, .4);
        font-size: 2rem;
        letter-spacing: 1.5px;
    }

    &__joke {
        margin: 2rem 0;
        padding: 2rem 0;
        font-size: 18px;
        letter-spacing: 1px;
    }

    &__btn {
        color: #fff;
        background-color: blueviolet;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 2px 3px 5px rgba($color: #000000, $alpha: .3);

        transition: all .2s;

        &:active {
            transform: scale(90%);
        }
    }
}
</style>
