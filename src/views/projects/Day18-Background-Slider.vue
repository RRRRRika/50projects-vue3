<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const body = document.body
    const slides = document.querySelectorAll('.slide')
    const leftBtn = document.getElementById('left')
    const rightBtn = document.getElementById('right')

    let activeSlide = 0

    rightBtn!.addEventListener('click', () => {
        activeSlide++

        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }

        setBgToBody()
        setActiveSlide()
    })

    leftBtn!.addEventListener('click', () => {
        activeSlide--

        if (activeSlide < 0) {
            activeSlide = slides.length - 1
        }

        setBgToBody()
        setActiveSlide()
    })

    setBgToBody()

    function setBgToBody() {
        body.style.backgroundImage = (slides[activeSlide] as HTMLElement).style.backgroundImage
    }

    function setActiveSlide() {
        slides.forEach((slide) => slide.classList.remove('active'))

        slides[activeSlide].classList.add('active')
    }
})
</script>

<template>
    <div class="container">
        <div class="slider-container">
            <div class="slide active" style="
                                  background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
                                "></div>
            <div class="slide" style="
                                  background-image: url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80');
                                "></div>

            <div class="slide" style="
                                  background-image: url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
                                "></div>

            <div class="slide" style="
                                  background-image: url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80');
                                "></div>

            <div class="slide" style="
                                  background-image: url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
                                "></div>

            <button class="arrow left-arrow" id="left">
                <i class="fi fi-br-angle-left"></i>
            </button>

            <button class="arrow right-arrow" id="right">
                <i class="fi  fi-br-angle-right"></i>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../static/icon/css/uicons-bold-rounded.css';

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    background-position: center center;
    background-size: cover;
    transition: 0.4s;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: -1;
    }
}

.slider-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 70vh;
    width: 70vw;
    position: relative;
    overflow: hidden;
}

.slide {
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: -15vh;
    left: -15vw;
    transition: 0.4s ease;
    z-index: 1;
}

.active {
    opacity: 1;
}

.arrow {
    position: fixed;
    background-color: transparent;
    color: #fff;
    padding: 20px;
    font-size: 30px;
    border: 2px solid orange;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:focus {
        outline: none;
    }
}

.left-arrow {
    left: calc(15vw - 65px);
}

.right-arrow {
    right: calc(15vw - 65px);
}
</style>
