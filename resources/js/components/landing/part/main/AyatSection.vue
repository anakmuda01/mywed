<template>
  <div style="position: relative">
    <q-card
      :style="{
        minHeight: '477px',
        backgroundImage: `url(${ayatbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <q-card-section class="text-white">
        <div class="row text-center">
          <div class="col-12 q-mb-sm">
            <div class="text-h4">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
              لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
              إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
            </div>
          </div>
          <div
            class="col-12 text-caption"
            style="padding-left: 33px; padding-right: 33px"
          >
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, supaya kamu
            cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
            diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
            itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import ayatbg from "../../../../assets/ayatbg.jpg";
</script>