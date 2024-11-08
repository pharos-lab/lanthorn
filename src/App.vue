<template>
    <div class="p-4 flex flex-col gap-8 items-start">
        <Button variant="base" color="primary" rounded="pill">Submit from</Button>
        <Alert color="success" variant="outline" icon="InformationCircleIcon" closable="" >
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
        </Alert>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from './components/Alert.vue';
import AlertTitle from './components/AlertTitle.vue';
import AlertDescription from './components/AlertDescription.vue';
</script>



<style scoped>

</style>
