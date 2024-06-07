<script setup lang="ts">
interface LinkProps {
  /**
   * Lien sur lequel est redirigé l'utilisateur lorsqu'il clique sur le lien.
   * @type {string}
   * @required
   */
  link: string;

  /**
   * Taille du texte.
   * @type {string}
   * @optional
   */
  textSize?: string;

  /**
   * Couleur du texte.
   * @type {string}
   * @optional
   */
  textColor?: string;

  /**
   * Couleur du texte au survol de la souris.
   * @type {string}
   * @optional
   */
  textColorHover?: string;
}

const props = defineProps<LinkProps>();
</script>

<template>
  <a
      :href="props.link"
      :class="[
      'text-color-transition',
      props.textColor ? props.textColor : 'text-blue-500',
      'underline',
      'dark:hover:text-blue-400',
      props.textColorHover ? props.textColorHover : 'hover:text-blue-400',
      props.textSize
    ]"
  >
    <slot/>
  </a>
</template>

<style scoped>
.text-color-transition {
  transition: color 0.1s ease-in-out;
}
</style>
