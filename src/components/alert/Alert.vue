<template>
  <Transition>
    <div
      v-show="isOpen"
      class="l-alert"
      :class="pharosClass('Alert', props.class)"
      v-bind="visibleAttrs"
    >
      <X
        v-if="props.dismissable"
        class="float-right cursor-pointer rounded"
        @click="isOpen = false"
      />
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

interface AlertProps extends BaseProps {
  dissmisable?: boolean
} 

const props = withDefaults(defineProps<AlertProps>(), { dismissable: () => true })

const isOpen = ref(true)

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
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
