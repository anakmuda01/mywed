<template>
  <q-card>
    <div
      class="q-pa-md text-white text-center cantik-text judul-event"
      :class="bg"
    >
      <div v-if="isMainEvent">
        <q-icon name="star" color="orange"></q-icon>
        <span>{{ judul }}</span>
        <q-icon name="star" color="orange"></q-icon>
      </div>
      <span v-else>{{ judul }}</span>
    </div>
    <div class="q-pa-sm text-center q-mt-xs">
      <text-underline-origin
        :text="underlineText"
        :color="underlineColor"
      ></text-underline-origin>
      <div class="row items-center justify-center">
        <span
          class="bulan-text cantik-text"
          style="display: inline-block; width: 4em"
          >{{ bulan }}</span
        >
        <span class="tanggal-text text-weight-bold">{{ angka }}</span>
        <span
          class="tahun-text text-weight-bold"
          style="display: inline-block; width: 4em"
          >{{ tahun }}</span
        >
      </div>
      <div v-if="waktu" class="q-mt-sm">
        <div class="text-indigo">Waktu</div>
        <div style="font-size: 1.2em">{{waktu}}</div>
      </div>
      <div class="paci-text">Tempat</div>
      <div class="text-orange-10">{{ rumah }}</div>
      <div>{{ tempat }}</div>
      <div class="q-my-md">
        <geo-button
          icon="location_on"
          color="brown"
          lat="-3.4493047"
          lang="114.7152247"
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
  "rumah",
  "tempat",
  "waktu",
  "isMainEvent"
]);
</script>


<style>
.bulan-text, .tahun-text {
  font-size: 1.5em;
}

.tanggal-text {
  font-size: 2.7em;
}
</style>