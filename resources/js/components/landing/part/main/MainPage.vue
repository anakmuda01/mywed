<template>
  <div class="row bg-brown" style="padding-bottom: 100px">
    <div class="col-12 q-px-sm q-mt-sm">
      <count-down></count-down>
    </div>
    <div class="col-12 q-px-sm q-mt-sm">
      <couple-page></couple-page>
    </div>
    <div class="col-12 q-px-sm q-mt-sm">
      <event-page></event-page>
    </div>
  </div>
</template>

<script setup>
import CountDown from "./CountDown.vue";
import CouplePage from "./CouplePage.vue";
import EventPage from "./EventPage.vue";
</script>
