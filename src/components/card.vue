<script setup lang="ts">
import {defineProps, onBeforeUnmount, ref} from 'vue';
import {type Project, YEARS } from '~/server/services/projects';

const localPath = useLocalePath();

const card = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (card.value instanceof HTMLElement && entry.target === card.value) {
        card.value.classList.add('animate-increaseOpacityFast');
        card?.value?.addEventListener('animationend', () => {
          card?.value?.classList.remove('animate-increaseOpacityFast');
          card?.value?.classList.add('opacity-100');
        }, { once: true });
        observer.unobserve(entry.target);
      }
      observer.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    if (card.value) observer.observe(card.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    if (card.value) observer.unobserve(card.value);
  }
});

const props = defineProps<{ project: Project }>();

</script>

function navigate(){
return navigateTo({
path: '/search',
query: {
name: 'first name',
type: '1'
}
})
}

<template>
  <div ref="card" class="opacity-0 rounded-lg overflow-hidden shadow-lg dark:bg-zinc-900 transform transition-transform duration-300 hover:scale-105">
    <NuxtLink :to="localPath({path: `/portfolio/project/${props.project.id}`})">
      <div class="relative">
        <img
            v-if="!props.project.videoPath"
            class="w-full"
            :src="props.project.image.imageUrl"
            :alt="$t(props.project.image.alt)"
        >
        <HlsVideo
            v-else
            :src="props.project.videoPath"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :plays-inline="true"
            class="w-full"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl">{{ $t(props.project.title) }}</div>
        <div class="flex flex-row mb-3">
          <div v-if="props.project.years" v-for="(year, index) in props.project.years" :key="index" class="font-normal font-kineticRegular pr-2">
            <span v-if="year === YEARS.NOW">{{ $t(year) }}</span>
            <span v-else>{{ year }}</span>
            <span v-if="index < props.project.years.length - 1"> - </span>
          </div>
        </div>
        <p class="text-gray-700 dark:text-gray-50 text-base">
          {{ $t(props.project.description) }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
            v-for="(tag, index) in props.project.tags"
            :key="index"
            class="inline-block bg-gray-200 dark:bg-zinc-600 dark:text-tertiary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #{{ tag }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
