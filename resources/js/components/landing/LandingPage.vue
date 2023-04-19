
<template>
  <q-layout view="lhr lpR lFr">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <cover key="cover" class="text-white" v-if="isCover" @open="doOpen" />
      </transition>

      <q-page class="loading-page" v-if="!isCover">
        <div
          class="loading-spinner"
          :class="{ 'loading-spinner--hidden': !isLoading }"
        >
          <q-spinner-hearts color="red-4" size="60" />
          <div class="pacifico-text text-deep-orange-10">Loading...</div>
        </div>
        <div
          class="page-content"
          :class="{ 'page-content--hidden': isLoading }"
        >
          <div class="row justify-center items-center">
            <div class="col-12 col-lg-4">
              <main-page v-if="isMain"></main-page>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <transition
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated fadeOut"
    >
      <my-footer v-if="isMain"></my-footer>
    </transition>
  </q-layout>
</template>

<script setup>
import Cover from "./part/Cover.vue";
import Loading from "./Loading.vue";
import MainPage from "./part/main/MainPage.vue";
import MyFooter from "./part/main/MyFooter.vue";
import { ref } from "vue";

const isLoading = ref(false);
const isMain = ref(false);
const isCover = ref(true);

function doOpen() {
  isCover.value = false;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isMain.value = true;
  }, 2000);
}
</script>

<style>
.loading-page {
  position: relative;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 2s;
}

.loading-spinner--hidden {
  opacity: 0;
  pointer-events: none;
}

.page-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 2s;
}

.page-content--hidden {
  opacity: 0;
  pointer-events: none;
}
</style>

