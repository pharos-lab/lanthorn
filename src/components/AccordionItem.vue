<template>
    <div class="l-accordion-item">
        <!-- Header -->
        <component
            :is="$slots.default()[0]"
            v-if="$slots.default()[0] && $slots.default().length > 1"
            @click="toggle"
        ></component>

        <div 
            class="l-accordion-header cursor-pointer font-semibold p-4"
            :class="{ 'text-primary': isExpanded }"
            @click="toggle"
            v-if="props.label"
        >
            {{ props.label }}
        </div>

        <!-- Collapsible Content -->
        <transition name="accordion-item">
            <div 
                class="accordion-content overflow-hidden transition-all duration-1000"
                v-show="isExpanded"
                >
                <component
                :is="$slots.default()[1]"
                v-if="$slots.default()[1] && $slots.default()[1]"
                ></component>
                <slot v-else></slot>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    index: Number
});

const { expandedIndex, toggleItem } = inject('accordion');

const isExpanded = computed(() => expandedIndex.includes(props.index));
const toggle = () => toggleItem(props.index);
</script>

<style>
/* Define custom transition classes */
.accordion-item-enter-active,
.accordion-item-leave-active {
  transition: opacity 1s ease-in-out;
}

.accordion-item-enter-from, 
.accordion-item-leave-to {
  opacity: 0;
}


</style>