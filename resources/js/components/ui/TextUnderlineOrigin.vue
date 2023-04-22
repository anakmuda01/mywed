<template>
  <div class="column items-center q-mb-xs">
    <div class="underline-text text-h5 satisfy-text" :class="`text-${color}`">{{ text }}</div>
    <div
      class="divider"
      :style="{ width: dividerWidth, marginTop: marginTop, left: left }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps([
  "text",
  "dividerWidth",
  "marginTop",
  "left",
  "color",
]);
</script>

<style>
.underline-text {
  z-index: 1;
}
.divider {
  background-color: #4e340d;
  border: 0 solid #4e340d;
  border-radius: 150px;
  height: 0.21rem;
  position: relative;
  overflow: hidden;
}
</style>
