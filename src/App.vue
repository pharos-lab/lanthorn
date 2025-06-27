<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components';

</script>

<template>
  <div class="p-8 space-y-8">
    <Button size="lg" class="p-7">override</Button>
    <Alert color="primary" dismissable="false">Oops! something went wrong!</Alert>

    <Collapsible :open="true">
      <CollapsibleTrigger>click</CollapsibleTrigger>
      <CollapsibleContent>nice</CollapsibleContent>
    </Collapsible>
  </div>
</template>

<style scoped>
.l-collapsible-content-wrapper {
  transition: all;
  transition-duration: 500ms;
}
</style>
