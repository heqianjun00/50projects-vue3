<script setup lang="ts">
import { ref } from "vue";
import imgSrc1 from "@/assets/images/ExploreTheWorld.avif";
import imgSrc2 from "@/assets/images/WildForest.avif";
import imgSrc3 from "@/assets/images/SunnyBeach.avif";
import imgSrc4 from "@/assets/images/CityOnWinter.avif";
import imgSrc5 from "@/assets/images/MountainsClouds.avif";


const imgs = [
  {
    id: 1,
    tile: "Explore The World",
    src: imgSrc1
  },
  {
    id: 2,
    tile: "Wild Forest",
    src: imgSrc2
  },
  {
    id: 3,
    tile: "Sunny Beach",
    src: imgSrc3
  },
  {
    id: 4,
    tile: "City on Winter",
    src: imgSrc4
  },
  {
    id: 5,
    tile: "Mountains - Clouds",
    src: imgSrc5
  }
];

let activeId = ref(1);
const clickPanel = (id: number) => {
  activeId.value = id;
}

</script>

<template>
  <div class="container">
    <div
      v-for="item in imgs"
      :key="item.id"
      @click="clickPanel(item.id)"
      class="panel"
      :class="activeId === item.id ? 'active' : ''"
      :style="{'background-image': `url(${item.src})`}"
    >
      <h3>{{ item.tile }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 90vw;

  .panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
    transition: all 700ms ease-in;

    h3 {
      font-size: 20px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      margin: 0;
      opacity: 0;
    }
  }

  .panel.active {
    flex: 5;

    h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
  }
}
@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>