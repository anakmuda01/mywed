<template>
  <q-layout view="lhr lpR lFr">
    <q-page-container>
      <q-page>
        <div class="row justify-center" style="padding-bottom: 100px">
          <div id="home" class="col-12 col-md-10 q-pa-md">
            <main-dashboard></main-dashboard>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainDashboard from "./MainDashboard.vue";
</script>