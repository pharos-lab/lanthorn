<template>
<button class="py-2 px-3 font-semibold" :class="backgroundClass" >
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
    }
})

const backgroundClass = computed(() => {
    if (props.variant == 'outline' || props.variant == 'text') {
        return theme.colors.text[props.color] + ' border border-2 ' + theme.colors.border[props.color]
    }
    return theme.colors.background[props.color][props.variant] || ''
})
</script>