<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
  .app-container {
    display: flex;
    justify-content: center; 
    align-items: center;   
    height: 100vh;         
  }
</style>
