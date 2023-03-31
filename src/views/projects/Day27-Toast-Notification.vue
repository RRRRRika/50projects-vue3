<script setup lang="ts">
import { ref } from 'vue';

const message = [
    'The Brain — is wider than the Sky — ',
    'For — put them side by side — ',
    'The one the other will contain',
    'With ease — and You — beside — ',
    'The Brain is deeper than the sea — ',
    'For — hold them — Blue to Blue — ',
    'The one the other will absorb — ',
    'As Sponges — Buckets — do — ',
    'The Brain is just the weight of God —',
    'For — Heft them — Pound for Pound — ',
    'And they will differ — if they do — ',
    'As Syllable from Sound — '
];
const types = ['type__1', 'type__2', 'type__3', 'type__4'];
const toasts = ref<HTMLDivElement | null>();
let index = 0;

const addMsg = () => {
    const el = document.createElement('div');
    el.classList.add('toasts__item');
    el.classList.add(types[index % 4]);
    el.innerText = message[index % message.length];
    index++;

    toasts.value?.appendChild(el);

    setTimeout(() => {
        el.remove()
    }, 3000);
}
</script>

<template>
    <div class="container">
        <div ref="toasts" class="toasts"></div>

        <button class="generate" @click="addMsg">Show Notification</button>
        <small class="tips">message comes from a poem:</small>
        <small class="tips"><small class="tips__bold">The Brain Is Wider Than The Sky</small> —— Emily Dickinson</small>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    background-color: #ffd6ff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tips {
    margin-top: 1rem;

    &__bold {
        font-weight: 600;
    }
}

.generate {
    font-size: 2rem;
    padding: 1rem 2rem;
    color: #ffd6ff;
    background-color: #fff;
    border: none;
    border-radius: 5px;

    transition: all .3s;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: translateY(-10px) scale(1.1);
    }

    &:active {
        transform: translateY(-5px) scale(1.03);
    }
}

.toasts {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    // border: 2px solid #000;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

}

:deep(.toasts__item) {
    padding: 2rem 3rem;
    border-radius: 5px;
    color: #fafafa;
    margin: .5rem 0;
    font-size: 1.8rem;
}

:deep(.type__1) {
    background-color: #e7c6ff;
}

:deep(.type__2) {
    background-color: #c8b6ff;
}

:deep(.type__3) {
    background-color: #b8c0ff;
}

:deep(.type__4) {
    background-color: #bbd0ff;
}</style>