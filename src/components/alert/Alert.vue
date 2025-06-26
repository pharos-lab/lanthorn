<template>
  <Transition>
    <div
      v-show="isOpen"
      class="l-alert"
      :class="pharos?.getClass('alert', attrs, props.class)"
      v-bind="visibleAttrs"
    >
      <X
        v-if="attrs.dismissible !== false"
        class="float-right cursor-pointer rounded"
        @click="isOpen = false"
      />
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { inject, ref, type HTMLAttributes } from 'vue'
import { X } from 'lucide-vue-next'
import { useStyleAttrs } from '../../composables/useStyleAttrs'
import type { Pharos } from '../../types'

const pharos = inject<Pharos>('pharos')
const props = defineProps<{ 
    class?: HTMLAttributes['class']
    [key: string]: string | Boolean | undefined
}>()
const isOpen = ref(true)
const { attrs, visibleAttrs } = useStyleAttrs(pharos)

defineOptions({
  inheritAttrs: false
})
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
