<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

definePageMeta({
  layout: 'portfolio'
});

const title = ref<HTMLElement | null>(null);
const subtitle = ref<HTMLElement | null>(null);
const developerText = ref<HTMLElement | null>(null);
const mouseDown = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (title.value instanceof HTMLElement && entry.target === title.value) {
        title.value.classList.add('animate-slide-in-right');
      } else if (subtitle.value instanceof HTMLElement && entry.target === subtitle.value) {
        const spans = subtitle.value.querySelectorAll('span');
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('animate-slide-in-right');
          }, (index + 2) * 100);
        });
      }
      observer.unobserve(entry.target);
    }
  });
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = window.innerHeight;
  if (developerText.value) {
    const opacity = 1 - Math.min(scrollPosition / (maxScroll / 2), 1);
    developerText.value.style.opacity = opacity.toString();
    developerText.value.style.transform = `translateX(-50%) translateX(${-Math.max(0, scrollPosition * 0.5)}px)`;
  }
  if (mouseDown.value) {
    const opacity = 1 - Math.min(scrollPosition / 300, 1);
    const translateY = Math.min(scrollPosition / 5, 20);
    mouseDown.value.style.opacity = opacity.toString();
    mouseDown.value.style.transform = `translateY(-${translateY}px)`;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    if (title.value) observer.observe(title.value);
    if (subtitle.value) observer.observe(subtitle.value);
    window.addEventListener('scroll', handleScroll);
  }

  document.querySelectorAll('a').forEach(anchor => {
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
  if (observer) {
    if (title.value) observer.unobserve(title.value);
    if (subtitle.value) observer.unobserve(title.value);
  }
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="flex max-w-screen-2xl mx-auto h-screen pt-40 cursor-s-resize relative">
    <div class="left">
      <h1 ref="title" class="text-5xl font-kineticLight font-bold opacity-0">
        Tom Siouan
      </h1>
      <div ref="subtitle" class="flex flex-col mt-4">
        <span ref="subtitle" class="font-kineticLight text-lg opacity-0">
          Étudiant en BUT Informatique
        </span>
        <span ref="subtitle" class="negative-margin-1 font-kineticLight text-lg opacity-0">
          à l'IUT Nord-Franche-Comté situé à Belfort.
        </span>
      </div>
    </div>
    <a ref="mouseDown" class="mouseDown absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5" href="#section1" title="Scroll Down">
      <span></span>
    </a>
  </div>
  <div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-9xl font-movementBlack opacity-100 whitespace-nowrap" ref="developerText">
    Développeur full stack
  </div>
  <div id="section1" class="max-w-screen-xl mx-auto w-screen h-screen bg-amber-400">
    <h2>Section 2</h2>
  </div>
</template>


<style scoped>

.negative-margin-1 {
  margin-top: -0.35rem;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.opacity-0 {
  opacity: 0;
}

@keyframes scrollFade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

*,*::before,*::after { box-sizing: border-box; }
body { font: 16px/1.6em Poppins, BlinkMacSystemFont, "-apple-system", "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #111; color: #fff; text-align: center; }
section { height: 100vh; display: flex; flex-direction: column; justify-content: center; }

/* MOUSE SCROLL ANIMATION */
.mouseDown {
  font-size: 0.9em;
  border: 2px solid rgb(0, 0, 0);
  display: block;
  width: 1.7em;
  height: 2.8em;
  border-radius: 0.9em;
  text-decoration: none;
  transition: border 0.2s ease-out;
}

.mouseDown:hover { border: 2px solid rgba(255, 255, 255, 0.7); }

.mouseDown span {
  display: block;
  background: #000000;
  width: 0.2em;
  height: 0.3em;
  margin: 0.7em auto 0;
  border-radius: 0.4em;
}

.mouseDown span {
  animation-name: scroll;
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  will-change: transform;
}

.mouseDown:hover span {
  animation-duration: 0.7s;
}

@keyframes scroll {
  0%, 20% {
    transform: translateY(0) scaleY(1);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(1.2em) scaleY(1.5);
    opacity: 0.01;
  }
}
</style>
