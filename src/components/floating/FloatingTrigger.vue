<template>
    <div 
        class="l-floating-trigger"
        :class="pharosClass('FloatingTrigger', props.class)"
        v-on="listeners"
        :data-open="floating?.isOpen.value"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

const floating = inject<{
     isOpen: Ref, 
     toggle: () => void, 
     close: () => void, 
     open: () => void, 
     props: any
}>('floating')

// Dynamically assign event listeners based on trigger type
const listeners = computed(() => {
  if (floating?.props.trigger === 'click') {
    return { click: floating?.toggle }
  } else if (floating?.props.trigger === 'hover') {
    return {
      mouseenter: floating?.open,
      mouseleave: floating?.close
    }
  }
  return {}
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>

<style scoped>

</style>