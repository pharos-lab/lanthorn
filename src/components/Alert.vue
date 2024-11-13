<template>
    <Transition name="fade">
        <div class="l-alert relative shadow" :class="classes" v-show="isOpen">
            <component :is="Heroicons['XCircleIcon']" 
            class="size-6 absolute right-2 top-2 cursor-pointer" 
            v-if="props.dismissable"
            @click="isOpen = false"
            ></component>
            
            <div class="l-alert-content flex gap-4">
                <component :is="Heroicons[props.icon]" class="size-8 shrink-0"></component>
                <div class="l-alert-text grow">    
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
import { inject, ref, computed, useSlots } from 'vue'

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

const getClasses = inject('getClasses')

const classes = computed(() => {
    return getClasses(props, 'alert')
})

const isOpen = ref(true)

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>