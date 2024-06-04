<script setup lang="ts">
</script>

<template>
  <footer class="bg-zinc-900 text-white text-sm leading-relaxed py-10 mt-16">
    <div class="container mx-auto max-w-screen-xl">
      <div class="mb-8">
        <div>
          <p>{{$t("footer-first")}}</p>
          <p>{{$t("footer-second")}}</p>
          <p>{{$t("footer-third")}}</p>
        </div>
      </div>
      <div class="footer-lower flex justify-between md:flex-row flex-col gap-4">
        <small>{{$t("footer-used-techno")}} <a href="https://nuxt.com" class="text-blue-500 underline hover:text-blue-400">nuxt</a>, <a href="https://tailwindcss.com" class="text-blue-500 underline hover:text-blue-400">tailwindcss</a></small>
        <small>tomsiouan.fr 2024 ©</small>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
