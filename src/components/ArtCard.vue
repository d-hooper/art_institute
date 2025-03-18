<script setup>
import { WorkOfArt } from '@/models/WorkOfArt.js';

defineProps({
  workProp: { type: WorkOfArt, required: true}
})
</script>


<template>
      <img :src="workProp.imgUrls.small" :alt="workProp.altDescription" class="img-fluid">
</template>


<style lang="scss" scoped></style>