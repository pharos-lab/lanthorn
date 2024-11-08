<template>
<button class="l-button py-2 px-3 font-semibold transition-all duration-200 ease-in-out" :class="[backgroundClass, borderRadiusClass, hoverClass, shadowClass]" >
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
    },
    hover: {
        type: Boolean,
        default: true
    },
    shadow: {
        type: Boolean,
        default: false
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

const hoverClass = computed(() => {
    return props.hover ? theme.colors.background.hover[props.color][props.variant] : null
})

const shadowClass = computed(() => {
    return props.shadow ? 'shadow' : null
})
</script>