<template>
<button class="py-2 px-3 font-semibold" :class="[backgroundClass, borderRadiusClass]" >
    <slot></slot>
</button>
</template>

<script setup>
import { computed, inject } from 'vue'

const theme = inject('theme')

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    rounded: {
        type: String,
        default: 'base'
    }
})

const backgroundClass = computed(() => {
    if (props.variant == 'outline' || props.variant == 'text') {
        return theme.colors.text[props.color] + ' border border-2 border-current'
    }
    return theme.colors.background[props.color][props.variant]
})

const borderRadiusClass = computed(() => {
    return theme.borderRadius[props.rounded]
})
</script>