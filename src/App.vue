<template>
    <div class="p-4 flex flex-col gap-8 items-start">
        <Button variant="base" color="primary" rounded="pill">Submit from</Button>
        <Alert color="primary" variant="base" icon="InformationCircleIcon" closable="" title="lorem ipsum dolor sit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit">
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
        </Alert>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from './components/Alert.vue';
</script>



<style scoped>

</style>
