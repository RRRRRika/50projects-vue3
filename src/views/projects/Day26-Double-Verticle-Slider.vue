<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="slider-container">
            <div class="left-side">
                <div class="left-side__card" style="background-color: #FD3555">
                    <h1>Nature flower</h1>
                    <p>all in pink</p>
                </div>
                <div class="left-side__card" style="background-color: #2A86BA">
                    <h1>Bluuue Sky</h1>
                    <p>with it's mountains</p>
                </div>
                <div class="left-side__card" style="background-color: #252E33">
                    <h1>Lonely castle</h1>
                    <p>in the wilderness</p>
                </div>
                <div class="left-side__card" style="background-color: #FFB866">
                    <h1>Flying eagle</h1>
                    <p>in the sunset</p>
                </div>
            </div>
            <div class="right-side">
                <div class="right-side__img"
                    style="background-image: url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')">
                </div>
                <div class="right-side__img"
                    style="background-image: url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')">
                </div>
                <div class="right-side__img"
                    style="background-image: url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')">
                </div>
                <div class="right-side__img"
                    style="background-image: url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')">
                </div>
            </div>
            <div class="btns">
                <button class="btns_down">
                    <i class="fi fi-br-arrow-small-down"></i>
                </button>
                <button class="btns_up">
                    <i class="fi fi-br-arrow-small-up"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('../../static/icon/css/uicons-bold-rounded.css');

.container {
    width: min-content;
    height: min-content;
}

.slider-container {
    width: 100vw;
    height: 100vh;
    // 隐藏其他图像
    overflow: hidden;
    display: flex;
    position: relative;
}

.left-side {
    height: 100%;
    width: 35%;

    transition: all .5s ease-in-out;

    &__card {
        height: 100vh;
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 2rem;
            margin-top: 2rem;
            letter-spacing: 1px;
        }
    }
}

.right-side {
    height: 100%;
    width: 75%;

    transition: all .5s ease-in-out;

    &__img {
        height: 100vh;
        background-size: cover;
    }
}

.btns {
    position: absolute;
    top: 50%;
    left: 30%;

    &_up {
        color: #aaa;
        background-color: #fff;
        width: 3rem;
        height: 4rem;
        border: none;
        outline: none;
        font-size: 2.5rem;
        padding: 2rem 1rem;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;

        transform: translateX(93%) translateY(-200%);

        &:hover {
            color: #000;
        }
    }

    &_down {
        color: #aaa;
        background-color: #fff;
        width: 3rem;
        height: 4rem;
        border: none;
        outline: none;
        font-size: 2.5rem;
        padding: 2rem 1rem;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;

        transform: translateX(-7%);

        &:hover {
            color: #000;
        }
    }
}
</style>
