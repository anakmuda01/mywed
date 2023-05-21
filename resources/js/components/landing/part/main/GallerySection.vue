<template>
  <q-card>
    <q-carousel
      animated
      v-model="slide"
      :thumbnails="false"
      swipeable
      infinite
      :autoplay="autoplay"
      v-model:fullscreen="fullscreen"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      ref="carousel"
    >
      <q-carousel-slide :name="1" :img-src="foto1" />
      <q-carousel-slide :name="2" :img-src="foto2" />
      <q-carousel-slide :name="3" :img-src="foto3" />
      <q-carousel-slide :name="4" :img-src="foto4" />
      <q-carousel-slide :name="5" :img-src="foto5" />
      <q-carousel-slide :name="6" :img-src="foto6" />
      <q-carousel-slide :name="7" :img-src="foto7" />
      <q-carousel-slide :name="8" :img-src="foto8" />
      <q-carousel-slide :name="9" :img-src="foto9" />
      <q-carousel-slide :name="10" :img-src="foto10" />

      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="orange"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="white"
            text-color="orange"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="white"
            text-color="orange"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import foto1 from "../../../../assets/gallery/foto1.jpg";
import foto2 from "../../../../assets/gallery/foto2.jpg";
import foto3 from "../../../../assets/gallery/foto3.jpg";
import foto4 from "../../../../assets/gallery/foto4.jpg";
import foto5 from "../../../../assets/gallery/foto5.jpg";
import foto6 from "../../../../assets/gallery/foto6.jpg";
import foto7 from "../../../../assets/gallery/foto7.jpg";
import foto8 from "../../../../assets/gallery/foto8.jpg";
import foto9 from "../../../../assets/gallery/foto9.jpg";
import foto10 from "../../../../assets/gallery/foto10.jpg";
const slide = ref(1);
const fullscreen = ref(false);
const autoplay = ref(true);
</script>