<template>
  <div>
    <q-btn
      :icon="icon"
      :color="color"
      dark
      label="Open Map"
      outline
      @click="openGeo"
    ></q-btn>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
const props = defineProps(["lat", "lang", "icon", "color"]);
const $q = useQuasar();
const isMobile = $q.platform.is.mobile;
// var latitude = 3.449339;
// var longitude = 114.715244;

function openGeo() {
  // Then, create a URL to represent the location
  var locationUrl = `geo:${props.lat},${props.lang}?q=${props.lat},${props.lang}`;

  // Finally, launch the URL in the Maps app
  if (isMobile) {
    window.location.href = locationUrl;
  } else {
    window.open(`https://www.google.com/maps/?q=${props.lat},${props.lang}`);
  }
}
</script>
