<template>
  <section id="success" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black reveal">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
        Our Success Stories
      </h2>
      <p class="mt-2 text-center italic bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent">
        ✨ “Every success story begins with a bold decision to grow.”
      </p>

      <div class="mt-12 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">

        <div class="carousel-track" :style="{ transform: `translateX(-${cur*100}%)` }">
          <div 
            v-for="(s, i) in slides" 
            :key="i" 
            class="carousel-card success-slide p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center rounded-3xl drop-shadow-xl bg-gradient-to-r from-purple-700/10 to-pink-400/10 dark:from-purple-900/30 dark:to-transparent border border-gray-200 dark:border-gray-800 opacity-0 translate-y-12 transition-all duration-1000 group hover:shadow-lg"
          >
            <div class="relative">
              <img :src="s.img" alt="Success vector" class="w-full max-w-md mx-auto opacity-80 dark:opacity-70 select-none pointer-events-none" />
            </div>

            <div class="space-y-4">
              <div class="text-4xl text-purple-700"><i :class="s.icon"></i></div>
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">{{ s.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ s.details }}</p>
              <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-purple-700" :style="{ width: s.progress + '%', transition: 'width 1200ms ease' }"></div>
              </div>
            </div>

          </div>
        </div>

        <!-- Navigation Buttons -->
        <button @click="go(-1)" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full grid place-items-center bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-700 hover:shadow-soft" aria-label="Previous">
          <i class="fa-solid fa-chevron-left text-purple-700"></i>
        </button>
        <button @click="go(1)" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full grid place-items-center bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-700 hover:shadow-soft" aria-label="Next">
          <i class="fa-solid fa-chevron-right text-purple-700"></i>
        </button>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ebayImg from "/src/assets/images/ebay2.png"
import ebayImg2 from "/src/assets/images/ebay3.png"
import shopifyStore from "/src/assets/images/store.png"
import tikkaTonic from "/src/assets/images/tikkatonicWebsite.png"
import tikkaTonicLogo from "/src/assets/images/tikkatonic.png"

const slides = [
  {
    icon: 'fa-solid fa-chart-line',
    title: '6-Figure eBay Scale-Up',
    details: '📈 Helped a small startup scale its eBay store to 6-figure annual sales within 2 months.',
    progress: 100,
    img: ebayImg2,
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Building Trust, Driving Sales',
    details: 'We successfully managed our client’s eBay store, maintaining an impressive 98.9% positive feedback rating. With consistent optimization and growth strategies, the store achieved thousands of monthly sales. This journey reflects our commitment to driving sustainable e-commerce success.',
    progress: 100,
    img: ebayImg,
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'E‑Commerce Platform Launch',
    details: '💻 Developed a fully functional e-commerce platform for a clothing brand, boosting their online presence.',
    progress: 100,
    img: shopifyStore,
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'TikkaTonic – A Digital Flavor Journey',
    details: '🛒 We had the privilege of developing TikkaTonic.eu, a modern restaurant website for our German client. With a clean and beautiful UI/UX design, the platform delivers a seamless browsing experience, allowing customers to explore the menu, discover events, and easily make reservations. This project reflects our ability to blend design and functionality, helping restaurants strengthen their digital presence and attract more customers.',
    progress: 100,
    img: tikkaTonic,
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Brand Identity Makeover',
    details: '🎨 Designed impactful logos, brochures, Menu Cards and brand identity that helped businesses strengthen customer trust.',
    progress: 100,
    img: tikkaTonicLogo,
  },
]

const cur = ref(0)
let timer
const go = (dir = 1) => cur.value = (cur.value + dir + slides.length) % slides.length

onMounted(() => { 
  timer = setInterval(go, 5000)

  // Scroll-triggered animation
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-12')
        } else {
          el.classList.add('opacity-0', 'translate-y-12')
          el.classList.remove('opacity-100', 'translate-y-0')
        }
      })
    },
    { threshold: 0.3 }
  )

  document.querySelectorAll('.success-slide').forEach(el => observer.observe(el))
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.success-slide {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-0 { transform: translateY(0); }
.translate-y-12 { transform: translateY(3rem); }
</style>
