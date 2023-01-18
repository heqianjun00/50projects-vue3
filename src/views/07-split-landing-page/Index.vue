<script lang="ts" setup>
import { ref } from 'vue'

let leftActive= ref(false)
let rightActive= ref(false)
</script>

<template>
  <div class="container" 
  :class="[leftActive ? 'hover-left' : '', rightActive ? 'hover-right' : '']">
    <div class="split left" 
    @mouseenter="leftActive = true"
    @mouseleave="leftActive = false"
    >
      <h1>Playstation 5</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
    <div class="split right"
    @mouseenter="rightActive = true"
    @mouseleave="rightActive = false"
    >
      <h1>XBox Series X</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  --left-bg-color: rgba(87, 84, 236, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;

  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #333;

  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;

    h1 {
      font-size: 4rem;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      white-space: nowrap;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    .btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 50%;
      top: 40%;
      transform: translateX(-50%);
      text-decoration: none;
      color: #fff;
      border: 0.2rem solid #fff;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      width: 15rem;
      padding: 1.5rem;
    }
  }

  .left {
    left: 0;
    background: url('@/assets/images/ps.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    transition: all var(--speed) ease-in-out;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--left-bg-color);
      transition: all var(--speed) ease-in-out;
    }

    .btn:hover {
      background-color: var(--left-btn-hover-color);
      border-color: var(--left-btn-hover-color);
    }
  }

  .right {
    right: 0;
    background: url('@/assets/images/xbox.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    transition: all var(--speed) ease-in-out;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--right-bg-color);
      transition: all var(--speed) ease-in-out;
    }

    .btn:hover {
      background-color: var(--right-btn-hover-color);
      border-color: var(--right-btn-hover-color);
    }
  }
}

.hover-left {
  .left {
    width: var(--hover-width);
  }
  .right {
    width: var(--other-width);
  }
}

.hover-right {
  .left {
    width: var(--other-width);
  }

  .right {
    width: var(--hover-width);
  }
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>