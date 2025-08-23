
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const testimonials = [
  { quote: 'Aetherflow has completely transformed my eBay business. From product hunting to order management, they’ve made the process seamless.', name: 'Michael R.' },
  { quote: 'Their web development team built an amazing e-commerce website for my brand. Sales increased within the first month!', name: 'Sarah L.' },
  { quote: 'The graphic designs were stunning – our company logo and flyers helped us stand out in the market.', name: 'Daniel K.' },
]
const idx = ref(0)
let timer
onMounted(() => { timer = setInterval(() => idx.value = (idx.value + 1) % testimonials.length, 4500) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black reveal">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold">Client Remarks</h2>
      <div class="mt-10 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
        <div class="carousel-track" :style="{ transform: `translateX(-${idx*100}%)` }">
          <div v-for="(t, i) in testimonials" :key="i" class="carousel-card p-10 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent">
            <i class="fa-solid fa-quote-left text-4xl text-primary"></i>
            <p class="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200">“{{ t.quote }}”</p>
            <p class="mt-4 font-semibold">— {{ t.name }}</p>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <button v-for="(t, i) in testimonials" :key="'dot'+i" @click="idx = i" class="w-2.5 h-2.5 rounded-full" :class="i===idx ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'"></button>
        </div>
      </div>
    </div>
  </section>
</template>
