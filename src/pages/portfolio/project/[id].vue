<!-- pages/portfolio/project/[id].vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PROJECT_LIST, type Project } from '~/server/services/projects';

const route = useRoute();

const loading = ref(true);

const project = ref<Project | null>(null);

onMounted(() => {
  const projectId = parseInt(route.params.id as string, 10);

  const projects = Object.values(PROJECT_LIST);
  project.value = projects[projectId] || null;

  loading.value = false;
});

const redirectTo = () => {
  navigateTo(`${project.value?.githubLink}`, { external: true })
};

</script>

<template>
  <div v-if="loading" class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl mt-32 min-h-screen mx-auto text-lg">
    <div class="flex justify-center items-center min-h-screen">
      <p>Loading...</p>
    </div>
  </div>
  <div v-else-if="project" class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl mt-32 min-h-screen mx-auto text-lg">
    <section class="mb-10">
      <div class="pb-24">
        <h1 class="text-4xl text-start font-extrabold">{{ $t(project.title) }}</h1>
        <p class="text-lg">{{ $t(project.description) }}</p>
        <button v-if="project.githubLink" @click="redirectTo" class="flex flex-row gap-2 items-center mt-2 p-1 transition-all duration-200 border text-black border-gray-20 pr-2 rounded-lg hover:text-white hover:bg-black">
          <Icon name="skill-icons:github-dark" size="22" /> Open in GitHub
        </button>
      </div>

      <div class="flex justify-center w-full">
        <img v-if="!project.videoPath" class="w-2/3" :src="project.image.imageUrl" :alt="$t(project.image.alt)" />
        <video
            v-else
            class="w-2/3 rounded-lg"
            autoplay
            loop
            muted
            playsinline
        >
          <source :src="project.videoPath" type="video/mp4">
          {{ $t('video-not-working') }}
        </video>
      </div>
    </section>

    <section v-html="$t(project.content)" />
    <section id="introduction">
      <h2 class="font-kineticRegular text-3xl text-start font-extrabold mb-5">Introduction</h2>
      <p class="text-justify" >
        Aillant toujours été passionné de jeux vidéo depuis mon plus jeune age, j'ai décidé, en 2022 de créer un jeux. Étant fan des jeux 2D (pokémon et zelda aillant bercé mon enfance),
        je décide donc de créer un jeux. Je ne savais pas par où commencer parce que je ne connaissait presque pas la programmation à cette époque. En revanche, ce que je savais, c'était que je voulais créer
        un jeux dans lequel je pourrais retrouver l'ambiance des anciens Pokémons et des Zeldas. Comme j'avais déjà une petite connaissance du C# à cette époque, je suis tombé assez rapidement sur le framework
        <a class="text-color-transition text-blue-500 underline dark:hover:text-blue-400 hover:text-blue-400" href="https://monogame.net/">Monogame</a> (anciennement XNA), framework qui a été utilisé pour le développement de Terraria et Stardiew-Valley. J'ai ensuite commencé à me documenter
        sur ce framework à l'aide de vidéos youtube bien que peu nombreuse ainsi que sur l'architecture à apporter pour faire tourner un jeux en partant de zéro. C'est ici que commence réellement mon projet.
      </p>
    </section>
    <section id="developpement">
      <h2 class="font-kineticRegular text-3xl text-start font-extrabold mt-10 mb-5">Développement</h2>
      <div class="text-justify">
        <h3 class="font-kineticRegular text-2xl text-start font-extrabold mb-2">Moteur de jeux</h3>
        <p>
          J'ai commencé par créer l'architecture du jeux basé sur un système d'écran (que j'appel des pages) c'est à dire qu'il y a une class qui manage mes écrans, elle définit quel écran afficher ou non.
          Elle gère le rafraichissement de l'écran en conséquence. Ensuite chaque page possède son propre <span style="background-color: lightgray; padding: 3px 5px 3px 5px; border-radius: 3px">Object Manager</span>.
          C'est une class qui gère le les éléments à afficher sur l'écran. C'est ici que s'arrête la première conception de mon moteur de jeux. J'ai ensuite poursuivit sur le développement d'un joueur.
        </p>

        <h3 class="font-KineticRegular text-2xl text-start font-extrabold mt-5 mb-2">Joueur</h3>
        <p>
          Le but était ensuite de développer un joueur pour se promener dans l'écran. Plusieurs défis se posaient à moi.
          Créer un système pour jouer des animations à l'aide d'une spritesheet, avoir une caméra pour suivre mon joueur,
          un systeme d'endurance et de vie, gérer les keybinds...
          Une multitude de chose se proposait à moi. J'ai donc commencer par rendre une spritesheet.
        </p>

        <h3 class="font-kineticRegular text-2xl text-start font-extrabold mt-5 mb-2">spritesheet manager</h3>
        <p>
          Je ne suis pas arrivé à ce résultat tout de suite mais quand j'ai commencé à implémenter les tiles composants l'environnement,
          je me suis dit que créer un manager pour gérer quelles sprites afficher serait efficace. Donc j'ai créer ce tilesManager
        </p>
      </div>
    </section>
  </div>
  <div v-else class="text-lg">
    <p>Project not found</p>
  </div>
</template>

<style scoped>
/* Ajoutez votre style ici si nécessaire */
</style>
