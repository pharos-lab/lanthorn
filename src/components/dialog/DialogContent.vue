<template>
    <Transition>
        <div 
            v-if="dialog?.isOpen.value" 
            class="l-dialog-overlay fixed inset-0 bg-black/50 z-50 flex items-center justify-center m-0"
            @click.self="dialog?.close"
            @keyup.esc="dialog?.close"
            tabindex="0"
            :data-open="dialog?.isOpen.value"
        >
            <div 
                :data-open="dialog?.isOpen.value"
                class="l-dialog-content bg-white rounded" 
                :class="pharosClass('DialogContent', props.class)"
                v-bind="visibleAttrs"
            >
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>
  
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const dialog = inject<{
  isOpen: Ref<boolean>,
  toggle: () => void,
  open: () => void,
  close: () => void

}>('dialog')  

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
  