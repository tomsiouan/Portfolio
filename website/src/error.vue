<script setup lang="ts">
import type {NuxtError} from "#app";


const localPath = useLocalePath();

const props = defineProps({
  error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="error-page w-screen h-screen overflow-x-hidden">
    <h1 class="text">{{ error?.statusCode === 404 ? 'Page not found' : 'Oops, something went wrong!' }}</h1>
    <NuxtLink v-if="error?.statusCode === 404" :to="localPath('/')">Go back Home</NuxtLink>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

@import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');

:root {
  font-family: "Jaro", sans-serif;
}

.text {
  transform-style: preserve-3d;
  rotate: 1 -1 -.3 45deg;
  text-align: center;
  font-size: clamp(2rem, 14vw + 1rem, 20rem);
  font-variation-settings: "opsz" 6;
  animation: ops 2s infinite linear alternate;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: .05em;
    top: 100%;
    background-color: #1f202050;
    border-radius: 50%;
    filter: blur(.05em);
    animation: bops 2s infinite linear alternate;
  }
}
@keyframes ops {
  to {
    font-variation-settings: "opsz" 72;
  }
}
@keyframes bops {
  to {
    height: .1em;
  }
}
</style>
