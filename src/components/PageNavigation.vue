<script setup>
import { AppState } from '@/AppState.js';
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage =computed(()=>AppState.currentPage)
const pageCount =computed(()=>AppState.pageCount)

async function changePage(page) {
  try {
    await artworkService.changePage(page)
  } catch (error) {
    Pop.error('COULD NOT CHANGE PAGE')
    logger.error('COULD NOT CHANGE PAGE', error)
  }
}

</script>


<template>
<div class="d-flex gap-3 my-3">
  <button @click="changePage(currentPage - 1)" class="btn btn-outline-orange fw-bold fs-5" type="button" title="" :disabled="currentPage <= 1">Previous</button>
  <p class="mb-0 fs-4">Page {{ currentPage }} of {{ pageCount }}</p>
  <button @click="changePage(currentPage + 1)" class="btn btn-outline-orange fw-bold fs-5" type="button" title="" :disabled="currentPage == pageCount">Next</button>
</div>
</template>


<style lang="scss" scoped>

button:hover {
  color: #f8f9fa;
  text-shadow: 1px 1px 3px #000;
}

</style>