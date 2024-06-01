<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

const localPath = useLocalePath();

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const letters = document.querySelectorAll<HTMLElement>('.letter');
  const letterS = document.querySelector<HTMLElement>('.letter-s');

  const threshold = 300;
  const maxOpacity = 1;
  const minOpacity = 0;
  const maxOffset = 45;

  let allLettersHidden = true;

  letters.forEach((letter) => {
    if (letter.classList.contains('letter-t') || letter.classList.contains('letter-s')) {
      return;
    }
    const opacity = Math.max(minOpacity, maxOpacity - (scrollPosition / threshold));
    letter.style.opacity = opacity.toString();
    if (opacity > 0) {
      allLettersHidden = false;
    }
  });

  // Déplace le "S" plus près de "T" seulement après que les autres lettres aient disparu
  if (allLettersHidden && scrollPosition > threshold) {
    const offset = Math.min(maxOffset, scrollPosition - threshold);
    if (letterS) {
      letterS.style.left = `${-offset}px`;
    }
  } else if (letterS) {
    // Reset the position of 'S' if not all letters are hidden or scrollPosition is not enough
    letterS.style.left = '0px';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="fixed top-0 w-full z-30">
    <div class="container mx-auto max-w-screen-xl">
      <div class="md:md-8 my-4 backdrop-blur-sm rounded-2xl bg-zinc-800/10 dark:bg-white/10 px-6 py-4">
        <div class="flex items-center gap-8">
          <!-- Logo à gauche -->
          <h1 class="uppercase text-2xl flex-1 max-w-fit">
            <NuxtLink :to="localPath('/portfolio')" class="router-link-active router-link-exact-active">
              <span class="relative" id="logo">
                <span class="letter letter-t relative">T</span>
                <span class="letter letter-o active relative" style="opacity: 1;">o</span>
                <span class="letter letter-m active relative" style="opacity: 1;">m</span>
                <span class="letter letter- relative">&nbsp;</span>
                <span class="letter letter-s relative" style="left: auto;">S</span>
                <span class="letter letter-i active relative" style="opacity: 1;">i</span>
                <span class="letter letter-o active relative" style="opacity: 1;">o</span>
                <span class="letter letter-u active relative" style="opacity: 1;">u</span>
                <span class="letter letter-a active relative" style="opacity: 1;">a</span>
                <span class="letter letter-n active relative" style="opacity: 1;">n</span>
              </span>
            </NuxtLink>
          </h1>

          <!-- Liens de navigation au centre -->
          <nav class="flex-1 md:flex hidden justify-center gap-8" aria-label="desktop-navbar">
            <NuxtLink :to="localPath('/portfolio/about')" class="nav-link">About</NuxtLink>
            <NuxtLink :to="localPath('/portfolio/projects')" class="nav-link">Projects</NuxtLink>
            <NuxtLink :to="localPath('/portfolio/stages')" class="nav-link">Stages</NuxtLink>
            <NuxtLink :to="localPath('/portfolio/contact')" class="nav-link">Contact</NuxtLink>
          </nav>

          <div class="flex-3 md:flex hidden">
            <LangSwitcher />
            <color-theme-switcher />
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="h-screen">
    <!-- Contenu pour permettre le défilement -->
  </div>
</template>

<style scoped>
.letter {
  transition: opacity 0.5s;
}

.letter-s {
  transition: left 0.5s;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  transform: translateY(2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  transition: opacity 0.25s ease-out;
}

.nav-link:hover::after {
  opacity: 1;
}
</style>
