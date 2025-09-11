<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = [
  { quote: 'Aetherflow has completely transformed my eBay business. From product hunting to order management, they’ve made the process seamless.', name: 'Michael R.' },
  { quote: 'Their web development team built an amazing e-commerce website for my brand. Sales increased within the first month!', name: 'Sarah L.' },
  { quote: 'The graphic designs were stunning – our company logo and flyers helped us stand out in the market.', name: 'Daniel K.' },
]

const idx = ref(0)
let timer

const startCarousel = () => {
  timer = setInterval(() => idx.value = (idx.value + 1) % testimonials.length, 4500)
}

const stopCarousel = () => {
  clearInterval(timer)
}

onMounted(() => {
  startCarousel()

  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-12')
          startCarousel() // ensure carousel keeps running when visible
        } else {
          el.classList.add('opacity-0', 'translate-y-12')
          el.classList.remove('opacity-100', 'translate-y-0')
          stopCarousel() // pause carousel when out of view
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = document.querySelector('#testimonials')
  if (section) observer.observe(section)
})

onBeforeUnmount(() => {
  stopCarousel()
})
</script>

<template>
  <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black opacity-0 translate-y-12 transition-all duration-1000">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Client Remarks</h2>

      <div class="mt-10 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
        <div class="carousel-track flex transition-transform duration-500" :style="{ transform: `translateX(-${idx*100}%)` }">
          <div v-for="(t, i) in testimonials" :key="i" class="carousel-card flex-shrink-0 w-full p-10 rounded-3xl drop-shadow-xl bg-gradient-to-r from-purple-700/10 to-pink-400/10 dark:from-purple-900/30 dark:to-transparent">
            <i class="fa-solid fa-quote-left text-4xl text-purple-700"></i>
            <p class="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200">“{{ t.quote }}”</p>
            <p class="mt-4 font-semibold text-gray-900 dark:text-gray-100">— {{ t.name }}</p>
          </div>
        </div>

        <!-- Dots -->
        <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <button
            v-for="(t, i) in testimonials"
            :key="'dot'+i"
            @click="idx = i"
            class="w-3 h-3 rounded-full transition-all"
            :class="i===idx
              ? 'bg-gradient-to-r from-purple-700 to-pink-400'
              : 'bg-gray-300 dark:bg-gray-700'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-card {
  transition: transform 0.5s ease;
}

.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-0 { transform: translateY(0); }
.translate-y-12 { transform: translateY(3rem); }

section {
  transition: all 1s cubic-bezier(0.4,0,0.2,1);
}
</style>
