<template>
  <section id="home" class="relative min-h-[88vh] grid place-items-center overflow-hidden">
    <!-- Background overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-purple-700/20 via-purple-800/20 to-white/90 dark:to-black/90"></div>

    <div class="relative z-10 max-w-3xl text-center px-6 home-content opacity-0 translate-y-12">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
        🚀 Turning Ideas into 
        <span class="bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent">
          Digital Success
        </span>
      </h1>

      <p class="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300">
        At Aetherflow, we empower businesses and individuals with modern digital solutions – 
        from eBay account handling to web development, graphic designing, and Shopify store management. 
        Our mission is simple: to help you grow, scale, and succeed in the digital world.
      </p>

      <p class="mt-6 italic bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent">
        ✨ “Success in business today is all about being agile, adaptable, and digital.”
      </p>

      <div class="mt-8 flex items-center justify-center gap-4">
        <a 
          href="#services" 
          class="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-400 text-white hover:opacity-90 transition shadow-lg"
        >
          Explore Services
        </a>
        <a 
          href="#contact" 
          class="px-6 py-3 rounded-2xl border border-transparent bg-white text-purple-700 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-400 hover:text-white transition shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
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

  const content = document.querySelector('.home-content')
  if (content) observer.observe(content)
})
</script>

<style scoped>
.home-content {
  transition: all 1s cubic-bezier(0.4,0,0.2,1);
}
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-0 { transform: translateY(0); }
.translate-y-12 { transform: translateY(3rem); }
</style>
