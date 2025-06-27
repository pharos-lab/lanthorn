<template>
    <div
        ref="inner"
        class="l-collapsible-content overflow-hidden transition-all duration-500 ease-in-out"
        :class="pharosClass('CollapsibleContent', props.class)"
        :style="{ maxHeight: heightStyle }"
        :data-expended="collapsible?.isOpen.value"
        v-bind="visibleAttrs"
      >
          <slot></slot>
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