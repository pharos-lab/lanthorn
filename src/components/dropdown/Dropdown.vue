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
import { useTemplateRef } from 'vue';
import { Floating } from '../floating'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const floatingRef = useTemplateRef('floatingRef')

const props = defineProps<BaseProps>()

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