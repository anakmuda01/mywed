<template>
  <q-card>
    <div
      class="q-pa-md text-white text-center paci-text judul-event"
      :class="bg"
    >
      {{ judul }}
    </div>
    <div class="q-pa-sm text-center">
      <text-underline-origin
        :text="underlineText"
        :divider-width="dividerWidth"
        :margin-top="marginTop"
        :left="left"
        :color="underlineColor"
      ></text-underline-origin>
      <div class="row items-center justify-center">
        <span
          class="text-h6 paci-text"
          style="display: inline-block; width: 100px"
          >{{ bulan }}</span
        >
        <span class="text-h4 text-weight-bold">{{ angka }}</span>
        <span
          class="text-h6 text-weight-bold"
          style="display: inline-block; width: 100px"
          >{{ tahun }}</span
        >
      </div>
      <div class="paci-text">Tempat</div>
      <div>{{ tempat }}</div>
      <div class="q-mt-lg">
        <q-btn
          icon="location_on"
          color="brown"
          dark
          label="Open Map"
          outline
        ></q-btn>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import TextUnderlineOrigin from "./TextUnderlineOrigin.vue";
const props = defineProps([
  "bg",
  "judul",
  "underlineText",
  "dividerWidth",
  "marginTop",
  "left",
  "underlineColor",
  "bulan",
  "angka",
  "tahun",
  "tempat",
]);
</script>
