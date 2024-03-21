<template>
    <component 
    :is="tag" 
    :href="props.href ?? null"
    class="l-button px-3 py-2"
    >
        <slot></slot>
    </component>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'blue',
        validator(value) {
        // The value must match one of these strings
        return ['gray', 'red', 'orange', 'yellow', 'blue', 'primary', 'secondary'].includes(value);
        },
    },
    mode: {
        type: String,
        default: 'fill',
        validator(value) {
        // The value must match one of these strings
        return ['none', 'fill', 'light', 'outlined'].includes(value);
        },
    },
    rounded: {
        type: String,
        validator(value) {
        // The value must match one of these strings
        return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'].includes(value);
        },
    },
    hover: {
        type: Boolean,
        default: true,
    },
    focus: String,
    href: String
})

const tag = computed(() => {
    return props.href ? 'a' : 'button'
})
</script>