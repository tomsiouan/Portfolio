<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import Hls from 'hls.js';

const props = defineProps<{
  src: string,
  autoplay?: boolean,
  muted?: boolean,
  loop?: boolean,
  controls?: boolean,
  playsInline?: boolean
}>();

const video = ref();

onMounted(() => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(props.src);
    hls.attachMedia(video.value);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.value.play();
    });
  }
});

watch(() => props.src, (newSrc) => {
  if (video.value) {
    video.value.src = newSrc;
    if (props.autoplay) {
      video.value.play();
    }
  }
});
</script>

<template>
  <video
      ref="video"
      :autoplay="props.autoplay"
      :muted="props.muted"
      :loop="props.loop"
      :controls="props.controls"
      :playsinline="props.playsInline"
  >
    {{ $t('video-not-working') }}
  </video>
</template>
