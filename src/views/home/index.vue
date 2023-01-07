<script setup lang="ts">
import { useRouter } from 'vue-router';
import birdCard from '@/components/birdCard.vue';

const route = useRouter();
const routesList = route.options.routes.filter((item) => item.meta);

</script>

<template>
  <div class="container">
    <bird-card :routesList="routesList"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1200px;
  background-color: #78e08f;
  display: flex;
  flex-flow: wrap;
}
</style>