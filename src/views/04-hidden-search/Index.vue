<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@icon-park/vue-next'

let active = ref(false)
</script>

<template>
  <div class="container">
    <div class="seacch">
      <input type="text" class="input" placeholder="Search..." 
      :style="{width: (active ? '200px' : '50px')}">
      <button class="btn" @click="active = !active" 
      :style="{transform: (active ? 'translateX(198px)' : 'translateX(0)')}">
        <search theme="outline" size="24" fill="#333"/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);

  .seacch {
    position: relative;
    height: 50px;

    .input {
      background-color: #fff;
      border: none;
      outline: none;
      width: 50px;
      height: 50px;
      padding: 15px;
      font-size: 18px;
      transition: width .3s ease;
    }

    .btn {
      background-color: #fff;
      border: 0;
      outline: none;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      transition: transform .3s ease;
    }
  }
}
</style>