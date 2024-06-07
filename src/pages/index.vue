<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { PROJECT_LIST } from "~/server/services/projects";
import autoAnimate from "@formkit/auto-animate";
import CustomLink from "~/components/global/customLink.vue";

interface Project {
  image: {
    imageUrl: string;
    alt: string;
  };
  title: string;
  description: string;
  years?: string[];
  tags: string[];
  route: string;
}

const localPath = useLocalePath();

const title = ref<HTMLElement | null>(null);
const subtitle = ref<HTMLElement | null>(null);
const developerText = ref<HTMLElement | null>(null);
const mouseDown = ref<HTMLElement | null>(null);
const tagList = ref<HTMLElement | null>(null);
const tagGroup = ref<HTMLElement | null>(null);
const aboutMeParagraph = ref<HTMLElement | null>(null);
const aboutMeSubParagraph = ref<HTMLElement | null>(null);
const bacText = ref<HTMLElement | null>(null);
const butText = ref<HTMLElement | null>(null);
const stage1Text = ref<HTMLElement | null>(null);
const downloadCVButton = ref<HTMLElement | null>(null);
const isDlCVDisabled = ref(true);
const projects = Object.values(PROJECT_LIST);
const selectedTags = ref<string[]>([]);
const projectList = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const animationEnd = ref(false);

const uniqueTags = computed(() => {
  const tags = new Set<string>();
  filteredProjects.value.forEach((project: Project) => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
});

const filteredProjects = computed<Project[]>(() => {
  if (selectedTags.value.length === 0) return projects;
  return projects.filter(project => selectedTags.value.every(tag => project.tags.includes(tag)));
});

const toggleTag = (tag: string) => {
  selectedTags.value.includes(tag)
      ? selectedTags.value = selectedTags.value.filter(t => t !== tag)
      : selectedTags.value.push(tag);
};

const handleAnimationEnd = (element: HTMLElement, animationClass: string) => {
  element.classList.remove(animationClass);
  element.classList.add('opacity-100');
};

const handleIntersection = (element: HTMLElement | null, animationClass: string, observer: IntersectionObserver) => {
  if (element) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => handleAnimationEnd(element, animationClass), { once: true });
    observer.unobserve(element);
  }
};

const downloadCV = () => {

};

const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch (entry.target) {
        case title.value:
          handleIntersection(title.value, 'animate-slide-in-right', observer);
          break;
        case subtitle.value:
          subtitle.value?.querySelectorAll('span').forEach((span, index) => {
            setTimeout(() => span.classList.add('animate-slide-in-right'), (index + 2) * 100);
          });
          break;
        case developerText.value:
          setTimeout(() => handleIntersection(developerText.value, 'animate-increaseOpacity', observer), 1000);
          break;
        case mouseDown.value:
          setTimeout(() => handleIntersection(mouseDown.value, 'animate-increaseOpacity', observer), 1000);
          break;
        case aboutMeParagraph.value:
          handleIntersection(aboutMeParagraph.value, 'animate-increaseOpacity', observer);
          break;
        case aboutMeSubParagraph.value:
          handleIntersection(aboutMeSubParagraph.value, 'animate-increaseOpacity', observer);
          break;
        case bacText.value:
          handleIntersection(bacText.value, 'animate-blurSlideFromLeft', observer);
          break;
        case butText.value:
          handleIntersection(butText.value, 'animate-blurSlideFromRight', observer);
          break;
        case stage1Text.value:
          handleIntersection(stage1Text.value, 'animate-blurSlideFromLeft', observer);
          break;
        case downloadCVButton.value:
          handleIntersection(downloadCVButton.value, 'animate-increaseOpacity', observer);
          break;
        case tagGroup.value:
          handleIntersection(tagGroup.value, 'animate-increaseOpacity', observer);
          break;
      }
    }
  });
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = window.innerHeight;
  const developer = developerText.value;
  const mouse = mouseDown.value;

  if (developer) {
    if (animationEnd.value) {
      const opacity = 1 - Math.min(scrollPosition / (maxScroll / 2), 1);
      developer.style.opacity = opacity.toString();
    }
    developer.style.transform = `translateX(-50%) translateX(${-Math.max(0, scrollPosition * 0.5)}px)`;
  }

  if (mouse) {
    const opacity = 1 - Math.min(scrollPosition / 300, 1);
    const translateY = Math.min(scrollPosition / 5, 20);
    mouse.style.opacity = opacity.toString();
    mouse.style.transform = `translateY(-${translateY}px)`;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    const elementsToObserve = [title.value, subtitle.value, developerText.value, mouseDown.value, aboutMeParagraph.value, aboutMeSubParagraph.value, bacText.value, butText.value, stage1Text.value, downloadCVButton.value, tagGroup.value];
    elementsToObserve.forEach(element => {
      if (element) observer?.observe(element);
    });
    window.addEventListener('scroll', handleScroll);
  }

  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const id = anchor.getAttribute('href');
      if (id && id.startsWith('#')) {
        const targetElement = document.querySelector(id);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  if (projectList.value) autoAnimate(projectList.value);
  if (tagList.value) autoAnimate(tagList.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
  <div>
    <section class="flex pl-5 max-w-screen sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-screen-2xl mx-auto h-screen pt-40 cursor-s-resize relative">
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
      <a ref="mouseDown" class="opacity-0 mouseDown absolute border-2 border-black dark:border-tertiary bottom-0 left-1/2 transform -translate-x-1/2 mb-5" href="#aboutMe" title="Scroll Down">
        <span class="bg-dark dark:bg-tertiary"></span>
      </a>
      <div class="slogan absolute top-2/3 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-movementBlack opacity-0 whitespace-nowrap" ref="developerText">
        {{ $t("home-slogan") }}
      </div>
    </section>
    <div id="aboutMe"></div>
    <section class="max-w-screen-xl mx-auto mt-32 w-full px-4">
      <h2 ref="titleAboutMe" class="font-kineticLight text-4xl font-extrabold mb-5 text-center">{{ $t("section-title-about-me") }}</h2>
      <section>
        <div>
          <div class="flex flex-col items-start md:flex-row">
            <div class="font-kineticLight text-lg text-justify flex flex-col w-full md:w-1/3 mt-2 px-4">
              <p ref="aboutMeParagraph" class="opacity-0">
                {{$t("section-about-me-first-paragraph")}}
              </p>
              <p ref="aboutMeSubParagraph" class="mt-10 opacity-0">
                {{$t("section-about-me-second-paragraph")}}
              </p>
              <a
                  ref="downloadCVButton"
                  href="#"
                  :class="[
                  'opacity-0 bg-transparent mt-4 mr-auto rounded shadow py-2 px-4 border',
                  isDlCVDisabled
                    ? 'cursor-not-allowed opacity-50 text-gray-400 border-gray-400'
                    : 'hover:bg-primary text-primary hover:text-white border-primary hover:border-transparent'
                ]"
                  @click.prevent="isDlCVDisabled ? null : downloadCV"
              >
                {{ $t("download_cv") }}
              </a>
            </div>
            <div class="ml-0 md:ml-12 w-full md:w-2/3 mt-10 md:mt-0">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden pr-10 pl-10 pb-10 pt-5 h-full">
                  <div class="border-2-2 text-primary absolute h-full border border-primary" style="right: 50%; border: 2px solid; border-radius: 1%;"></div>
                  <div class="border-2-2 text-primary absolute h-full border border-primary" style="left: 50%; border: 2px solid; border-radius: 1%;"></div>
                  <div ref="bacText" class="opacity-0 mb-8 mt-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-primary">2022</p>
                      <h4 class="mb-3 font-movementBlack text-lg md:text-2xl">{{ $t("timeline-bac-title") }}</h4>
                      <p v-html="$t('timeline-bac-description')" class="text-sm md:text-base leading-snug text-gray-50 dark:text-gray-300 text-opacity-100"></p>
                    </div>
                  </div>
                  <div ref="butText" class="opacity-0 mb-8 mt-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-primary">1<sup>er</sup> Septembre 2022</p>
                      <h4 class="mb-3 font-movementBlack text-lg md:text-2xl">{{ $t("timeline-but-title") }}</h4>
                      <div class="text-sm md:text-base leading-snug text-gray-50 dark:text-gray-300 text-opacity-100">
                        <p>
                          {{ $t("timeline-but-description") }}
                        </p>
                        <ul>
                          <li><p v-html="$t('timeline-but-sub-description')"></p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div ref="stage1Text" class="opacity-0 mb-8 mt-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-primary">8 Avril - 31 Juin, 2024</p>
                      <h4 class="mb-3 font-movementBlack text-lg md:text-2xl">{{ $t("timeline-stage-truetourism-title") }}</h4>
                      <p class="text-sm md:text-base leading-snug text-gray-50 dark:text-gray-300 text-opacity-100">
                        <span v-html="$t('timeline-stage-truetourism-description-first-part')"></span>
                        <CustomLink link="https://www.truetourism.fr" class="text-gray-50 dark:text-gray-300">TrueTourism</CustomLink>
                        <span v-html="$t('timeline-stage-truetourism-description-second-part')"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div id="projects"></div>
    <section class="max-w-screen-xl mx-auto mt-28 w-full px-4">
      <h2 ref="titleProjects" class="font-kineticLight text-4xl font-extrabold mb-5">{{ $t("section-title-projects") }}</h2>
      <div ref="tagGroup" class="opacity-0 mb-4">
        <h2 class="font-kineticLight font-bold text-xl mb-2">Filter by Tags</h2>
        <div ref="tagList" class="flex flex-wrap gap-2">
          <button
              v-for="tag in uniqueTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="{
            'bg-blue-500 text-white': selectedTags.includes(tag),
            'bg-gray-200 text-gray-700 dark:bg-zinc-600 dark:text-tertiary': !selectedTags.includes(tag)
          }"
              class="px-3 py-1 rounded-full font-semibold cursor-pointer transition-colors duration-300"
          >
            #{{ tag }}
          </button>
        </div>
      </div>
      <div class="px-4 py-5 ">
        <div ref="projectList" class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
              v-for="(project, index) in filteredProjects"
              :key="index"
              :image="project.image"
              :title="project.title"
              :description="project.description"
              :years="project.years"
              :tags="project.tags"
              :route="project.route"
          />
        </div>
      </div>
    </section>
    <div id="stages"></div>
    <section class="max-w-screen-xl mx-auto mt-28 w-full px-4">
      <h2 ref="titleStages" class="font-kineticLight text-4xl font-extrabold mb-5 text-center">{{ $t("section-title-stages") }}</h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 text-justify font-kineticLight text-lg">
          <p>
            {{ $t("carousel_here") }}
          </p>
        </div>
        <div class="w-full md:w-1/2 text-center font-kineticLight text-lg">
          <p>test</p>
        </div>
      </div>
    </section>
    <div id="contactMe"></div>
    <section class="max-w-screen-xl mx-auto mt-28 w-full px-4">
      <h2 ref="titleContact" class="font-kineticLight text-4xl font-extrabold mb-5 text-center">{{ $t("section-title-contact") }}</h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 text-justify font-kineticLight text-lg">
          <p>
            {{ $t("contact_form_here") }}
          </p>
        </div>
        <div class="w-full md:w-1/2 text-center font-kineticLight text-lg">
          <p>test</p>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>

.negative-margin-1 {
  margin-top: -0.35rem;
}

.mouseDown {
  font-size: 0.9em;
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
