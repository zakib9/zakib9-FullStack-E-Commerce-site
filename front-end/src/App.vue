<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class=" h-screen w-full flex flex-col p-8">
    <NavBar />
    <hr class=" bg-black my-4 ">
    <RouterView />
  </div>
</template>


