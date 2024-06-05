<script setup lang="ts">
import { defineProps } from 'vue';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

const props = defineProps<CardProps>();
</script>

<template>
  <div class="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
    <img class="w-full" :src="props.imageUrl" alt="Card image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <p class="text-gray-700 text-base">
        {{ props.description }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span v-for="(tag, index) in props.tags" :key="index" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
