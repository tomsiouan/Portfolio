<script setup lang="ts">

</script>

<template>
  <div class="dark:bg-gray-80 dark:text-tertiary theme-transition text-transition overflow-x-hidden">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.theme-transition {
  transition: background-color 0.5s, color 0.5s;
}

.text-transition {
  transition: color 0.5s, color 0.5s;
}
</style>
