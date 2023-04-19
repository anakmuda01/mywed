<template>
  <q-card>
    <div class="row justify-between">
      <q-img class="rounded-borders" src="https://i.pinimg.com/736x/59/30/5e/59305e07eb1c170e88953a5694100162.jpg" style="height: 91vh">
        <div
          class="text-subtitle2 absolute-top text-center cd-title"
          style="padding-top: 37px"
        >
          <text-underline
            class="q-mb-lg"
            text="the wedding of"
          ></text-underline>
          <div class="text-h4">
            <div class="cantik-text">Sholihin & Inayati</div>
          </div>
        </div>
        <div class="absolute-bottom cd-countdown text-center">
          <q-chip square color="brown-10" dark class="q-mb-lg"
            >- 07 Juli 2023 -</q-chip
          >
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
      </q-img>
    </div>
  </q-card>
</template>

<script setup>
import TextUnderline from "../../../ui/TextUnderline.vue";
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
  padding-bottom: 80px !important;
  padding-top: 15px !important;
  color: white;
  background: rgba(70 41 4, 0.6) !important;
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