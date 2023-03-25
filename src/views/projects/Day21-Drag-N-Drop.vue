<script setup lang="ts">
import { onMounted, ref } from 'vue';

const item = ref<HTMLDivElement | null>();

onMounted(() => {
    const emptys = document.querySelectorAll('.empty') as NodeListOf<HTMLDivElement>;
    emptys.forEach(el => {
        el.addEventListener('dragenter', () => {
            el.className = 'hover';
        });
        el.addEventListener('dragleave', () => {
            el.className = 'empty';
        });
        el.addEventListener('dragover', ev => {
            ev.preventDefault();
        })
        el.addEventListener('drop', ev => {
            el.appendChild(item.value!);
        })
    })
})
</script>

<template>
<div class="container">
    <div class="box">
    <div class="empty">
        <div ref="item" class="item" draggable="true"></div>
    </div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
</div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: rgb(86, 32, 136);

    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 15rem;
}

.empty {
    width: 18%;
    background-color: #fafafa;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .7);
}

.hover {
    width: 18%;
    background-color: #3a3a3a;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .7);
}

.item {
    width: 100%;
    height: 100%;
    background-image: url('../../static/day7-cy.png');
    background-size: cover;
}
</style>
