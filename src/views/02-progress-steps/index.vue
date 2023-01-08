<script setup lang="ts">
import { ref, computed } from 'vue';

let activeIndex = ref(1);
let progressWidth = ref(0);
const circles = ref(4);

const preDisabled = computed(() => {
  return activeIndex.value <= 1;
});
const nextDisabled = computed(() => {
  return activeIndex.value >= 4
})

const pre = (): void => {
  activeIndex.value--;
  if (activeIndex.value <= 1) {
    activeIndex.value = 1;
  }

  progressWidth.value = (activeIndex.value - 1) / (circles.value - 1) * 100;
}
const next = (): void => {
  activeIndex.value++;
  if (activeIndex.value >= 4) {
    activeIndex.value = 4;
  }
  
  progressWidth.value = (activeIndex.value - 1) / (circles.value - 1) * 100;
}
</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <div class="progress-container">
        <div class="progress" :style="{'width': `${progressWidth}%`}"></div>
        <div 
          class="circle" 
          :class="activeIndex >= i ? 'active' : ''"
          v-for=" i in circles" 
          :key="i">
          {{ i }}
        </div>
      </div>
      <button class="btn" @click="pre()" :disabled="preDisabled">Prev</button>
      <button class="btn" @click="next()" :disabled="nextDisabled">Next</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
  
  .container {
    text-align: center;

    .progress-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 30px;
      max-width: 100%;
      width: 350px;

      .progress {
        background-color: var(--line-border-fill);
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 4px;
        width: 0%;
        z-index: -1;
        transition: 0.4s ease;
      }

      .circle {
        background-color: #fff;
        color:#999;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--line-border-empty);
        transition: 0.4s ease;
      }
    }
    .progress-container::before {
      content: '';
      background-color: var(--line-border-empty);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 4px;
      width: 100%;
      z-index: -1;
    }
    .circle.active {
      border-color: var(--line-border-fill);
    }

    .btn {
      background-color: var(--line-border-fill);
      color: #fff;
      border: 0;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      padding: 8px 30px;
      margin: 5px;
      font-size: 14px;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .btn:focus {
      outline: 0;
    }

    .btn:disabled {
      background-color: var(--line-border-empty);
      cursor: not-allowed;
    }
  }
}
</style>