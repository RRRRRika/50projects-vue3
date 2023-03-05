<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">Projects List</div>
        <div class="projects-box">
            <div class="item">
                <img src="../static/day1.png" alt="day1" class="item__img">
                <h3 class="item__label">Expanding Cards</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    background-image: linear-gradient(to right top, #051937, #004e78, #008993, #00c178, #b7ef39);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 5rem;
}

.projects-box {
    width: 100%;
    flex-grow: 1;
    padding: 5rem 5rem;

    display: grid;
    gap: 1.5rem;
    grid-template-rows: repeat(2, minmax(10rem, min-content));
    grid-template-columns: repeat(4, 1fr);
}

.item {

    &__img {
        width: 100%;
        border-radius: 1.5rem;
    }

    &__label {
        padding-top: 1rem;
        display: block;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
    }
}
</style>
