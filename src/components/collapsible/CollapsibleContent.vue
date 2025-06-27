<template>
    <div
        ref="inner"
        class="l-collapsible-content-wrapper overflow-hidden"
        :style="{ maxHeight: heightStyle }"
        :data-expanded="collapsible?.isOpen.value"
        >
        <div 
            :data-expanded="collapsible?.isOpen.value"
            v-bind="visibleAttrs"
            class="l-collapsible-content"
            :class="pharosClass('CollapsibleContent', props.class)"
        >
          <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, computed, ref, type Ref, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const collapsible = inject<{
    isOpen: Ref<boolean>,
    toggle: () => void
}>('collapsible')
    
const { visibleAttrs, pharosClass } = usePharosComponent()

const inner = ref()

const heightStyle = computed(() => {
    return collapsible?.isOpen.value ? inner.value?.scrollHeight + 'px'  : '0px'
})
</script>

<style scoped>

</style>