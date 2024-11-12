<template>
<button class="l-button font-semibold transition-all duration-200 ease-in-out" 
    :class="classes" >
    <slot></slot>
</button>
</template>

<script setup>
import { computed, inject } from 'vue'



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

const getClasses = inject('getClasses')

const classes = getClasses(props, 'button')
</script>