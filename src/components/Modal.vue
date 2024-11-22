<template>
    <Teleport :to="props.teleport">
        <div class="l-modal-overlay fixed inset-0 flex bg-slate-400/50 z-50" @click.self="closeModal" :class="overlayPositionClass">
            <div class="l-modal rounded shadow" :class="classes">
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
        validator: value => ['small', 'medium', 'large', 'extra-large'].includes(value),
    },    
    position: {
      type: String,
      default: 'center',
      validator(value) {
        return [
          'top-left', 'top', 'top-right',
          'center-left', 'center', 'center-right',
          'bottom-left', 'bottom', 'bottom-right',
        ].includes(value);
      },
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

const overlayPositionClass = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'justify-start items-start pt-6 pl-6';
    case 'top':
      return 'justify-center items-start pt-6';
    case 'top-right':
      return 'justify-end items-start pt-6 pr-6';
    case 'center-left':
      return 'justify-start items-center pl-6';
    case 'center':
      return 'justify-center items-center';
    case 'center-right':
      return 'justify-end items-center pr-6';
    case 'bottom-left':
      return 'justify-start items-end pb-6 pl-6';
    case 'bottom':
      return 'justify-center items-end pb-6';
    case 'bottom-right':
      return 'justify-end items-end pb-6 pr-6';
    default:
      return 'justify-center items-center';
  }
});

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