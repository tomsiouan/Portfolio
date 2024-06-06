<script setup lang="ts">
import { defineProps } from 'vue';

const localPath = useLocalePath();

interface CardProps {
  image: {
    imageUrl: string;
    alt: string;
  };
  title: string;
  description: string;
  years?: string[];
  tags: string[];
  route: string;
}

const props = defineProps<CardProps>();
</script>

<template>
    <div class="rounded-lg overflow-hidden shadow-lg dark:bg-zinc-900 transform transition-transform duration-300 hover:scale-105">
      <NuxtLink :to="localPath(props.route)">
        <img class="w-full" :src="props.image.imageUrl" :alt="props.image.alt">
        <div class="px-6 py-4">
          <div class="font-bold text-xl">{{ props.title }}</div>
          <div class="flex flex-row mb-3">
            <div v-if="props.years" v-for="(year, index) in props.years" :key="index" class="font-normal pr-2">
              {{year}}
              <span v-if="index < props.years.length - 1"> - </span>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-50 text-base">
            {{ props.description }}
          </p>
        </div>
        <div class="px-6 py-4">
        <span v-for="(tag, index) in props.tags" :key="index" class="inline-block bg-gray-200 dark:bg-zinc-600 dark:text-tertiary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{{ tag }}
        </span>
        </div>
      </NuxtLink>
    </div>
</template>

<style scoped>

</style>
