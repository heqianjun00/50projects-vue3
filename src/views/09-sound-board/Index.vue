<script lang="ts" setup>

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

const audio = document.createElement('audio')
const playAudio = (name: string) => {
  // 将静态资源放在public文件中，直接使用‘/’访问
  audio.src = `/sounds/${name}.mp3`
  audio.play()
}

</script>

<template>
  <div class="container">
    <button class="btn" v-for="item in sounds" @click="playAudio(item)">{{ item }}</button>
  </div>
</template>

<style lang="scss">
.container {
  height:100vh;
  background-color: rgb(161, 100, 223);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  .btn {
    background-color: rebeccapurple;
    border-radius: 5px;
    border: none;
    color: #fff;
    margin: 1rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>