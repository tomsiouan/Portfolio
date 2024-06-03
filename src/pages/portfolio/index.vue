<script setup lang="ts">
import {NuxtLink} from "#components";

definePageMeta({
  layout: 'portfolio'
});

const localPath = useLocalePath();
</script>

<template>

  <div class="max-w-7xl mx-auto h-screen">
    <Icon name="CCO"></Icon>
  </div>
  <h1 class="text-3xl font-bold h-screen">
    {{ $t("portfolio-home-title") }}
  </h1>

  <h3 class="">
    {{ $t("portfolio-home-subtitle") }}
  </h3>
  <NuxtLink :to="localPath('/')" class="color-blue">Retourner à l'accueil</NuxtLink>
</template>

<style scoped>

</style>
