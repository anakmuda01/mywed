<template>
  <div class="q-mt-sm" style="position: relative">
    <div
      :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: `url(${CoupleSign})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100px',
        width: '100px',
      }"
    ></div>
    <div
      :style="{
        top: 0,
        right: 0,
        position: 'absolute',
        backgroundImage: `url(${CoupleSign2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100px',
        width: '100px',
      }"
    ></div>
    <q-card flat class="q-mb-xs" style="background: rgb(159, 144, 122, 0.2)">
      <q-card-section class="text-center text-white paci-text text-h4"
        >Couple</q-card-section
      >
    </q-card>
    <div>
      <q-card
        class="q-mb-xs"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
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
              <div class="parent text-weight-bold text-caption">
                Bapak Darlan
              </div>
              <div class="text-weight-bold text-caption">&</div>
              <div class="text-weight-bold text-caption">
                Ibu Nurmiati, S.Pd.
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
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
  </div>
</template>

<script setup>
import InayCouple from "@/assets/inay_couple.png";
import SholCouple from "@/assets/shol_couple.png";
import CoupleSign from "@/assets/couplesign.png";
import CoupleSign2 from "@/assets/couplesign2.png";
</script>
