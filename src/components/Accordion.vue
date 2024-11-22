<template>
    <div class="l-accordion">
        <template v-for="(child, index) in childComponents" :key="index">
            <component
                :is="child"
                :index="index"
            />
        </template>
    </div>
</template>

<script setup>
import { provide, reactive, useSlots, computed } from 'vue';

const props = defineProps({
    color: { type: String, default: 'primary' },
    variant: { type: String, default: 'light' },
    multiple: { type: Boolean, default: false },
    defaultIndex: { type: [Number, Array], default: () => [] },
});

const slots = useSlots()

const expandedIndex = reactive(
    Array.isArray(props.defaultIndex)
        ? [...props.defaultIndex]
        : [props.defaultIndex]
);

const toggleItem = (index) => {
    if (props.multiple) {
        if (expandedIndex.includes(index)) {
            expandedIndex.splice(expandedIndex.indexOf(index), 1);
        } else {
            expandedIndex.push(index);
        }
    } else {
        expandedIndex.splice(0, expandedIndex.length, index === expandedIndex[0] ? null : index);
    }
};

// Provide state and toggle function to child components
provide('accordion', {
    expandedIndex,
    toggleItem,
    color: props.color,
    variant: props.variant,
});

const childComponents = computed(() =>
    Array.isArray(slots.default()) ? slots.default() : [slots.default()]
);
</script>
