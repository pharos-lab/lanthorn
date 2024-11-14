<template>
    <Teleport :to="props.teleport">
        <div class="l-modal-overlay fixed inset-0 flex justify-center items-start pt-56 bg-slate-400/50 z-50" @click.self="closeModal">
            <div class="l-modal p-8 rounded shadow" :class="classes">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>

import { inject, computed } from 'vue'

const props = defineProps({
    teleport: {
        type: String,
        default: 'body'
    },
    color: {
        type: String,
        default: 'white'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    size: {
        type: String,
        default: 'large',
        validator: value => ['small', 'medium', 'large', 'extra-large'].includes(value),
    },    
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    return getClasses(props, 'modal')
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

</script>

<style scoped>
.l-modal-overlay {
  animation: fadeIn 0.4s ease-in-out;
}
.l-modal {
  animation: slideIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>