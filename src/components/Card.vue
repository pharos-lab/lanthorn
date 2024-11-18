<template>
    <div class="l-card overflow-hidden" :class="classes">
        <AspectRatio ratio="16/9" v-if="props.img" :class="marginClass" class="relative overflow-auto">
            <img :src="props.img" :alt="props.alt" class="object-cover" :class="imgDimensionClass">
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
    alt: String,
    imgPosition: {
        type: String,
        default: 'top',
        validator(value) {
            return ['top', 'bottom', 'left', 'right'].includes(value)
        }
    }
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    if(props.img) {
        let imgPosition = 'flex gap-4 '
        switch(props.imgPosition) {
            case 'bottom':
                imgPosition += 'flex-col-reverse'
                break
            case 'top':
                imgPosition += 'flex-col'
                break
            case 'right':
                imgPosition += 'flex-row-reverse'
                break
        }
        console.log(imgPosition)
        return [...getClasses(props, 'card'), imgPosition]
    }
    return getClasses(props, 'card')
})

const marginClass = computed(() =>{
    if (props.imgPosition ==  'top') {
        return '-mx-4 -mt-4' 
    }

    if (props.imgPosition ==  'bottom') {
        return '-mx-4 -mb-4' 
    }

    if (props.imgPosition ==  'left') {
        return '-my-4 -ml-4' 
    }

    if (props.imgPosition ==  'right') {
        return '-my-4 -mr-4' 
    }
})

const imgDimensionClass = computed(() =>{
    if (props.imgPosition ==  'top') {
        return 'w-full max-h-full' 
    }

    if (props.imgPosition ==  'bottom') {
        return 'w-full max-h-full' 
    }

    if (props.imgPosition ==  'left') {
        return 'w-full h-full' 
    }

    if (props.imgPosition ==  'right') {
        return 'w-full h-full' 
    }
})
</script>