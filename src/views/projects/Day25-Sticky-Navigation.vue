<script setup lang="ts">
import { onMounted, ref } from 'vue';

const nav = ref<HTMLDivElement | null>();

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            nav.value?.classList.add('active');
        } else {
            nav.value?.classList.remove('active');
        }
    })
})
</script>

<template>
    <div class="container">
        <nav>
            <div ref="nav" class="nav">
                <h1 class="nav__logo">My Website</h1>
                <ul class="nav__ul">
                    <li class="current"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>

        <div class="hero">
            <h1>Welcome To My Website</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
        </div>

        <section class="content">
            <h2>Content One</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem aspernatur, voluptatibus amet,
                voluptas tempora obcaecati repellat perspiciatis, autem rem at asperiores saepe! Rerum debitis incidunt
                nisi, sint doloribus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro ratione
                eum libero quia voluptate placeat deserunt similique enim. Fugit accusantium, laboriosam vero veritatis
                neque aperiam illo molestiae quae doloremque.</p>

            <h2>Content Two</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, laudantium et. A, eaque sit. Numquam
                similique nulla quae quas, iste assumenda ipsum quod odit sed ratione vero cupiditate aliquam amet? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Illo maxime repellat cupiditate dignissimos? Enim
                voluptates ad, molestiae sequi voluptate facilis libero amet error, repudiandae inventore dolorem pariatur
                cumque facere ipsum?</p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 100vw;
    min-height: 100vh;
    background-color: #fafafa;
}

.current {
    a {
        color: orangered !important;
    }
}

.nav {
    width: 100%;
    height: 7rem;
    padding: 1.5rem 2rem;
    position: fixed;
    color: #fff;
    background-color: #3a3a3a;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all .3s;

    &__logo {
        letter-spacing: 1px;
        font-size: 3rem;
        padding-left: 3rem;
    }

    &__ul {
        display: flex;
        list-style-type: none;

        li {
            padding: 0 2rem;

            a {
                font-size: 1.8rem;
                text-decoration: none;
                color: #fff;
            }
        }
    }
}

.hero {
    background-image: url(../../static/day5-bg.jpg);
    background-size: cover;
    height: 65rem;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3rem;
        letter-spacing: .8px;
    }

    p {
        letter-spacing: .5rem;
        margin-top: 2rem;
    }
}

.content {
    margin: 0 auto;
    width: 80%;
    padding: 3rem 2rem;

    h2 {
        font-size: 1.8rem;
    }

    p {
        margin: 3rem 0;
        line-height: 3rem;
        font-size: 1.7rem;
        font-weight: 300;
        letter-spacing: 1.2px;
    }
}

.active {
    height: 5rem;
    background-color: #fff;
    color: #000;
    
    ul {
        li {
            a {
                color: #000;
            }
        }
    }
}
</style>
