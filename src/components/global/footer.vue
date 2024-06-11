<script setup lang="ts">
</script>

<template>
  <footer class="bg-zinc-900 text-white py-10 mt-16">
    <div class="container max-w-48 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl mx-auto">
      <div class="mb-8">
        <div>
          <p class="text-tertiary">{{$t("footer-first")}}</p>
          <p class="text-tertiary">{{$t("footer-second")}}</p>
          <p class="text-tertiary">{{$t("footer-third")}}</p>
        </div>
      </div>
      <div class="footer-lower flex justify-between md:flex-row flex-col gap-4">
        <small>{{$t("footer-used-techno")}}
          <CustomLink link="https://nuxt.com">nuxt</CustomLink>,
          <CustomLink link="https://tailwindcss.com">tailwindcss</CustomLink>
        </small>
        <small>tomsiouan.fr 2024 ©</small>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
