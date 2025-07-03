<template>
    <div 
        class="l-dialog-trigger inline-block" 
        :data-open="dialog?.isOpen.value" 
        @click="dialog?.open" 
        :class="pharosClass('DialogTrigger', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const dialog = inject<{
  isOpen: Ref<boolean>,
  toggle: () => void,
  open: () => void

}>('dialog')
</script>

<style scoped>
/* Ajouter des styles pour le bouton déclencheur */
</style>
  