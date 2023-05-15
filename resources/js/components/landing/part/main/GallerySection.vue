<template>
  <q-card>
    <q-carousel
      animated
      v-model="slide"
      thumbnails
      swipeable
      infinite
      :autoplay="autoplay"
      v-model:fullscreen="fullscreen"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" :img-src="foto1" />
      <q-carousel-slide :name="2" :img-src="foto2" />
      <q-carousel-slide :name="3" :img-src="foto3" />
      <q-carousel-slide :name="4" :img-src="foto4" />
      <q-carousel-slide :name="5" :img-src="foto5" />

      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import foto1 from "../../../../assets/foto1.jpeg";
import foto2 from "../../../../assets/foto2.jpeg";
import foto3 from "../../../../assets/foto3.jpeg";
import foto4 from "../../../../assets/foto4.jpeg";
import foto5 from "../../../../assets/foto5.jpeg";
const slide = ref(1);
const fullscreen = ref(false);
const autoplay = ref(true);
</script>