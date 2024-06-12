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

const localPath = useLocalePath();

const props = defineProps<LinkProps>();

const navigate = () => {
  if(props.options?.internal) {
    navigateTo(props.link);
  } else {
    window.open(props.link, '_blank');
  }
};
</script>

<template>
  <NuxtLink
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
