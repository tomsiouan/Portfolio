<script setup lang="ts">
import { defineProps, ref, watch, nextTick } from 'vue';
import { type ToastType, ToastTypes } from '~/composables/useToast';
import SuccessPrimerToast from '~/components/toasts/successPrimerToast.vue';
import InfoPrimerToast from '~/components/toasts/infoPrimerToast.vue';
import WarningPrimerToast from '~/components/toasts/warningPrimerToast.vue';
import ErrorPrimerToast from '~/components/toasts/errorPrimerToast.vue';

interface Toast {
  id: number;
  type: ToastType;
  message: string;
  closing: boolean;
}

const props = defineProps<{
  toasts: Toast[];
}>();

const toastElements = ref<(HTMLElement | null)[]>([]);

const getToastComponent = (type: ToastType) => {
  switch (type) {
    case ToastTypes.success:
      return SuccessPrimerToast;
    case ToastTypes.info:
      return InfoPrimerToast;
    case ToastTypes.warning:
      return WarningPrimerToast;
    case ToastTypes.error:
      return ErrorPrimerToast;
  }
};

const applyAnimation = (toast: Toast, element: HTMLElement | null) => {
  if (!element) return;

  if (toast.closing) {
    element.classList.add('animate-blurSlideToLeft');
    element.addEventListener('animationend', () => {
      element.classList.remove('animate-blurSlideToLeft');
      element.classList.add('opacity-0');
      setTimeout(() => {
        const index = props.toasts.findIndex(t => t.id === toast.id);
        if (index !== -1) {
          props.toasts.splice(index, 1);
        }
      }, 100);
    }, { once: true });
  } else {
    element.classList.add('animate-blurSlideFromRight');
    element.addEventListener('animationend', () => {
      element.classList.remove('animate-blurSlideFromRight');
      element.classList.add('opacity-100');
    }, { once: true });
  }
};

watch(
    () => props.toasts,
    async (newToasts) => {
      await nextTick();
      newToasts.forEach((toast, index) => {
        const element = toastElements.value[index];
        if (element) {
          applyAnimation(toast, element);
        }
      });
    },
    { deep: true }
);
</script>

<template>
  <div class="fixed top-20 right-5 space-y-2 z-50 pt-5">
    <template v-for="(toast, index) in props.toasts" :key="toast.id">
      <div ref="toastElements">
        <component
            :is="getToastComponent(toast.type)"
            :message="toast.message"
            :class="{
            'animate-blurSlideFromRight': !toast.closing,
            'animate-blurSlideToLeft': toast.closing,
            'opacity-0': toast.closing,
            'opacity-100': !toast.closing,
          }"
            @close="() => $emit('closeToast', index)"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
