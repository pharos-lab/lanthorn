<template>
    <div class="l-card overflow-hidden" :class="classes">
        <AspectRatio ratio="16/9" v-if="props.img" class="relative overflow-auto shrink-0" :class="imgDimensionClass">
            <img :src="props.img" :alt="props.alt" class="object-cover w-full max-h-full" >
        </AspectRatio>
   
        <div class="l-card-content grow" :class="getClass(props, 'card', 'padding')">
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
    alt: String,
    imgPosition: {
        type: String,
        default: 'top',
        validator(value) {
            return ['top', 'bottom', 'left', 'right'].includes(value)
        }
    },
    imgSize: {
        type: String,
        default: 'w-1/4',
    }
})

const getClasses = inject('getClasses')
const getClass = inject('getClass')

const classes = computed(() => {
    if(props.img) {
        let imgPosition = ' '
        switch(props.imgPosition) {
            case 'bottom':
                imgPosition += 'flex gap-4 flex-col-reverse'
                break
            case 'top':
                imgPosition += 'flex gap-4 flex-col'
                break
            case 'left': 
                imgPosition += 'flex gap-4 flex-row ' + props.imgSize
                break
            case 'right': 
                imgPosition += 'flex gap-4 flex-row-reverse ' + props.imgSize
                break
            
        }
        return getClasses(props, 'button', {exclude: ['padding'], }) + ' ' + imgPosition
    }
    return getClasses(props, 'card', {exclude: ['padding'], })
})

const imgDimensionClass = computed(() =>{
    
    if (props.imgPosition ==  'left') {
        return props.imgSize
    }

    if (props.imgPosition ==  'right') {
        return props.imgSize
    }
})
</script>