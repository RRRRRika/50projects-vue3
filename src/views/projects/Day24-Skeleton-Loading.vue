<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="content">
            <div class="img skeleton-item"></div>
            <div class="info">
                <div class="info_avatar skeleton-item"></div>
                <div class="info_title skeleton-item"></div>
                <div class="info_desc skeleton-item"></div>
                <div class="info_desc skeleton-item"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;

    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    width: 35rem;
    height: 38rem;
    padding: 1.5rem;
    border: .5rem solid #aaa;

    background-color: #fafafa;

    & > * {
        width: 100%;
        background-color: #eee;
    }
}

.img {
    height: 50%;
    border-radius: 5px;
}

.info {
    margin-top: 1.5rem;
    height: 40%;
    padding: 1rem;
    background-color: #fafafa;

    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 2fr 1fr 1fr;
    align-items: center;

    &_avatar {
        grid-row: 1 / -1;
        grid-column: 1;

        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background-color: #eee;
    }

    &_title {
        width: 100%;
        height: 3rem;
        border-radius: 3px;
        background-color: #eee;
    }

    &_desc {
        width: 100%;
        height: 1.5rem;
        border-radius: 3px;
        background-color: #eee;
    }
}

.skeleton-item {
    background-image: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    // 通过设置背景图片的位置来实现动画效果
    background-size: 400% 100%;     // 图片宽度变为容器的 4 倍
    background-position: 100% 50%;
    animation: skeleton-loading 1.4s ease infinite;
}

@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
</style>
