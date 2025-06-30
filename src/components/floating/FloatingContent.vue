<template>
    <Transition :name="transitionName">
        <div 
            v-show="floating?.isOpen.value"
            class="absolute z-50 l-floating-content min-w-max"
            :class="[placementClasses, pharosClass('FloatingContent', props.class)]"
            :style="{ transitionDelay: floating?.props.delay + 'ms' }"
            :data-open="floating?.isOpen.value"
            v-bind="visibleAttrs"
        >
            <slot></slot>
        </div>
  </Transition>
</template>

<script setup lang="ts">
import { inject, computed, type Ref, type HTMLAttributes } from 'vue'

import { getPlacementClass, getTransitionName } from './utils.js'
import { usePharosComponent } from '../../composables/usePharosComponent.js'

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

const floating = inject<{
     isOpen: Ref, 
     toggle: () => void, 
     close: () => void, 
     open: () => void, 
     props: any
}>('floating')

const placementClasses = computed(() => getPlacementClass(floating?.props.placement))
const transitionName = computed(() => getTransitionName(floating?.props.placement))

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>

<style scoped>
.fade-slide-down-enter-active, 
.fade-slide-down-leave-active,
.fade-slide-up-enter-active, 
.fade-slide-up-leave-active,
.fade-slide-right-enter-active, 
.fade-slide-right-leave-active,
.fade-slide-left-enter-active, 
.fade-slide-left-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-down-enter-from, 
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(10px);
}



.fade-slide-up-enter-from, 
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-right-enter-from, 
.fade-slide-right-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-left-enter-from, 
.fade-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}


</style>