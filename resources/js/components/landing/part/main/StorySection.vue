<template>
  <div style="position: relative">
    <div
      :style="{
        position: 'absolute',
        height: '311px',
        width: '100%',
        backgroundImage: `url(${LoveStoryBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        backgroundSize: 'contain',
        top: 0,
      }"
    ></div>
    <q-card class="q-px-md q-py-md" style="background: transparent">
      <q-timeline
        color="orange"
        class="our-love-story q-pr-lg q-pt-lg q-pl-xs"
        style="
          margin-top: 187px;
          background: rgb(159, 144, 122, 0.5);
          border-radius: 5px;
        "
      >
        <q-timeline-entry
          v-for="(item, index) in events"
          :key="index"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          <template v-slot:subtitle>
            <q-card style="top: -3px">
              <div class="q-pa-xs">
                <q-chip square dark color="lime-9" size="sm">{{
                  item.date
                }}</q-chip>
                <div
                  class="q-py-xs q-px-sm cantik-text text-weight-light text-grey-8"
                >
                  {{ item.text }}
                </div>
              </div>
            </q-card>
          </template>
        </q-timeline-entry>
      </q-timeline>
    </q-card>

    <q-card class="q-pa-sm q-mt-xs" style="position: relative; overflow: hidden">
      <div
        class="text-center q-pt-lg"
        style="padding-bottom: 100px; background: #b05113; color: white"
      >
        <div
          class="text-h6 cantik-text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          ❝Every <span class="text-h4 cantik-text">Love Story</span>
        </div>
        <div
          class="text-h4 cantik-text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="1700"
        >
          is beautiful <span class="text-h6 cantik-text">and</span>
        </div>
        <div
          class="text-h3 cantik-text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="1900"
        >
          Ours
        </div>
        <div
          class="text-h4 cantik-text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="2100"
        >
          is the most unique❞
        </div>
      </div>

      <div
        :style="{
          position: 'absolute',
          bottom: '-22px',
          right: '10px',
          height: '100px',
          width: '100px',
          backgroundImage: `url(${InayKursi})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }"
      ></div>

      <div
        :style="{
          position: 'absolute',
          bottom: '-22px',
          left: '10px',
          height: '100px',
          width: '100px',
          backgroundImage: `url(${SholKursi})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }"
      ></div>
    </q-card>
  </div>
</template>

<script setup>
import LoveStoryBg from "../../../../assets/love-story-bg.png";
import SideBySide from "../../../../assets/sidebyside.jpg";
import InayKursi from "../../../../assets/inaykursi.png";
import SholKursi from "../../../../assets/sholkursi.png";
const events = [
  {
    date: "16 Nov 2022",
    text: "Our 1st Chat (WA)",
  },
  {
    date: "01 Dec 2022",
    text: "His 1st Proposal",
  },
  {
    date: "5 Dec 2022",
    text: "She's not ready yet - the beginning of silent treatment",
  },
  {
    date: "15 Feb 2023",
    text: "The end of silent treatment where our story began",
  },
  {
    date: "11 Mar 2023",
    text: "He proposed again and suggested her to pray istikhara, but she did it again. That's our last chat",
  },
  {
    date: "16 Mar 2023",
    text: "Her first istikhara prayer, and she gave him a chance to meet her parents",
  },
  {
    date: "22 Mar 2023",
    text: "He met her parents alone~",
  },
  {
    date: "26 Mar 2023",
    text: "Our parents met and we're officially engaged",
  },
  {
    date: "07 Jul 2023",
    text: "Our brand-new day begins",
  },
];
</script>


<style>
.our-love-story .q-timeline__subtitle {
  opacity: 1 !important;
  text-transform: none !important;
  font-size: 14px;
}
</style>