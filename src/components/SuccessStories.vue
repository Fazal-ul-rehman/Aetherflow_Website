
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const slides = [
  {
    icon: 'fa-solid fa-chart-line',
    title: '6-Figure eBay Scale-Up',
    details: '📈 Helped a small startup scale its eBay store to 6-figure annual sales within 12 months.',
    progress: 100,
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'E‑Commerce Platform Launch',
    details: '💻 Developed a fully functional e-commerce platform for a clothing brand, boosting their online presence.',
    progress: 100,
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Brand Identity Makeover',
    details: '🎨 Designed impactful logos, brochures, and brand identity that helped businesses strengthen customer trust.',
    progress: 100,
  },
  {
    icon: 'fa-solid fa-bag-shopping',
    title: 'Shopify Growth Engine',
    details: '🛒 Built and managed multiple Shopify stores with sustainable long-term growth strategies.',
    progress: 100,
  },
]
const cur = ref(0)
let timer
const go = (dir = 1) => cur.value = (cur.value + dir + slides.length) % slides.length
onMounted(() => { timer = setInterval(go, 5000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="success" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950/20 reveal">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center">Our Success Stories</h2>
      <p class="mt-3 text-center italic text-primary">✨ “Every success story begins with a bold decision to grow.”</p>
      <div class="mt-12 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
        <div class="carousel-track" :style="{ transform: `translateX(-${cur*100}%)` }">
          <div v-for="(s, i) in slides" :key="i" class="carousel-card p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-black">
            <div class="relative">
              <img src="/src/assets/vectors/success.svg" alt="Success vector" class="w-full max-w-md mx-auto" />
            </div>
            <div class="space-y-4">
              <div class="text-4xl"><i :class="s.icon" class="text-primary"></i></div>
              <h3 class="text-2xl font-semibold">{{ s.title }}</h3>
              <p class="text-gray-700 dark:text-gray-300">{{ s.details }}</p>
              <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-primary" :style="{ width: s.progress + '%', transition: 'width 1200ms ease' }"></div>
              </div>
            </div>
            
          </div>
        </div>
        <button @click="go(-1)" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full grid place-items-center bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-700 hover:shadow-soft" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
        <button @click="go(1)" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full grid place-items-center bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-700 hover:shadow-soft" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  </section>
</template>
