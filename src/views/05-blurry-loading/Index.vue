<script setup lang="ts">
import { ref } from 'vue'

let num = ref(0)
let filterNum = ref(0)
let opacityNum = ref(0)

const scale = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

const bluring = () => {
  num.value++
  if (num.value >= 100) {
    clearInterval(timer)
  }
  filterNum.value = scale(num.value, 0, 100, 30, 0)
  opacityNum.value = scale(num.value, 0, 100, 1, 0)
}

let timer = setInterval(bluring, 30)
</script>

<template>
  <div class="container">
    <div class="bg" :style="{filter: `blur(${filterNum}px)`}"></div>
    <div class="loading-text" :style="{opacity: opacityNum}">{{num}}%</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  .bg {
    background: url('@/assets/images/BlurryLoading.avif') no-repeat center center/cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    filter: blur(0px);
  }

  .loading-text {
    font-size: 50px;
    color: #fff;
  }
}
</style>