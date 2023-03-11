<script setup lang="ts">

</script>

<template>
<div class="container">
    <div class="page page__left">
        <a href="#" class="btn">奏了</a>
    </div>
    <div class="page page__right">
        <a href="#" class="btn">不奏</a>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;

    display: flex;
}
.page {
    height: 100%;
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 1s ease;

    &:hover {
        flex-grow: 5;
    }

    &__left {
        background-image: url('../../static/day7-xz.png');
        background-size: cover;
    }

    &__right {
        background-image: url('../../static/day7-cy.png');
        background-size: cover;
    }
}
.btn {
    width: 20rem;
    text-align: center;
    padding: 2rem;
    background-color: transparent;
    display: block;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000;
    border: .7rem solid #fafafa;

    transition: all .3s;

    &:hover {
        // color: #fff;
        border: .7rem solid #000;
    }
}
</style>
