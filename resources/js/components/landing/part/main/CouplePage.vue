<template>
  <div>
    <q-card class="q-mb-sm">
      <q-card-section>
        <div class="row items-center text-center">
          <div class="col-5">
            <q-img
              class="rounded-borders"
              :src="SholCouple"
              height="auto"
            ></q-img>
          </div>
          <div class="col-7 q-pl-xs q-pr-xs">
            <div class="nama text-h6">
              <div class="paci-text">Fathurrahman Sholihin,</div>
              <div class="text-subtitle2">A.Md.A.K., S.Kom.</div>
            </div>
            <div class="of q-my-sm">Putera Pertama Dari</div>
            <div class="parent text-weight-bold text-caption">Bapak Darlan</div>
            <div class="text-weight-bold text-caption">&</div>
            <div class="text-weight-bold text-caption">Ibu Nurmiati, S.Pd.</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="row items-center text-center">
          <div class="col-7 q-pr-xs q-pl-xs">
            <div class="nama text-h6">
              <div class="paci-text">Inayati Fitriyah Asrimawati,</div>
              <div class="text-subtitle2">M.Pd.</div>
            </div>
            <div class="of q-my-sm">Puteri Pertama Dari</div>
            <div class="parent text-weight-bold text-caption">Bapak</div>
            <div class="parent text-weight-bold text-caption">
              Drs. H. Basrian, M.Fil.I
            </div>
            <div class="text-weight-bold text-caption">&</div>
            <div class="text-weight-bold text-caption">Ibu</div>
            <div class="text-weight-bold text-caption">
              Dra. Hj. Hikmawati, M.Pd.
            </div>
          </div>
          <div class="col-5">
            <q-img
              class="rounded-borders"
              :src="InayCouple"
              height="auto"
            ></q-img>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import InayCouple from "@/assets/inay_couple.png";
import SholCouple from "@/assets/shol_couple.png";
</script>
