<template>
  <q-card flat>
    <div>
      <div class="row justify-between">
        <q-parallax :src="bgFlower" style="height: 92.9vh">
          <div
            class="text-subtitle2 absolute-top text-center cd-title"
            style="padding-top: 150px"
          >
            <div class="text-center pacifico-text text-h4">
              Sholihin & Inayati
            </div>
          </div>
          <div class="absolute-bottom cd-countdown">
            <div class="text-center text-h5">
              the event will start at
            </div>
            <div class="row q-gutter-lg justify-center cd-wrapper">
              <div id="days" class="column items-center">
                <div class="cd-num">{{ days.toString().padStart(2, "0") }}</div>
                <div class="cd-text">H a r i</div>
              </div>
              <div id="hours" class="column items-center">
                <div class="cd-num">
                  {{ hours.toString().padStart(2, "0") }}
                </div>
                <div class="cd-text">J a m</div>
              </div>
              <div id="minutes" class="column items-center">
                <div class="cd-num">
                  {{ minutes.toString().padStart(2, "0") }}
                </div>
                <div class="cd-text">M e n i t</div>
              </div>
              <div id="seconds" class="column items-center">
                <div class="cd-num">
                  {{ seconds.toString().padStart(2, "0") }}
                </div>
                <div class="cd-text">D e t i k</div>
              </div>
            </div>
          </div>
        </q-parallax>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import bgFlower from "../../../../assets/bg-flower.jpg";
import { ref, onMounted } from "vue";

const countdownDate = new Date("2023-07-07T00:00:00Z").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
  setInterval(updateCountdown, 1000);
});
</script>

<style>
.cd-title {
  background: none !important;
}

.cd-countdown {
  padding-bottom: 71px !important;
  padding-top: 33px !important;
  color: white;
  background: rgba(153, 101, 21, 0.9);
}

.cd-wrapper div {
  font-family: "Lobster", cursive !important;
}

.cd-num {
  font-size: 41px;
}

.cd-text {
  font-size: 19px;
}
</style>