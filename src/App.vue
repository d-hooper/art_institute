<script setup>
import { onMounted } from 'vue';
import { AppState } from './AppState.js';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

onMounted(()=>{

})
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
  </footer>
</template>

<style lang="scss">


</style>
