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
        :class="pharosClass('Button', props.class)"
        class="l-button"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

interface ButtonProps extends BaseProps {
  href?: string
} 

const props = defineProps<ButtonProps>()


defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>