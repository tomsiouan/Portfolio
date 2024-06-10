// composables/useToast.ts
import { ref } from 'vue';

export type ToastType = ToastTypes.success | ToastTypes.info | ToastTypes.warning | ToastTypes.error;

export enum ToastTypes {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface Toast {
    id: number;
    type: ToastType;
    message: string;
    closing: boolean;
}

const toasts = ref<Toast[]>([]);

export const useToast = () => {
    const addToast = (type: ToastType, message: string) => {
        const id = Date.now();
        toasts.value.push({ id, type, message, closing: false });

        setTimeout(() => {
            closeToastById(id);
        }, 2000); // Toast display duration
    };

    const closeToastById = (id: number) => {
        const index = toasts.value.findIndex((toast) => toast.id === id);
        if (index !== -1) {
            toasts.value[index].closing = true;
            setTimeout(() => {
                toasts.value.splice(index, 1);
            }, 300); // Duration for the fade-out transition
        }
    };

    const closeToast = (index: number) => {
        toasts.value[index].closing = true;
        setTimeout(() => {
            toasts.value.splice(index, 1);
        }, 300); // Duration for the fade-out transition
    };

    return { toasts, addToast, closeToast };
};
