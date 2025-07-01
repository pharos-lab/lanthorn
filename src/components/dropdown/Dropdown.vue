<template>
    <Floating 
        trigger="click" 
        class="l-dropdown" 
        :class="pharosClass('Dropdown', props.class)"
        v-bind="visibleAttrs"
        ref="floatingRef"
    >
      <slot></slot>
    </Floating>
</template>

<script setup lang="ts">
import { useTemplateRef, type HTMLAttributes } from 'vue';
import { Floating } from '../floating'
import { usePharosComponent } from '../../composables/usePharosComponent';

const floatingRef = useTemplateRef('floatingRef')

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineExpose({
  open: () => floatingRef.value?.open(),
  close: () => floatingRef.value?.close(),
  toggle: () => floatingRef.value?.toggle(),
  isOpen: floatingRef.value?.isOpen,
})

defineOptions({
  inheritAttrs: false
})
const { visibleAttrs, pharosClass } = usePharosComponent()

</script>