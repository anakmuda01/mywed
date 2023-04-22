<template>
  <div class="column q-mb-xs">
    <div class="underline-text text-h5 satisfy-text" :class="`text-${color}`">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "text",
  "color",
]);
</script>

<style>
.underline-text {
  z-index: 1;
  position: relative;
  text-decoration: underline;
}
</style>
