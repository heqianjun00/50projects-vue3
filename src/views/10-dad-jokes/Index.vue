<script lang="ts" setup>
import { ref } from "vue"
const joke = ref<string>('')
const fetchJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  joke.value = data.joke 
}
fetchJoke()
</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div class="joke">{{ joke }}</div>
      <button class="btn" @click="fetchJoke">Get Another Joke</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  background-color: #686de0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  padding: 20px;

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 800px;

    h3 {
      margin: 0;
      opacity: .5;
      letter-spacing: 2px;
    }

    .joke {
      font-size: 30px;
      letter-spacing: 1px;
      line-height: 40px;
      margin: 50px auto;
      max-width: 600px;
    }

    .btn {
      background-color: #9f68e0;
      color: #fff;
      border: 0;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
      padding: 14px 40px;
      font-size: 16px;
      cursor: pointer;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .btn:focus {
      outline: 0;
    }
  }
}
</style>