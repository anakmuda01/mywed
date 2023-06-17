<template>
  <q-card>
    <div class="row justify-between bg-brown-5">
      <div class="col-12">
        <div
          class="text-subtitle2 text-center cd-title"
          style="padding-top: 37px"
        >
          <text-underline
            class="q-mb-lg text-white"
            text="the wedding of"
          ></text-underline>
          <div class="text-h4 text-white">
            <div class="cantik-text">Sholihin & Inayati</div>
          </div>
        </div>
      </div>
      <div class="col-12 text-center">
        <q-img alt="corefront" :src="corefront" width="250px"></q-img>
      </div>
      <div class="col-12 text-white bg-brown-10">
        <div class="cd-countdown text-center">
          <div class="q-mb-lg">
            <div class="cantik-text">Resepsi</div>
            <q-chip square color="brown-10" dark>- 09 Juli 2023 -</q-chip>
          </div>
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
      </div>
    </div>
  </q-card>
</template>

<script setup>
import TextUnderline from "../../../ui/TextUnderline.vue";
import front from "@/assets/front.jpg";
import corefront from "@/assets/corefront.png";
import { ref, onUnmounted } from "vue";

const days = ref("");
const hours = ref("");
const minutes = ref("");
const seconds = ref("");

const targetDateString = "07/09/2023, 09:00:00 AM WITA";
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
  padding-bottom: 71px !important;
  padding-top: 15px !important;
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