<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'

const handleScroll = () => {
  const boxes = document.querySelectorAll('.box')
  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
          box.classList.add('show')
      } else {
          box.classList.remove('show')
      }
  })
}

onMounted(() => {
  window.addEventListener('scroll',handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll',handleScroll)
})
</script>

<template>
  <div class="container">
    <h1>Scroll to see the animation</h1>
    <div 
    class="box" 
    v-for="item in 13"
    >
      <h2>Content {{ item }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100%;
  background-color: #efedd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;

  h1 {
    margin: 10px;
  }

  .box {
    background-color: steelblue;
    color: #fff;
    width: 400px;
    height: 200px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba($color: #000000, $alpha: .3);
    transform: translateX(400%);
    transition: transform .4s ease;

    &:nth-of-type(even) {
      transform: translateX(-400%);
    }

    &.show {
      transform: translateX(0);
    }

    h2 {
      font-size: 45px;
    }
  }
}
</style>