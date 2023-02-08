<script lang="ts" setup>
import { ref, reactive } from 'vue'
let visible = ref(true)
let data:any = reactive([])
window.addEventListener('keydown',(evt) => {
  visible.value = false
  data.length = 0
  data.push(evt.key,evt.keyCode,evt.code)
})
</script>

<template>
  <div class="container">
    <div class="title" v-if="visible">Press any key to get the keyCode</div>
    <div class="key-wrap" v-else>
      <div class="key">
        <div class="key-title">event.key</div>
        <div class="key-code">{{ data[0] }}</div>
      </div>
      <div class="key">
        <div class="key-title">event.keyCode</div>
        <div class="key-code">{{ data[1] }}</div>
      </div>
      <div class="key">
        <div class="key-title">event.code</div>
        <div class="key-code">{{ data[2] }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: rgb(225, 225, 225);
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;

  .title {
    border: 1px solid #999;
    background-color: #eee;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    min-width: 150px;
  }

  .key-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    .key-title {
      width: 100%;
      color: rgb(85, 85, 85);
      font-size: 14px;
    }
    .key-code {
      background-color: rgb(238, 238, 238);
      box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px;
      display: inline-flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      flex-direction: column;
      min-width: 150px;
      position: relative;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(153, 153, 153);
      border-image: initial;
      padding: 20px;
      margin: 10px;
    }
  }
}
</style>