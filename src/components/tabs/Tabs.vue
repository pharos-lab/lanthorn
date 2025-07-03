<template>
  <div
    class="l-tabs flex"
    :class="[orientationClass, pharosClass('Tabs', props.class)]"
    :data-orientation="props.orientation"
    v-bind="visibleAttrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import { useOpenable } from '../../composables/useOpenable';
import type { BaseProps, OpenableEmits } from '../../types';

interface TabsProps extends BaseProps {
	orientation?: 'horizontal' | 'vertical',
	defaultValue?: string
}
const props = defineProps<TabsProps>()

const emits = defineEmits<OpenableEmits>()

defineOptions({
	inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const { open, active } = useOpenable({emits, defaultValue: props.defaultValue})

defineExpose({ active, open })

provide('tabs', {
	active,
	open,
	orientation: props.orientation ?? 'horizontal',
})

const orientationClass = computed(() => {
	return props.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
})
</script>
