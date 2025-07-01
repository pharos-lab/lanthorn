<script setup lang="ts">
import { useTemplateRef } from 'vue';

const dropdown = useTemplateRef('dropdown')


</script>

<template>
  <div class="p-8 space-y-8">
    <Button size="lg" @click="dropdown?.toggle">override</Button>
    <Alert color="primary" dismissable="false">Oops! something went wrong!</Alert>

    <Collapsible :open="true">
      <CollapsibleTrigger>click</CollapsibleTrigger>
      <CollapsibleContent>nice</CollapsibleContent>
    </Collapsible>

    <Accordion >
      <AccordionItem ref="dropdown" @close="console.log('closed')">
        <AccordionTrigger>one</AccordionTrigger>
        <AccordionContent>it is one </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>one</AccordionTrigger>
        <AccordionContent>it is one </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>one</AccordionTrigger>
        <AccordionContent>it is one </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Dropdown ref="dropdown" @open="console.log('opened')">
      <DropdownTrigger class="bg-red-500">click me</DropdownTrigger>
      <DropdownContent>yeah !!</DropdownContent>
    </Dropdown>
  </div>
</template>

<style scoped>
.l-collapsible-content-wrapper {
  transition: all;
  transition-duration: 500ms;
}
</style>
