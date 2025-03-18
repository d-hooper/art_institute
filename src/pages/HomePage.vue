<script setup >
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';


  async function getArtwork() {
    try {
      await artworkService.getArtwork()
    }
    catch (error){
      Pop.error(error, 'COULD NOT GET ARTWORK');
      logger.error(error, 'COULD NOT GET ARTWORK');
    }
  }

  onMounted(() => {
    getArtwork()
  })

</script>

<template>
  <div></div>
</template>

<style scoped lang="scss">

</style>
