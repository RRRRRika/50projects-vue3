<script setup lang="ts">
import { onMounted, ref } from 'vue';

const size = ref<number>(10);
const color = ref<string>('black');
const canvas = ref<HTMLCanvasElement | null>();
let ctx: CanvasRenderingContext2D | null = null;

// 记录鼠标状态
let isDrawing = false;
let lastX = 0;
let lastY = 0;

const initCanvas = () => {
    if (!canvas.value) {
        return;
    }
    ctx = canvas.value.getContext('2d')!;
    ctx.lineWidth = size.value;
    ctx.strokeStyle = color.value;
}

const startDrawing = (ev: MouseEvent) => {
    isDrawing = true;
    [lastX, lastY] = [ev.offsetX, ev.offsetY];
}

const drawLine = (startX: number, startY: number, endX: number, endY: number) => {
    if (ctx) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}

const drawCircle = (x: number, y: number) => {
    if (ctx) {
        ctx.beginPath();
        ctx.arc(x, y, size.value / 2, 0, Math.PI * 2);
        ctx.fillStyle = color.value;
        ctx.fill();
    }
}

const drawing = (ev: MouseEvent) => {
    if (!isDrawing || !ctx) {
        return;
    }

    drawCircle(ev.offsetX, ev.offsetY);
    drawLine(lastX, lastY, ev.offsetX, ev.offsetY);

    [lastX, lastY] = [ev.offsetX, ev.offsetY];
}

const stopDrawing = () => {
    isDrawing = false;
}

const clear = () => {
    ctx?.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
}

const decrease = () => {
    size.value -= 2;
    ctx!.lineWidth = size.value;
}

const increase = () => {
    size.value += 2;
    ctx!.lineWidth = size.value;
}

const changeColor = () => {
    ctx!.strokeStyle = color.value;
}

onMounted(() => {
    initCanvas();
})
</script>

<template>
    <div class="container">
        <!-- 要在 canvas 标签上指定 width 和 height，且应该和 css 一致，不然会模糊 -->
        <!-- 详细：https://juejin.cn/post/7067415002289799205 -->
        <canvas class="canvas" width="800" height="600" ref="canvas" @mousedown="startDrawing" @mousemove="drawing"
            @mouseleave="stopDrawing" @mouseup="stopDrawing"></canvas>
        <div class="toolbox">
            <button class="toolbox__desc" @click="decrease">-</button>
            <span class="toolbox__size">{{ size }}</span>
            <button class="toolbox__incr" @click="increase">+</button>
            <input type="color" v-model="color" @change="changeColor">
            <button class="toolbox__clear" @click="clear">Clear</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.canvas {
    width: 80rem;
    height: 60rem;
    background-color: #fff;
    border: 2px solid #000;
}

.toolbox {
    width: 80rem;
    height: 5rem;
    padding: .5rem;
    background-color: #ccc;

    display: flex;
    align-items: center;

    &>* {
        width: 5rem;
        height: 80%;
        margin: 0 1rem;
    }

    &>button {
        font-size: 1.8rem;
        border: none;
        background-color: cornflowerblue;
        border-radius: 2px;

        &:focus {
            outline: none;
        }
    }

    &__size {
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__clear {
        width: 7rem;
        text-align: center;
        margin-left: 60%;
        letter-spacing: .8px;
    }
}
</style>
