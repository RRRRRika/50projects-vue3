<script setup lang="ts">
import { ref } from 'vue';

type UserProfile = {
    avatar_url: string;
    bio: string;
    name: string;
    location: string;
    repos_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

const APIURL = 'https://api.github.com/users/';

const input = ref<string>('');
const profile = ref<UserProfile>();
const reposNames = ref<string[]>([]);

async function getUserProfile(username:string) {
    await fetch(APIURL + username)
        .then(data => {
            data.json()
                .then(res => {
                    profile.value = res;
                    getReposNames(res.repos_url);
                })
                .catch(rej => {
                    console.log(rej);
                })
        })
        .catch(rej => {
            console.log(rej);
        })
}

async function getReposNames(reposUrl:string) {
    await fetch(reposUrl)
        .then(res => {
            res.json()
                .then(data => {
                    const repos = data as any[];
                    const names = [];
                    while (names.length < repos.length && names.length < 8) {
                        names.push(repos[names.length].name);
                    }
                    reposNames.value = names;
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
}

const onSubmit = (payload: Event) => {
    payload.preventDefault();

    getUserProfile(input.value);
}
</script>

<template>
    <div class="container">
        <form @submit="onSubmit">
            <input v-model="input" type="text" class="input" placeholder="Search a Github User Name" />
        </form>
        <div class="profile" v-if="profile">
            <img :src="profile.avatar_url" alt="user avatar" class="profile__avatar">
            <div class="profile__info">
                <h1 class="profile__info-name">{{ profile.name }}</h1>
                <p class="profile__info-bio">{{ profile.bio }}</p>
                <div class="profile__info-data">
                    <div class="item">
                        <h2>{{ profile.followers }}</h2>
                        <small>followers</small>
                    </div>
                    <div class="item">
                        <h2>{{ profile.following }}</h2>
                        <small>followering</small>
                    </div>
                    <div class="item">
                        <h2>{{ profile.public_repos }}</h2>
                        <small>repository</small>
                    </div>
                </div>
                <ul class="profile__info-repos">
                    <li v-for="item in reposNames" :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #03045e;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
    width: 60vw;
    color: #fff;
    background-color: #023e8a;
    border: none;
    font-size: 2rem;
    font-family: inherit;
    outline: none;
    padding: 1.2rem 2rem;
    letter-spacing: .8px;
    border-radius: 1rem;
    line-height: 4rem;
}

.profile {
    background-color: #023e8a;
    border-radius: 5px;
    margin-top: 3rem;
    padding: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 3rem;
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &__avatar {
        width: 18%;
        margin: 2rem;
        border-radius: 50%;
        border: .8rem solid #03045e;
    }

    &__info {
        flex-grow: 1;
        color: #fff;
        margin-left: 3rem;

        &-name {
            letter-spacing: 1.5px;
            font-size: 3rem;
        }

        &-bio {
            margin-top: 1.2rem;
        }

        &-data {
            margin-top: 1.2rem;

            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .item {
                padding: 1rem;
                
                h2 {
                    text-align: center;
                    font-size: 2rem;
                    letter-spacing: 1px;
                }

                small {
                    display: block;
                    width: 100%;
                    text-align: center;
                    letter-spacing: 1px;
                }
            }
        }

        &-repos {
            margin-top: 1.3rem;
            display: flex;
            list-style-type: none;
            flex-wrap: wrap;

            li {
                padding: .8rem 1rem;
                background-color: #0096c7;
                letter-spacing: 1.2px;
                border-radius: 3px;
                margin-right: 2rem;
                margin-top: 1.3rem;
            }
        }
    }
}
</style>