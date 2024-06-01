<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

type Theme = 'light' | 'dark';

const colorMode = useColorMode();
const theme = ref<Theme | null>(null); // Initialisation avec null
const isThemeLoaded = ref(false);

const setColorTheme = (newTheme: Theme): void => {
  colorMode.preference = newTheme;
  theme.value = newTheme;
}

// Appliquer la préférence de thème côté client après le montage
onMounted(() => {
  if (colorMode.preference === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorTheme(prefersDark ? 'dark' : 'light');
  } else {
    theme.value = colorMode.preference as Theme;
  }
  isThemeLoaded.value = true; // Thème déterminé
});

// Surveiller les changements de préférence de thème
watch(() => colorMode.preference, (newVal) => {
  theme.value = newVal as Theme;
});
</script>

<template>
  <div class="theme-switcher">
    <button class="ml-5" v-if="isThemeLoaded" @click="setColorTheme(theme === 'dark' ? 'light' : 'dark')">
      <svg
          v-if="theme === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-50"
          viewBox="0 0 20 20"
          fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      <svg
          v-if="theme === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
      >
        <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
        />
      </svg>
    </button>
    <div v-else class="loading-spinner">
      <!-- Cercle de chargement -->
      <div class="spinner h-6 w-6"></div>
    </div>
  </div>
</template>

<style scoped>
.theme-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  margin-left: 20px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
