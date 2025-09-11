<template>
  <section
    id="about"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-600/15 via-purple-700/15 to-white dark:to-black/30 reveal"
  >
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      <!-- Left Content (Text) -->
      <div class="about-text opacity-0 -translate-x-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-center md:hidden bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
        >
          About Us
        </h2>
        <p
          class="mt-3 text-center italic bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent md:hidden"
        >
          ✨ “We don’t just provide services, we deliver growth.”
        </p>

        <h2
          class="text-3xl md:text-4xl font-bold hidden md:block bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
        >
          About Us
        </h2>

        <p class="mt-4 text-gray-700 dark:text-gray-300">
          At Aetherflow, we believe in building more than just services – we
          build long-term partnerships. Our team consists of passionate
          professionals with expertise in e-commerce, technology, and design,
          working together to deliver reliable, result-driven, and
          cost-effective digital solutions.
        </p>

        <ul class="mt-6 space-y-3">
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-check bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"></i>
            Innovation
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-check bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"></i>
            Integrity
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-check bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"></i>
            Quality
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-check bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"></i>
            Customer Success
          </li>
        </ul>

        <p class="mt-3 italic hidden md:block bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent">
          ✨ “We don’t just provide services, we deliver growth.”
        </p>
      </div>

      <!-- Right Content (Image) -->
      <div class="about-image relative hidden md:block opacity-0 translate-x-12">
        <img
          src="/src/assets/images/aboutUs.jpg"
          alt="About Illustration"
          class="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-x-0')
          el.classList.remove('opacity-0', '-translate-x-12', 'translate-x-12')
        } else {
          // Reset animation when scrolling away
          if (el.classList.contains('about-text')) {
            el.classList.add('opacity-0', '-translate-x-12')
            el.classList.remove('opacity-100', 'translate-x-0')
          } else if (el.classList.contains('about-image')) {
            el.classList.add('opacity-0', 'translate-x-12')
            el.classList.remove('opacity-100', 'translate-x-0')
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  document.querySelectorAll('.about-text, .about-image').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.about-text,
.about-image {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-x-0 { transform: translateX(0); }
.-translate-x-12 { transform: translateX(-3rem); }
.translate-x-12 { transform: translateX(3rem); }
</style>
