<script setup lang="ts">
import { useTemplateRef } from 'vue';

const collapsible = useTemplateRef('collapsible')


</script>

<template>
  <div class="p-8 space-y-8">
    <Button size="lg" type="submit">override</Button>
    <Alert color="primary" dismissable="false">Oops! something went wrong!</Alert>

    <Collapsible :open="true">
      <CollapsibleTrigger>click</CollapsibleTrigger>
      <CollapsibleContent>nice</CollapsibleContent>
    </Collapsible>

    <Accordion >
      <AccordionItem ref="collapsible">
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

    <Floating trigger="hover" :delay="1000">
      <FloatingTrigger class="bg-red-500">click me</FloatingTrigger>
      <FloatingContent>yeah !!</FloatingContent>
    </Floating>
  </div>
</template>

<style scoped>
.l-collapsible-content-wrapper {
  transition: all;
  transition-duration: 500ms;
}
</style>
