<script setup lang="ts">
import { NuxtLink } from '#components'

import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const localPath = useLocalePath();

const router = useRouter();

onMounted(() => {
  router.push('/portfolio');
});
</script>

<template>
  <div>
    <h1>{{ $t("home-title") }}</h1>
    <h3>{{$t("home-subtitle")}}</h3>s
    <NuxtLink :to="localPath('/portfolio')" class="color-blue">Home</NuxtLink>
  </div>
</template>
