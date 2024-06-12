<!-- pages/portfolio/project/[id].vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PROJECT_LIST, type Project } from '~/server/services/projects';

const route = useRoute();

const loading = ref(true);

const project = ref<Project | null>(null);

onMounted(() => {
  const projectId = parseInt(route.params.id as string, 10);

  const projects = Object.values(PROJECT_LIST);
  project.value = projects[projectId] || null;

  loading.value = false;
});

const redirectTo = () => {
  navigateTo(`${project.value?.githubLink}`, { external: true })
};

</script>

<template>
  <div v-if="loading" class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl pt-32 min-h-screen mx-auto text-lg">
    <div class="flex justify-center items-center min-h-screen">
      <p>Loading...</p>
    </div>
  </div>
  <div v-else-if="project" class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl pt-32 min-h-screen mx-auto text-lg">
    <section class="mb-10">
      <div class="pb-24">
        <h1 class="text-4xl text-start font-extrabold">{{ $t(project.title) }}</h1>
        <p class="text-lg">{{ $t(project.description) }}</p>
        <button v-if="project.githubLink" @click="redirectTo" class="flex flex-row gap-2 items-center mt-2 p-1 transition-all duration-200 border dark:bg-tertiary dark:hover:bg-black dark:hover:border-black text-black border-gray-20 pr-2 rounded-lg hover:text-white hover:bg-black">
          <Icon name="skill-icons:github-dark" size="22" /> <span>Open in GitHub</span>
        </button>
      </div>

      <div class="flex justify-center w-full">
        <img v-if="!project.videoPath" class="w-2/3 rounded-lg" :src="project.image.imageUrl" :alt="$t(project.image.alt)" />
        <HlsVideo
            v-else
            :src="project.videoPath"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :plays-inline="true"
            class="w-2/3 rounded-lg"
        />
      </div>
    </section>

    <section v-html="$t(project.content)" />
  </div>
  <div v-else class="text-lg">
    <p>Project not found</p>
  </div>
</template>

<style scoped>
/* Ajoutez votre style ici si nécessaire */
</style>
