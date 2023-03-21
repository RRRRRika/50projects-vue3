<script setup lang="ts">
import { onMounted, ref } from 'vue';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

type Movie = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

const movies = ref<Movie[]>([]);
const input = ref<string>('');

async function getMovies(url: string) {
    (await fetch(url)).json()
        .then(data => {
            movies.value = data.results;
        })
        .catch(err => {
            console.log(err);
        })
}

const handleSubmit = (payload: Event) => {
    payload.preventDefault();

    getMovies(SEARCH_API + input.value);
}

onMounted(() => {
    getMovies(API_URL);
})
</script>

<template>
    <div class="container">
        <header class="header">
            <form class="search" @submit="handleSubmit">
                <input v-model="input" type="text" class="header__search" placeholder="Search...">
            </form>
        </header>
        <main class="content">
            <div class="movie" v-for="item in movies" :key="item.id">
                <img :src="IMG_PATH + item.poster_path" :alt="item.title" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-info__title">{{ item.title }}</h3>
                    <small class="movie-info__release">{{ item.release_date }}</small>
                    <div class="movie-info-vote">
                        <div class="movie-info-vote__count">voters: {{ item.vote_count }}</div>
                        <div class="movie-info-vote__average">{{ item.vote_average }}</div>
                    </div>
                </div>
                <div class="movie-overview">
                    <h3>Overview</h3>
                    <p>{{ item.overview }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.container {
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;

    background-color: #22254b;
}

.header {
    padding: 2rem;
    background-color: #373b69;
    display: flex;
    justify-content: flex-end;

    &__search {
        padding: 1rem 2rem;
        color: #fff;
        outline: none;
        background-color: #22254b;
        border-radius: 20px;
        border: none;

        margin-right: 5rem;
    }
}

.content {
    padding: 2rem;

    display: grid;
    grid-column: 4;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 3rem;
}

.movie {
    // width: 20rem;
    min-height: 60rem;
    background-color: #3D4061;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    transition: all .3s;

    &:hover {

        .movie-overview {
            transform: translateY(0);
        }
    }

    &-poster {
        width: 100%;
    }

    &-info {
        flex-grow: 1;
        padding: 2rem;
        display: flex;
        flex-direction: column;

        &__title {
            letter-spacing: .5px;
            font-size: 2rem;
            color: #DFE0E5;
        }

        &__release {
            color: #C4C5CF;
        }

        &-vote {
            flex-grow: 1;
            align-self: flex-end;

            display: flex;
            align-items: flex-end;

            &__count {
                padding: 1rem 2rem;
                color: #C4C5CF
            }

            &__average {
                padding: 1rem;
                font-size: 1.8rem;
                font-weight: 600;
                background-color: #CFA619;
            }
        }
    }

    &-overview {
        background-color: #fafafa;
        // border: 2px solid red;
        padding: 2rem;
        padding-bottom: 3rem;
        letter-spacing: .5px;

        transform: translateY(100%);

        position: absolute;
        bottom: 0%;

        h3 {
            letter-spacing: 1px;
            padding: 2rem 0;
        }

        transition: all .3s;
    }
}
</style>