<template>
  <div
    v-if="isActive"
    class="l-tab"
    :class="pharosClass('Tab', props.class)"
    v-bind="visibleAttrs"
    :data-active="isActive"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

interface TabProps extends BaseProps {
	value: String
} 

const props = defineProps<TabProps>()

defineOptions({
  	inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const tabs = inject('tabs') as {
  	active: Ref<string>
}

const isActive = computed(() => {
  	return tabs.active.value === props.value 
})
</script>
