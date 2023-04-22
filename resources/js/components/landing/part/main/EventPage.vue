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
        <div class="row">
          <div
            class="col-12 paci-text text-center text-h5 bg-orange-10 text-white rounded-borders"
          >
            Save The Dates
          </div>
          <div class="col-12">
            <q-timeline class="save-dates">
              <q-timeline-entry color="bg-main-1" icon="volunteer_activism">
                <template v-slot:subtitle>
                  <custom-timeline-entry
                    bg="bg-main-1"
                    style="top: -13px"
                    judul="Akad Nikah"
                    underline-text="Jum'at"
                    divider-width="3.3rem"
                    margin-top="-9px"
                    left="9.4rem"
                    underline-color="lime-10"
                    bulan="juli"
                    angka="07"
                    tahun="2023"
                    tempat="Komp. Borneo xxx, Jl. xxx RT. xx RW..xx"
                  ></custom-timeline-entry>
                </template>
              </q-timeline-entry>

              <q-timeline-entry color="brown-10" icon="celebration">
                <template v-slot:subtitle>
                  <custom-timeline-entry
                    bg="bg-main-2"
                    style="top: -13px"
                    judul="Resepsi"
                    underline-text="Ahad / Minggu"
                    divider-width="2rem"
                    margin-top="-9px"
                    left="7.3rem"
                    underline-color="brown-10"
                    bulan="juli"
                    angka="09"
                    tahun="2023"
                    tempat="Komp. Borneo xxx, Jl. xxx RT. xx RW..xx"
                  ></custom-timeline-entry>
                </template>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import FlowerGaris from "../../../../assets/flower-garis.png";
import CustomTimelineEntry from "../../../ui/CustomTimelineEntry.vue";
</script>

<style>
.save-dates .q-timeline__subtitle {
  opacity: 1 !important;
  text-transform: none !important;
}

.judul-event {
  font-size: 1.8em;
  font-weight: 400;
}
</style>