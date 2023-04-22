<template>
  <q-card>
    <div
      class="q-pa-md text-white text-center paci-text judul-event"
      :class="bg"
    >
      {{ judul }}
    </div>
    <div class="q-pa-sm text-center q-mt-xs">
      <text-underline-origin
        :text="underlineText"
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
        <geo-button
          icon="location_on"
          color="brown"
          lat="-3.449339"
          lang="114.715244"
        ></geo-button>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import TextUnderlineOrigin from "./TextUnderlineOrigin.vue";
import GeoButton from "./GeoButton.vue";
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
