<script setup lang="ts">
import { NuxtLink } from '#components'
const appConfig = useAppConfig()

console.log(appConfig.theme)

const localPath = useLocalePath();

</script>

<template>
  <div>
    <h1>{{ $t("home-title") }}</h1>
    <h3>{{$t("home-subtitle")}}</h3>
    <NuxtLink :to="localPath('/portfolio')" class="color-blue">Home</NuxtLink>
  </div>
</template>
