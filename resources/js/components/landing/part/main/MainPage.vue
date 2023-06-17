<template>
  <q-card>
    <q-card-section>
      <div class="row bg-brown" style="padding-bottom: 100px">
        <div id="home" class="col-12 q-px-sm q-mt-sm">
          <count-down></count-down>
        </div>
        <div id="couple" class="col-12 q-px-sm q-mt-sm">
          <couple-page></couple-page>
        </div>
        <div class="col-12 q-px-sm q-mt-sm">
          <ayat-section></ayat-section>
        </div>
        <div id="event" class="col-12 q-px-sm q-mt-sm">
          <event-page></event-page>
        </div>
        <div id="story" class="col-12 q-px-sm q-mt-sm">
          <story-section></story-section>
        </div>
        <div id="galery" class="col-12 q-px-sm q-mt-sm">
          <gallery-section></gallery-section>
        </div>
      </div>
    </q-card-section>

    <audio ref="audioPlayer" controls loop>
      <source :src="musicSrc" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </q-card>
</template>

<script setup>
import CountDown from "./CountDown.vue";
import CouplePage from "./CouplePage.vue";
import EventPage from "./EventPage.vue";
import AyatSection from "./AyatSection.vue";
import StorySection from "./StorySection.vue";
import GallerySection from "./GallerySection.vue";

import { ref, onMounted } from "vue";
import AOS from "aos";

import musicSrc from '@/assets/inay_version.mp3';
const audioPlayer = ref(null);

onMounted(() => {
  AOS.init();
  audioPlayer.value.play();
});
</script>
