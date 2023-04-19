<template>
  <q-card flat>
    <div>
      <div class="row justify-between">
        <q-parallax :src="bgFlower" style="height: 92.9vh">
          <div
            class="text-subtitle2 absolute-top text-center cd-title"
            style="padding-top: 150px"
          >
            <div class="text-h5 q-mb-lg">the wedding of</div>
            <div class="text-h4">
              <div class="pacifico-text">Sholihin</div>
              <div class="pacifico-text">&</div>
              <div class="pacifico-text">Inayati</div>
            </div>
            <div class="text-h5 q-mt-lg">- 07 Juli 2023 -</div>
          </div>
          <div class="absolute-bottom cd-countdown">
            <div v-if="already" class="text-center text-h5">
              the event was started
            </div>
            <div v-else>
              <div class="text-center text-h5">the event will start at</div>
              <div class="row q-gutter-lg justify-center cd-wrapper">
                <div id="days" class="column items-center">
                  <div class="cd-num">
                    {{ days.toString().padStart(2, "0") }}
                  </div>
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
          </div>
        </q-parallax>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import bgFlower from "../../../../assets/bg-flower.jpg";
import { ref, onUnmounted } from "vue";

const days = ref("");
const hours = ref("");
const minutes = ref("");
const seconds = ref("");

const targetDateString = "07/07/2023, 010:00:00 PM WITA";
const dateParts = targetDateString.split(/[\s,]+/);
const [month, day, year] = dateParts[0].split("/");
const [hour, minute, second] = dateParts[1].split(":");
const timeOfDay = dateParts[2];
const timezone = "Asia/Makassar";

const targetDate = new Date(
  `${month}/${day}/${year} ${hour}:${minute}:${second} ${timeOfDay} UTC+0800`
);

const already = ref(false);

function countDown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    clearInterval(interval);
    already.value = true;
  } else {
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((diff / 1000 / 60) % 60);
    seconds.value = Math.floor((diff / 1000) % 60);
  }
}

const interval = setInterval(countDown, 1000);

onUnmounted(() => clearInterval(interval));
</script>

<style>
.cd-title {
  background: none !important;
}

.cd-countdown {
  padding-bottom: 51px !important;
  padding-top: 33px !important;
  color: white;
  background: rgba(153, 101, 21, 0.6);
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