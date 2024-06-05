<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { PROJECT_LIST } from "~/server/services/projects";

definePageMeta({
  layout: 'portfolio'
});

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

const title = ref<HTMLElement | null>(null);
const subtitle = ref<HTMLElement | null>(null);
const developerText = ref<HTMLElement | null>(null);
const mouseDown = ref<HTMLElement | null>(null);

const aboutMeParagraph = ref<HTMLElement | null>(null);

const projects = ref(Object.values(PROJECT_LIST));

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
      } else if (developerText.value instanceof HTMLElement && entry.target === developerText.value) {
        setTimeout(() => {
          developerText?.value?.classList.add('animate-increaseOpacity');
          developerText?.value?.addEventListener('animationend', () => {
            developerText?.value?.classList.remove('animate-increaseOpacity');
          }, { once: true });
        }, 1000);
      } else if (aboutMeParagraph.value instanceof HTMLElement && entry.target === aboutMeParagraph.value) {
        aboutMeParagraph.value.classList.add('animate-slide-in-right');
        aboutMeParagraph?.value?.classList.add('animate-increaseOpacity');
        observer.unobserve(entry.target);
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
    if (developerText.value) observer.observe(developerText.value);
    if (aboutMeParagraph.value) observer.observe(aboutMeParagraph.value);
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
    if (title.value) {
      observer.unobserve(title.value);
      if (subtitle.value) observer.unobserve(title.value);
    }
    if (developerText.value) observer.unobserve(developerText.value);
    if (aboutMeParagraph.value) observer.unobserve(aboutMeParagraph.value);
  }
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="flex max-w-screen-2xl mx-auto h-screen pt-40 cursor-s-resize relative">
    <div class="left">
      <h1 ref="title" class="text-5xl font-kineticLight font-bold opacity-0">
        {{ $t("home-title") }}
      </h1>
      <div ref="subtitle" class="flex flex-col mt-4">
        <span ref="subtitle" class="font-kineticLight text-lg opacity-0">
          {{ $t("home-first-subtitle") }}
        </span>
        <span ref="subtitle" class="negative-margin-1 font-kineticLight text-lg opacity-0">
          {{ $t("home-second-subtitle") }}
        </span>
      </div>
    </div>
    <a ref="mouseDown" class="mouseDown absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5" href="#aboutMe" title="Scroll Down">
      <span></span>
    </a>
  </div>
  <div class="slogan absolute top-2/3 left-1/2 transform -translate-x-1/2 text-9xl font-movementBlack overflow-y-hidden opacity-0 whitespace-nowrap" ref="developerText">
    {{ $t("home-slogan") }}
  </div>
  <div id="aboutMe"></div>
  <div class="max-w-screen-xl mx-auto mt-32 w-screen h-screen">
    <h2 ref="titleAboutMe" class="font-kineticLight text-4xl font-extrabold mb-5">{{ $t("section-title-about-me") }}</h2>
    <div class="flex flex-row">
      <div class="w-1/2 flex flex-col text-justify font-kineticLight text-lg">
        <p ref="aboutMeParagraph" class="opacity-0">
          {{$t("section-about-me-first-paragraph")}}
        </p>

        <p ref="aboutMeSubParagraph" class="mt-10 opacity-100">
          {{$t("section-about-me-second-paragraph")}}
        </p>
      </div>
      <div class="w-1/2 text-center font-kineticLight text-lg">
        <p>test</p>
      </div>
      </div>
  </div>
  <div id="projects"></div>
  <div class="max-w-screen-xl mx-auto mt-28 w-screen">
    <h2 ref="titleProjects" class="font-kineticLight text-4xl font-extrabold mb-5">{{ $t("section-title-projects") }}</h2>
    <div class="px-4 py-5 ">
      <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
            v-for="(project, index) in projects"
            :key="index"
            :imageUrl="project.imageUrl"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
        />
      </div>
    </div>
  </div>
  <div id="stages"></div>
  <div class="max-w-screen-xl mx-auto mt-28 w-screen">
    <h2 ref="titleStages" class="font-kineticLight text-4xl font-extrabold mb-5">{{$t("section-title-stages")}}</h2>
    <div class="flex flex-row">
      <div class="w-1/2 text-justify font-kineticLight text-lg">
        <p>
          Bonjour! Pour me présenter, je suis étudiant en première année de BUT Informatique, où
          l'on apprend pleins de domaines comme l'algorithmique, l'optimisation, les réseaux,
          les bases de données ou encore les représentations MCD et MR. Nous faisons beaucoup
          de projets qui rassemblent chaque module pour nous former et devenir plus indépendants.
          Dans ce genre de projet, j'ai l'habitude de gérer le temps et de travailler en équipe,
          pour m'assurer que nous progressons. Je gère aussi souvent la répartition des tâches,
          donc tout le monde a quelque chose à faire, moi compris bien sûr.
        </p>
      </div>
      <div class="w-1/2 text-center font-kineticLight text-lg">
        <p>test</p>
      </div>
    </div>
  </div>
  <div id="contactMe"></div>
  <div class="max-w-screen-xl mx-auto mt-28 w-screen h-screen">
    <h2 ref="titleContact" class="font-kineticLight text-4xl font-extrabold mb-5">{{$t("section-title-contact")}}</h2>
    <div class="flex flex-row">
      <div class="w-1/2 text-justify font-kineticLight text-lg">
        <p>
          Bonjour! Pour me présenter, je suis étudiant en première année de BUT Informatique, où
          l'on apprend pleins de domaines comme l'algorithmique, l'optimisation, les réseaux,
          les bases de données ou encore les représentations MCD et MR. Nous faisons beaucoup
          de projets qui rassemblent chaque module pour nous former et devenir plus indépendants.
          Dans ce genre de projet, j'ai l'habitude de gérer le temps et de travailler en équipe,
          pour m'assurer que nous progressons. Je gère aussi souvent la répartition des tâches,
          donc tout le monde a quelque chose à faire, moi compris bien sûr.
        </p>
      </div>
      <div class="w-1/2 text-center font-kineticLight text-lg">
        <p>test</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.negative-margin-1 {
  margin-top: -0.35rem;
}

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

.mouseDown:hover { border: 2px solid rgba(204, 204, 204, 0.7); }
.mouseDown:hover span { background-color: rgba(204, 204, 204, 0.7); }

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
