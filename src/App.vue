<template>
    <div class="p-4 flex flex-col gap-8 items-start">
        <Button variant="base" color="primary" rounded="base" @click="openModal = true" icon="PencilSquareIcon" iconPosition="bottom">Open Modal</Button>

        <Alert color="success" variant="outline" icon="InformationCircleIcon" closable="" >
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
            <Actions>
                <Button color="secondary" variant="light">Cancel</Button>
                <Button color="danger" @click="console.log('ok')">Confirm</Button>
            </Actions>
        </Alert>

        <Modal teleport="#app" v-if="openModal" @close="openModal = false">
            <ModalTitle>Lorem ipsum dolor, sit amet consectetur adipisicing.</ModalTitle>
            <ModalDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, doloribus harum tenetur nesciunt aperiam debitis.</ModalDescription>
            <Actions>
                <Button variant="light">Cancel</Button>
                <Button color="success">Confirm</Button>
            </Actions>
        </Modal>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from '@/components/Alert.vue';
import AlertTitle from '@/components/AlertTitle.vue';
import AlertDescription from '@/components/AlertDescription.vue';
import Actions from '@/components/Actions.vue';
import Modal from '@/components/Modal.vue'
import ModalTitle from '@/components/ModalTitle.vue'
import ModalDescription from '@/components/ModalDescription.vue'

import { ref } from 'vue'

const openModal = ref(false)
</script>



<style scoped>

</style>
