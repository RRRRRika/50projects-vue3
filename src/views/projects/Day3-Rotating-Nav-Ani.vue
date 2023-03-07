<script setup lang="ts">
import { ref } from 'vue';

const container = ref<HTMLDivElement | null>();
const circle = ref<HTMLDivElement | null>();
// const ul = ref<HTMLUListElement | null>();

const close = () => {
    container.value?.classList.remove('show-nav');
    circle.value?.classList.remove('show-nav__circle');
    // ul.value?.classList.remove('show-nav__ul');
}
const open = () => {
    container.value?.classList.add('show-nav');
    circle.value?.classList.add('show-nav__circle');
    // ul.value?.classList.add('show-nav__ul');
}
</script>

<template>
    <div class="background">
        <div class="container" ref="container">
            <div class="circle-container">
                <div class="circle" ref="circle">
                    <button class="circle-btn circle-btn__close" @click="close">
                        <i class="fi fi-br-cross"></i>
                    </button>
                    <button class="circle-btn circle-btn__open" @click="open">
                        <i class="fi fi-br-menu-burger"></i>
                    </button>
                </div>
            </div>
            <div class="content">
                <h1>Amazing Article</h1>
                <small>Florin Pop</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate,
                    maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus,
                    illo,
                    maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut.
                    Eum
                    maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
                    Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in
                    error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
                    Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis.
                    Asperiores
                    quia tenetur nemo ipsa.</p>

                <h3>My Dog</h3>
                <img class="content-img"
                    src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="doggy" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
                    consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
                    Perferendis
                    totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero
                    voluptas,
                    ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident.
                    Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse.
                    Aperiam?
                </p>
            </div>
        </div>
        <nav>
            <ul class="list">
                <li class="list-item__1"><i class="fi fi-br-home"></i><a href="#"> Home</a></li>
                <li class="list-item__2"><i class="fi fi-br-user"></i><a href="#"> About</a></li>
                <li class="list-item__3"><i class="fi fi-br-envelope"></i><a href="#"> Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import '../../static/icon/css/uicons-bold-rounded.css';

.background {
    background-color: #333;
}

.show-nav {
    transform: rotate(-20deg);
}

.show-nav__circle {
    transform: rotate(-70deg);
}
// .show-nav__ul {
//     transform: translateX(100%);
// }

.container {
    width: 100vw;
    min-height: 100vh;
    background-color: #fafafa;
    padding: 5rem;

    transform-origin: top left;
    transition: all .5s;
}

.circle-container {
    position: fixed;
    top: -10rem;
    left: -10rem;
}

.circle {
    background-color: #ff7979;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    position: relative;
    transition: all .5s;

    &-btn {
        cursor: pointer;
        position: absolute;
        top: 47%;
        left: 60%;
        height: 100px;
        background: transparent;
        border: 0;
        font-size: 26px;
        color: #fff;

        &:focus {
            outline: none;
        }

        &__open {

        }

        &__close {
            top: 63%;
            // 设置旋转中心
            transform-origin: top left;
            transform: rotate(90deg);
        }
    }
}

.content {
    max-width: 100rem;
    margin: 2rem auto;

    &-img {
        max-width: 100%;
        padding: 2rem 0;
    }

    small {
        font-style: italic;
    }

    p {
        line-height: 1.5;
        font-size: 1.5rem;
        margin-top: 1rem;
        font-weight: 300;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
        margin-top: 1rem;
    }
}

nav {
    position: fixed;
    bottom: 4rem;
    left: 0;
    z-index: 100;

    .list {
        list-style-type: none;
        font-size: 2rem;
        padding-left: 3rem;
        // transform: translateX(-100%);
        transition: transform 0.4s ease-in;

        li {
            text-transform: uppercase;
            color: #fafafa;
            margin: 4rem 0;

            i {
                font-size: 2rem;
                margin-right: 1rem;
            }

            a {
                color: #fafafa;
                text-decoration: none;
                transition: all 0.5s;
            }
        }

        &-item__2 {
            margin-left: 1.5rem;
            // transform: translateX(-150%);
        }

        &-item__3 {
            margin-left: 3rem;
            // transform: translateX(-200%);
        }
    }
}</style>
