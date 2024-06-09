<script setup lang="ts">
import { useToast } from '~/composables/useToast';

const { toasts, closeToast } = useToast();
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
    <ToastManager :toasts="toasts" @closeToast="closeToast" />
  </NuxtLayout>
</template>

<style scoped>

</style>
