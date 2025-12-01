<template>
  <section
    id="stats"
    class="relative py-20 bg-gradient-to-b from-purple-700/10 via-purple-800/10 to-white dark:to-black"
  >
    <div class="max-w-6xl mx-auto px-6">
      <h2
        class="text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
      >
        Our Impact in Numbers
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mt-14">
        <!-- Stat Card -->
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="p-8 rounded-3xl shadow-lg bg-white dark:bg-gray-900 transition hover:scale-105"
        >
          <h3
            class="text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
          >
            {{ stat.display }}<span class="text-purple-700 dark:text-purple-400">+</span>
          </h3>
          <p class="mt-3 text-lg text-gray-600 dark:text-gray-300 font-medium">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = ref([
  { label: "Projects Completed", value: 30, display: 0 },
  { label: "Active Clients", value: 13, display: 0 },
  { label: "Sales Boosted in Euro", value: 50000, display: 0 },
]);

function animateCounter(stat) {
  let start = 0;
  const end = stat.value;
  const duration = 2000;
  const increment = end / (duration / 16);

  const counter = setInterval(() => {
    start += increment;
    stat.display = Math.floor(start);

    if (start >= end) {
      stat.display = end;
      clearInterval(counter);
    }
  }, 16);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.value.forEach((stat) => animateCounter(stat));
          observer.disconnect(); // run animation only once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.querySelector("#stats"));
});
</script>
