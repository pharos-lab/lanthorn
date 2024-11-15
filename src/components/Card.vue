<template>
    <div class="l-card" :class="classes">
        <AspectRatio ratio="16/9" class="-mx-4 mb-4" v-if="props.img">
            <img :src="props.img" :alt="props.alt" srcset="">
        </AspectRatio>
   
        <div class="l-card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, } from 'vue'
import AspectRatio from '@/components/AspectRatio.vue'

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'light',
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
        default: false
    },
    shadow: {
        type: Boolean,
        default: true
    },
    img: String,
    alt: String
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    return getClasses(props, 'card')
})
</script>