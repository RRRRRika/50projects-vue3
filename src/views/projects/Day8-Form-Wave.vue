<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const labels = document.querySelectorAll('.form-control label') as NodeListOf<HTMLLabelElement>;

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span class="inner" style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    })
})
</script>

<template>
    <div class="container-big">
        <div class="container">
            <h1>Please Login</h1>
            <form>
                <div class="form-control">
                    <input type="text" required>
                    <label>Email</label>
                    <!-- <label>
                                    <span style="transition-delay: 0ms">E</span>
                                    <span style="transition-delay: 50ms">m</span>
                                    <span style="transition-delay: 100ms">a</span>
                                    <span style="transition-delay: 150ms">i</span>
                                    <span style="transition-delay: 200ms">l</span>
                                </label> -->
                </div>

                <div class="form-control">
                    <input type="password" required>
                    <label>Password</label>
                </div>

                <button class="btn">Login</button>

                <p class="text">Don't have an account? <a href="#">Register</a> </p>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-big {
    width: 100vw;
    height: 100vh;
    color: #fff;
    background-color: steelblue;

    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
    border-radius: 5px;
}

.container h1 {
    text-align: center;
    margin-bottom: 30px;
}

.container a {
    text-decoration: none;
    color: lightblue;
}

.btn {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background: lightblue;
    padding: 15px;
    font-family: inherit;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
}

.btn:focus {
    outline: 0;
}

.btn:active {
    transform: scale(0.98);
}

.text {
    margin-top: 30px;
}

.form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 300px;
}

.form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
}

.form-control input:focus,
.form-control input:valid {
    outline: 0;
    border-bottom-color: lightblue;
}

.form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
}

.inner {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
    color: lightblue;
    transform: translateY(-30px);
}
</style>
