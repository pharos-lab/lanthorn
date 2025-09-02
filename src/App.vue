<script setup lang="ts">
import { useTemplateRef } from 'vue';

const dropdown = useTemplateRef('dropdown')
const collapsible = useTemplateRef('collapsible')
const tabs = useTemplateRef('tabs')



</script>

<template>
  <div class="p-8 space-y-8">

    <Button size="lg" @click="tabs.open('two')">override</Button>

    <SearchList>
      <SearchListInput></SearchListInput>
      <SearchListItems>
        <SearchListItem value="one">one</SearchListItem>
        <SearchListItem value="two">two</SearchListItem>
        <SearchListItem value="three">three</SearchListItem>
      </SearchListItems>
    </SearchList>

    <Tabs defaultValue="one" ref="tabs" @open="(value:string) => console.log(value)">
      <TabList>
        <TabTrigger value="one">one</TabTrigger>
        <TabTrigger value="two">two</TabTrigger>
        <TabTrigger value="three">three</TabTrigger>
      </TabList>
      <Tab value="one">num 1</Tab>
      <Tab value="two">num 2</Tab>
      <Tab value="three">num 3</Tab>
    </Tabs>

    <Dialog>
      <DialogTrigger>Open me</DialogTrigger>
      <DialogContent>
        it's working!
      </DialogContent>
    </Dialog>

    <br>

    <Alert color="primary" :dismissable="false">Oops! something went wrong!</Alert>

    <Collapsible :open="true" ref="collapsible" @close="console.log('collaped')">
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
