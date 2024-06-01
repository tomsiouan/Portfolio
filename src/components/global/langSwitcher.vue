<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});

const hoveredLocale = ref(null);

const handleMouseEnter = (code) => {
  hoveredLocale.value = code;
};

const handleMouseLeave = () => {
  hoveredLocale.value = null;
};
</script>

<template>
  <div>
    <button
        v-for="(item, index) in locales"
        :key="typeof item === 'object' ? item.code : item"
        :class="[
        'px-2.5 py-0.5 transition duration-200',
        language === item.code ? (hoveredLocale !== null && hoveredLocale !== item.code ? 'bg-white text-gray-80' : 'bg-gray-80 text-white') : 'bg-white text-gray-80',
        language !== item.code && 'hover:bg-gray-80 hover:text-white',
        index === 0 ? 'rounded-l-lg' : '',
        index === locales.length - 1 ? 'rounded-r-lg' : ''
      ]"
        @click="language = item.code"
        @mouseenter="handleMouseEnter(item.code)"
        @mouseleave="handleMouseLeave"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>

</style>
