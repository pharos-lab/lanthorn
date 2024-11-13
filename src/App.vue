<template>
    <div class="p-4 flex flex-col gap-8 items-start">
        <Button variant="base" color="primary" rounded="base" @click="openModal = true">Open Modal</Button>
        <Alert color="success" variant="outline" icon="InformationCircleIcon" closable="" >
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
            <AlertActions>
                <AlertAction color="secondary" variant="light">Cancel</AlertAction>
                <AlertAction color="danger" @click="console.log('ok')">Confirm</AlertAction>
            </AlertActions>
        </Alert>

        <Modal teleport="#app" v-if="openModal" @close="openModal = false">
            <ModalHeader>Lorem ipsum dolor, sit amet consectetur adipisicing.</ModalHeader>
            <ModalBody>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, doloribus harum tenetur nesciunt aperiam debitis.</ModalBody>
            <ModalActions>
                <ModalAction variant="light">Cancel</ModalAction>
                <ModalAction color="success">Confirm</ModalAction>
            </ModalActions>
        </Modal>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from '@/components/Alert.vue';
import AlertTitle from '@/components/AlertTitle.vue';
import AlertDescription from '@/components/AlertDescription.vue';
import AlertActions from '@/components/AlertActions.vue';
import AlertAction from '@/components/AlertAction.vue';
import Modal from '@/components/Modal.vue'

import { ref } from 'vue'

const openModal = ref(false)
</script>



<style scoped>

</style>
