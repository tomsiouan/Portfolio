<script setup lang="ts">
import {NuxtLink} from "#components";

definePageMeta({
  layout: 'portfolio'
});

const localPath = useLocalePath();
</script>

<template>
  <h1 class="text-3xl font-bold">
    {{ $t("portfolio-home-title") }}
  </h1>

  <h3 class="">
    {{ $t("portfolio-home-subtitle") }}
  </h3>
  <NuxtLink :to="localPath('/')" class="color-blue">Retourner à l'accueil</NuxtLink>
</template>

<style scoped>

</style>
