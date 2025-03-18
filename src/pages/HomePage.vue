<script setup>
import { AppState } from '@/AppState.js';
import ArtCard from '@/components/ArtCard.vue';
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const artwork = computed(() => AppState.artwork)

async function getArtwork() {
  try {
    await artworkService.getArtwork()
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET ARTWORK');
    logger.error(error, 'COULD NOT GET ARTWORK');
  }
}

onMounted(() => {
  getArtwork()
});

</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="fw-bold">Institute of Fine Arts Online Catalog</h1>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="work in artwork" :key="work.id" class="col-md-4">

        <ArtCard :workProp="work" />
      </div>
    </div>
  </section>
  <section class="container"></section>
</template>

<style scoped lang="scss"></style>
