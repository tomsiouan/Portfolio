<script setup lang="ts">
const {locales, locale, setLocale} = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<template>
  <select v-model="language">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="item.code"
      >{{ item.name }}
    </option>/
  </select>
</template>

<style scoped>

</style>
