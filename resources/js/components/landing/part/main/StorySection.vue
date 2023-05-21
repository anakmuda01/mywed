<template>
  <div style="position: relative">
    <div
      :style="{
        position: 'absolute',
        marginLeft: '10px',
        height: '400px',
        width: '100%',
        backgroundImage: `url(${LoveStoryBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '',
      }"
    ></div>
    <q-card
      class="q-px-lg q-py-md"
      style="background: transparent; padding-bottom: 170px"
    >
      <q-timeline color="orange" class="our-love-story">
        <q-timeline-entry heading>
          <q-card style="background: rgb(159, 144, 122, 0.4)">
            <q-card-section
              class="q-px-sm q-py-md paci-text text-h4 text-white"
            >
              Our Love's Story
            </q-card-section>
          </q-card>
        </q-timeline-entry>

        <q-timeline-entry v-for="(item, index) in events" :key="index">
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
    <div
      :style="{
        position: 'absolute',
        marginLeft: '10px',
        height: '200px',
        width: '100%',
        backgroundImage: `url(${LoveStoryBgBottom})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
        bottom: '4px',
        right: '-30px',
      }"
    ></div>
  </div>
</template>

<script setup>
import LoveStoryBg from "../../../../assets/love-story-bg.png";
import LoveStoryBgBottom from "../../../../assets/couple_story_bg.png";
const events = [
  {
    date: "16 November 2022",
    text: "Our 1st Chat (WA)",
  },
  {
    date: "01 Desember 2022",
    text: "His 1st Proposal",
  },
  {
    date: "5 Desember 2022",
    text: "She's not ready yet - the beginning of silent treatmen",
  },
  {
    date: "15 Feb 2023",
    text: "The end of silent treatment where our story began",
  },
  {
    date: "11 Maret 2023",
    text: "he proposed again and suggested her to pray istikhara, but she did it again. That's our last chat",
  },
  {
    date: "16 Maret 2023",
    text: "Her first istikhara prayer, and she give him a chance to meet her parents",
  },
  {
    date: "22 Maret 2023",
    text: "He meet her parents alone~",
  },
  {
    date: "26 Maret 2023",
    text: "Our parents meet and We're officially engaged",
  },
  {
    date: "07 Juli 2023",
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