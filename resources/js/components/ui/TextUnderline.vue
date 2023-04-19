<template>
  <div class="column items-center">
    <div class="text-h5">the wedding of</div>
    <div class="divider">
      <span></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style>
.divider {
  margin-top: 1px;
  background-color: #4e340d;
  border: 0 solid #4e340d;
  border-radius: 9999px;
  height: 0.25rem;
  width: 12.5rem;
  position: relative;
  overflow: hidden;
}

.divider span {
  height: 4px;
  width: 50px;
  background: #fff;
  position: absolute;
  border-radius: 15px;
  top: 0;
  left: 10px;
  -webkit-animation: moving 15s linear infinite;
  animation: moving 15s linear infinite;
}

@-webkit-keyframes moving {
  0% {
    left: -50px;
  }
  100% {
    left: 100%;
  }
}

@keyframes moving {
  0% {
   left: -50px;
  }
  100% {
    left: 100%;
  }
}
</style>
