<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const show = ref(false);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// CHANGE DATE HERE
const launchDate = new Date("2025-12-15 00:00:00");

let interval = null;

const updateCountdown = () => {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(interval);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
};

onMounted(() => {
  show.value = true;

  // Apply blur to website
  const site = document.getElementById("site-content");
  if (site) site.classList.add("blur-background");

  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

// When component is removed, cleanup
onBeforeUnmount(() => {
  const site = document.getElementById("site-content");
  if (site) site.classList.remove("blur-background");

  clearInterval(interval);
});

// CLOSE POPUP → Remove blur
const close = () => {
  show.value = false;

  const site = document.getElementById("site-content");
  if (site) site.classList.remove("blur-background");
};
</script>

<template>
  <div 
    v-if="show" 
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
  >
    <div 
      class="relative w-[95%] max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 animate-slide"
    >
      <button 
        @click="close"
        class="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
      >
        ✕
      </button>

      <img 
        src="/vps.png"
        class="rounded-xl w-full border border-gray-200 dark:border-gray-700"
      />

      <p class="text-center mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
        🚀 VPS Servers Launching Soon!
      </p>

      <p class="text-center mt-3 text-xl font-semibold text-purple-700 dark:text-purple-300">
        Launching in: {{ days }}d : {{ hours }}h : {{ minutes }}m : {{ seconds }}s
      </p>

      <p class="text-center mt-2 text-lg text-gray-600 dark:text-gray-400">
        Stay tuned for lightning-fast hosting at Aetherflow.
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideDown {
  0% { transform: translateY(-40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.animate-slide {
  animation: slideDown 0.35s ease-out;
}
</style>

<style>
.blur-background {
  filter: blur(6px);
  transition: 0.3s ease;
}
</style>
