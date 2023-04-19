<template>
  <div>
    <div class="row justify-center" style="height: 100px">
      <q-img width="15rem" height="auto" :src="FlowerGaris"></q-img>
    </div>
    <q-card style="height: 73px; background: rgb(159, 144, 122, 0.5)">
      <q-card-section class="row justify-center" style="position: relative">
        <div
          style="
            position: absolute;
            top: -58px;
            border: 4px solid #795548;
            border-radius: 50%;
          "
        >
          <q-img
            style="border-radius: 50%"
            width="100px"
            height="100px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9Nea7sJLpRggTwhoqvv_iKvPSNHiZSXvrQ&usqp=CAU"
          />
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-xs">
      <q-card-section>
        <div class="row text-center">
          <div class="col-12 paci-text">Save The Dates</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import FlowerGaris from "../../../../assets/flower-garis.png";
</script>
