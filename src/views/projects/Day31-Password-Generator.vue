<script setup lang="ts">
import { ref } from 'vue';

const password = ref<string>('');
const length = ref<number>(20);
const uppercase = ref<boolean>(true);
const lowercase = ref<boolean>(true);
const numbers = ref<boolean>(true);
const symbol = ref<boolean>(true);

type RF = {
    [key: string]: () => string;
}

const randomFunc: RF = {
    'lower': getRandomLower,
    'upper': getRandomUpper,
    'number': getRandomNumber,
    'symbol': getRandomSymbol
}

const copy = () => {
    if (!password.value) {
        return;
    }
    navigator.clipboard.writeText(password.value);
    alert('successfully copy!');
}

const generate = () => {
    // console.log(lowercase.value, uppercase.value, numbers.value, symbol.value, length.value);
    password.value = generatePassword(lowercase.value, uppercase.value, numbers.value, symbol.value, length.value);
}

function generatePassword(lower: boolean, upper: boolean, number: boolean, symbol: boolean, length: number) {
    let generatedPassword = ''
    if (!lower && !upper && !number && !symbol) {
        return ''
    }

    const typeArr = [];
    if (lower) {
        typeArr.push('lower');
    }
    if (upper) {
        typeArr.push('upper');
    }
    if (number) {
        typeArr.push('number');
    }
    if (symbol) {
        typeArr.push('symbol');
    }

    for (let i = 0; i < length; i += 1) {
        generatedPassword += randomFunc[typeArr[Math.floor(Math.random() * typeArr.length)]]();
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
</script>

<template>
    <div class="container">
        <div class="generator">
            <h2>Password Generator</h2>
            <div class="result">
                <div class="result__show">{{ password }}</div>
                <button class="result__copy" @click="copy">
                    <i class="fi fi-br-copy"></i>
                </button>
            </div>
            <div class="settings">
                <div class="setting">
                    <label for="length">Password Length</label>
                    <input v-model="length" type="number" id="length" min="6" max="20">
                </div>
                <div class="setting">
                    <label for="uppercase">Include uppercase letters</label>
                    <input v-model="uppercase" type="checkbox" id="uppercase" checked>
                </div>
                <div class="setting">
                    <label for="lowercase">Include lowercase letters</label>
                    <input v-model="lowercase" type="checkbox" id="lowercase" checked>
                </div>
                <div class="setting">
                    <label for="numbers">Include numbers</label>
                    <input v-model="numbers" type="checkbox" id="numbers" checked>
                </div>
                <div class="setting">
                    <label for="symbol">Include symbols</label>
                    <input v-model="symbol" type="checkbox" id="symbol" checked>
                </div>
            </div>
            <button class="btn" @click="generate">
                Generate Password
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('../../static/icon/css/uicons-bold-rounded.css');

.container {
    width: 100vw;
    height: 100vh;
    background-color: #22223b;

    display: flex;
    justify-content: center;
    align-items: center;
}

.generator {
    width: 35rem;
    height: 45rem;
    color: #fff;
    box-shadow: 0px 0px 47px 9px rgba(255, 255, 255, .5);
    padding: 2rem;
    background-color: #4a4e69;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>* {
        width: 100%;
        margin: 1rem 0;
    }

    h2 {
        text-align: center;
        font-size: 2.3rem;
    }
}

.result {
    display: flex;
    align-items: center;

    &__show {
        display: block;
        flex-grow: 1;
        height: 3rem;
        background-color: #22223b;
        color: #fafafa;
        padding: 2rem 1rem;
        letter-spacing: 1.2px;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
    }

    &__copy {
        height: 4rem;
        width: 3rem;

        border: none;
    }
}

.settings {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.setting {
    flex-grow: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;

    &>input {
        height: 60%;
    }
}

.btn {
    padding: 1.5rem 0;
    background-color: #22223b;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 1px;
    border: none;
    outline: none;

    &:hover {
        background-color: rgba(34, 34, 59, 0.863);
    }
}
</style>