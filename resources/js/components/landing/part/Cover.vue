<template>
  <q-page>
    <div
      class="row justify-center undangans-center q-gutter-sm"
      style="height: 100vh"
    >
      <div class="col-11 col-md-4">
        <div
          class="bg-flower"
          :style="{
            backgroundImage: `url(${flowerPath})`,
            height: '5em',
            marginBottom: '3px',
          }"
        ></div>
        <q-card class="q-mb-sm bg-deep-orange-9">
          <q-card-section class="text-center cantik-text text-h4">
            Sholihin & Inayati
          </q-card-section>
        </q-card>
        <q-card class="q-mb-sm bg-deep-orange-9">
          <q-card-section class="text-center">
            <div>Kepada Yth.</div>
            <div class="q-mb-sm">Bapak/Ibu/Saudara/i</div>
            <div class="q-mb-sm text-h6 satisfy-text">
              <div v-if="undangan && undangan.pasangan">
                <div class="satisfy-text">{{ undangan.nama }}</div>
                <div class="satisfy-text">&</div>
                <div class="satisfy-text">{{ undangan.pasangan }}</div>
              </div>
              <div v-else>
                <div v-if="undangan" class="satisfy-text">{{ undangan.nama }}</div>
              </div>
            </div>
            <div class="text-caption">
              Mohon maaf apabila terdapat kesalahan dalam penulisan nama /
              gelar.
            </div>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-sm bg-deep-orange-9">
          <q-card-section class="text-center">
            <q-btn color="brown-9" @click="$emit('open')">Buka Undangan</q-btn>
          </q-card-section>
        </q-card>
        <div class="text-center">
          <div class="cantik-text" style="color: black">
            dev with <span class="text-red">❤</span> by
            <a target="_blank" href="https://www.instagram.com/fhmsholihin/"
              >me</a
            >
          </div>
        </div>
        <q-card
          flat
          v-if="$q.platform.is.mobile"
          :class="$q.platform.is.mobile ? 'bg-bicycle-m' : 'bg-bicycle-g'"
          :style="{
            backgroundImage: `url(${bicyclePath})`,
            height: '18em',
          }"
        >
        </q-card>
      </div>
      <div class="col-11 col-md-4" v-if="!$q.platform.is.mobile">
        <q-card
          flat
          :class="$q.platform.is.mobile ? 'bg-bicycle-m' : 'bg-bicycle-g'"
          :style="{
            backgroundImage: `url(${bicyclePath})`,
            height: '30em',
          }"
        >
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import bicyclePath from "@/assets/ba.png";
import flowerPath from "@/assets/flower.png";

import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

import { ref, onMounted } from "vue";

import { useQuasar } from "quasar";
const $q = useQuasar();

import { useCoreStore } from "@/stores/core.store";

const core = useCoreStore();

import { storeToRefs } from "pinia";
const { undangan } = storeToRefs(core);

onMounted(() => {
  core.getCore(id);
});
</script>

<style>
.bg-bicycle-m {
  background-color: white;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}

.bg-bicycle-g {
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}

.bg-flower {
  background-repeat: no-repeat;
}
</style>