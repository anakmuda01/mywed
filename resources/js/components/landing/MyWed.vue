<template>
  <div class="tangah">
    <div class="cantik-text text-center text-h5 text-deep-orange-10">Sholihin & Inayati</div>
    <div>
      <q-img alt="corefront" :src="corefront" width="250px"></q-img>
    </div>
    <div class="text-h6 text-center">
      <div class="cantik-text">Our <span class="text-red">❤</span> Story</div>
      <div class="cantik-text">Begins Here</div>
    </div>
  </div>
</template>

<script setup>
import corefront from "@/assets/corefrontSmall.png";
</script>

<style>
.tangah {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>