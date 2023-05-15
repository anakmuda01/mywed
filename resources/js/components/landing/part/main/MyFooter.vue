<template>
  <q-footer class="q-pa-xs bg-transparent">
    <q-toolbar class="text-white rounded-borders footer-toolbar q-pa-xs">
      <q-btn
        style="width: 60px"
        icon="home"
        dense
        label="home"
        stack
        color="brown-7"
        @click="scrollToDiv('home')"
      />
      <q-space></q-space>
      <q-btn
        style="width: 60px"
        icon="favorite"
        dense
        label="couple"
        stack
        color="brown-7"
        @click="scrollToDiv('couple')"
      />
      <q-space></q-space>
      <q-btn
        style="width: 60px"
        icon="event"
        dense
        label="event"
        stack
        color="brown-7"
        @click="scrollToDiv('event')"
      />
      <q-space></q-space>
      <q-btn
        style="width: 60px"
        icon="dashboard"
        dense
        label="story"
        stack
        color="brown-7"
        @click="scrollToDiv('story')"
      />
      <q-space></q-space>
      <q-btn
        style="width: 60px"
        icon="photo_album"
        dense
        label="galery"
        stack
        color="brown-7"
        @click="scrollToDiv('galery')"
      />
    </q-toolbar>
  </q-footer>
</template>


<script setup>
const scrollToDiv = (e) => {
  const element = document.getElementById(e);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>


<style>
.footer-toolbar {
  border: 2px solid white;
  background: #e5d599 !important;
}
</style>