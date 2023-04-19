
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
          <main-page v-if="isMain"></main-page>
        </div>
      </q-page>
    </q-page-container>

    <transition
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated fadeOut"
    >
      <q-footer v-if="isMain" elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title> Navigation </q-toolbar-title>
          <q-space />
          <q-btn flat round dense icon="mdi-home" @click="$router.push('/')">
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            dense
            icon="account"
            @click="$router.push('/profile')"
          >
            <q-tooltip>Profile</q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            dense
            icon="settings"
            @click="$router.push('/settings')"
          >
            <q-tooltip>Settings</q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-footer>
    </transition>
  </q-layout>
</template>

<script setup>
import Cover from "./part/Cover.vue";
import Loading from "./Loading.vue";
import MainPage from "./part/main/MainPage.vue";
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

