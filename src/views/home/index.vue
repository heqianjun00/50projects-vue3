<script setup lang="ts">
import { useRouter } from 'vue-router';
import BirdCard from '@/components/BirdCard.vue';

const route = useRouter();
const routesList = route.options.routes.filter((item) => item.meta);

</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <bird-card :routesList="routesList"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
.container {
  width: 1200px;
  background-color: #78e08f;
  display: flex;
  flex-flow: wrap;
}
</style>