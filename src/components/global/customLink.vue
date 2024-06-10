<script setup lang="ts">

interface options {
  internal: boolean;
}

interface LinkProps {
  /**
   * Lien sur lequel est redirigé l'utilisateur lorsqu'il clique sur le lien.
   * @type {string}
   * @required
   */
  link?: string;
  options?: options;
}

const props = defineProps<LinkProps>();

const navigate = () => {
  navigateTo(props.link, {external: true});
};
</script>

<template>
  <NuxtLink
    v-if="options?.internal"
    :to="props.link"
    :class="[
      'text-color-transition',
      'text-blue-500',
      'underline',
      'dark:hover:text-blue-400',
      'hover:text-blue-400',
      'cursor-pointer'
    ]"
  >
    <slot/>
  </NuxtLink>
  <NuxtLink
      v-else
      @click="navigate"
      :class="[
        'text-color-transition',
        'text-blue-500',
        'underline',
        'dark:hover:text-blue-400',
        'hover:text-blue-400',
        'cursor-pointer'
      ]"
    >
      <slot/>
  </NuxtLink>
</template>

<style scoped>
.text-color-transition {
  transition: color 0.1s ease-in-out;
}
</style>
