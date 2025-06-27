<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button"
        :class="pharosClass('Button', props.class)"
        v-bind="visibleAttrs"
        
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="pharosClass('button', props.class)"
        class="l-button"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
    href?: string,
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>