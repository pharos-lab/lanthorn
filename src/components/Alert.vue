<template>
    <div class="l-alert relative p-5 shadow">
        <component :is="Heroicons['XCircleIcon']" class="size-6 float-right"></component>
        <div class="l-alert-content flex gap-4">
            <component :is="Heroicons[props.icon]" class="size-8 "></component>
            <div class="l-alert-text">    
                <h4 class="font-semibold text-lg mb-4">
                    {{ props.title }}
                </h4>
                
                <p class="">{{  props.description }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import * as Heroicons  from '@heroicons/vue/24/outline'

const props = defineProps({
    title: String,
    description: String,
    icon: String
})
</script>