<template>
    <Transition name="fade">
        <div class="l-alert relative p-5 shadow" :class="[backgroundClass, shadowClass]" v-show="isOpen">
            <component :is="Heroicons['XCircleIcon']" 
            class="size-6 float-right cursor-pointer" 
            v-if="props.dismissable"
            @click="isOpen = false"
            ></component>
            
            <div class="l-alert-content flex gap-4">
                <component :is="Heroicons[props.icon]" class="size-8"></component>
                <div class="l-alert-text">    
                    <h4 class="font-semibold text-lg mb-4" v-if="props.title">
                        {{ props.title }}
                    </h4>
                    
                    <p class="leading-snug" v-if="props.description">{{  props.description }}</p>
                    <slot></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>


<script setup>
import * as Heroicons  from '@heroicons/vue/24/outline'
import { inject, computed, ref } from 'vue'

const theme = inject('theme')

const props = defineProps({
    title: String,
    description: String,
    icon: String,
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline'].includes(value)
        }
    },
    shadow: {
        type: Boolean,
        default: true
    },
    dismissable: {
        type: Boolean,
        default: true
    }
})

const isOpen = ref(true)

const backgroundClass = computed(() => {
    if (props.variant == 'outline' || props.variant == 'text') {
        return theme.colors.text[props.color] + ' border border-2 border-current'
    }
    return theme.colors.background[props.color][props.variant]
})

const shadowClass = computed(() => {
    return props.shadow ? 'shadow' : null
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>