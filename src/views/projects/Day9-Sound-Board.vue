<script setup lang="ts">
import applause from '../../static/sounds/sound-board_sounds_applause.mp3'
import boo from '../../static/sounds/sound-board_sounds_boo.mp3'
import gasp from '../../static/sounds/sound-board_sounds_gasp.mp3'
import taba from '../../static/sounds/sound-board_sounds_tada.mp3'
import victory from '../../static/sounds/sound-board_sounds_victory.mp3'
import wrong from '../../static/sounds/sound-board_sounds_wrong.mp3'

const audioNames = ['applause', 'boo', 'gasp', 'taba', 'victory', 'wrong'];
const audio1 = new Audio(applause);
const audio2 = new Audio(boo);
const audio3 = new Audio(gasp);
const audio4 = new Audio(taba);
const audio5 = new Audio(victory);
const audio6 = new Audio(wrong);
const map = new Map<string, HTMLAudioElement>();
map.set('applause', audio1);
map.set('boo', audio2);
map.set('gasp', audio3);
map.set('taba', audio4);
map.set('victory', audio5);
map.set('wrong', audio6);

const stop = () => {
    for (const e of map.values()) {
        e.pause();
        e.currentTime = 0;
    }
}

const play = (id: string) => {
    stop();
    map.get(id)?.play();
}
</script>

<template>
<div class="container">
    <div class="btn-box">
        <button class="btn" @click="play(item)" v-for="item in audioNames">{{ item }}</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: blueviolet;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-box {
    display: flex;
}
.btn {
    font-size: 2rem;
    letter-spacing: 3px;
    border: none;
    border-radius: 3px;
    margin: 1rem 2rem;
    padding: 2rem 3rem;
    color: #fff;
    background-color: rgba(0, 0, 0, .4);

    &:hover {
        background-color: rgba(0, 0, 0, .2);
    }
}
</style>
