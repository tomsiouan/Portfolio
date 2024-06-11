<script setup lang="ts">

</script>

<template>
  <div class="font-kineticRegular dark:bg-gray-80 dark:text-tertiary theme-transition">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.theme-transition {
  transition: background-color 0.5s, color 0.5s;
}
</style>
