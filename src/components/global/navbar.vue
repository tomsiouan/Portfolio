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

  if (allLettersHidden && scrollPosition > threshold) {
    const offset = Math.min(maxOffset, scrollPosition - threshold);
    if (letterS) {
      letterS.style.left = `${-offset}px`;
    }
  } else if (letterS) {
    letterS.style.left = '0px';
  }
};

const redirectOnPageOrHome = async () => {
  if (location.pathname !== '/') {
    await navigateTo(localPath('/'))
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = anchor.getAttribute('href');
      if (id && id.startsWith('#')) {
        const targetElement = document.querySelector(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="fixed top-0 w-full z-30">
    <div class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl mx-auto">
      <div class="md:md-8 my-4 backdrop-blur-sm rounded-2xl bg-zinc-800/10 dark:bg-white/10 px-6 py-4">
        <div class="flex items-center gap-8">
          <!-- Logo à gauche -->
          <h1 class="uppercase text-2xl flex-1 max-w-fit">
            <!--<NuxtLink :to="localPath('/')" class="router-link-active router-link-exact-active">-->
            <a @click="redirectOnPageOrHome" class="cursor-pointer">
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
            </a>
            <!--</NuxtLink>-->
          </h1>

          <!-- Liens de navigation au centre -->
          <nav class="flex-1 md:flex hidden justify-center gap-8" aria-label="desktop-navbar">
            <!--<NuxtLink :to="localPath('/about')" class="nav-link">{{ $t("nav-about") }}</NuxtLink>
            <NuxtLink :to="localPath('/projects')" class="nav-link">{{ $t("nav-projects") }}</NuxtLink>
            <NuxtLink :to="localPath('/stages')" class="nav-link">{{ $t("nav-stages") }}</NuxtLink>
            <NuxtLink :to="localPath('/contact')" class="nav-link">{{ $t("nav-contact") }}</NuxtLink>-->
            <a href="#aboutMe" class="nav-link">{{ $t("nav-about") }}</a>
            <a href="#skills" class="nav-link">{{ $t("nav-skills") }}</a>
            <a href="#projects" class="nav-link">{{ $t("nav-projects") }}</a>
            <a href="#stages" class="nav-link">{{ $t("nav-stages") }}</a>
            <a href="#contactMe" class="nav-link">{{ $t("nav-contact") }}</a>
          </nav>

          <div class="flex-3 md:flex hidden">
            <LangSwitcher />
            <color-theme-switcher />
          </div>
        </div>
      </div>
    </div>
  </header>
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
