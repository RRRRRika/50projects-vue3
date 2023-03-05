<script setup lang="ts">
import { onMounted } from 'vue';

const imgUrls = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
]
const cards = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLDivElement>;
const inactiveAll = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active');
    }
};

onMounted(() => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundImage = `url(${imgUrls[i]})`;
        cards[i].addEventListener('click', () => {
            inactiveAll();
            cards[i].classList.add('active');
        })
    }

    cards[0].classList.add('active');
})

</script>

<template>
    <div class="card-box">
        <div class="card" v-for="index in 5" :key="index">
            <h3 class="card-text">Card {{ index }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-box {
    height: 80vh;
    width: 90vw;
    margin: 0 auto;
    margin-top: 10vh;

    display: flex;
    justify-content: space-between;
}

.card {
    flex-grow: 1;

    margin: 0 2rem;
    height: 100%;
    border-radius: 2rem;
    position: relative;

    transition: all .7s;

    &-text {
        color: #fff;
        font-size: 2.5rem;

        position: absolute;
        top: 90%;
        left: 2rem;
    }
}

.active {
    flex-grow: 5;
}

@media screen and (max-width: 1024px) {
    .card {
        margin: 0 1rem;

        &-text {
            display: none;
        }
    }
}

@media screen and (max-width: 600px) {
    .card-box {
        margin-top: 5vh;
        height: 90vh;

        flex-direction: column;
    }

    .card {
        height: 10%;
        margin: 1rem 0;

        &-text {
            top: 2rem;
            left: 10%;

            display: inline;
        }
    }
}
</style>
