<script setup lang="ts">
import { NuxtLink } from '#components'
const appConfig = useAppConfig()

console.log(appConfig.theme)

</script>

<template>
  <div>
    <NuxtLink to="/portfolio/home">Home</NuxtLink>
  </div>
</template>
