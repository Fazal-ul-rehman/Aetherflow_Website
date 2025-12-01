<template>
  <section id="team" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black reveal">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100 team-heading opacity-0 transform translate-y-6 transition-all duration-1000">
        Meet Our Team
      </h2>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="team-card rounded-3xl border border-gray-200 dark:border-gray-800 p-6 transform opacity-0 translate-y-12 transition-all duration-1000 bg-gradient-to-r from-purple-700/20 to-pink-400/20 dark:from-purple-900/30 dark:to-transparent"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Avatar with gradient glow -->
          <div class="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent">
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-700 to-pink-400 opacity-30 blur-lg"></div>
            <img
              :src="member.image"
              :alt="member.name"
              class="relative w-full h-full object-cover rounded-full"
            />
          </div>

          <!-- Info -->
          <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">{{ member.name }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ member.designation }}</p>
          <a
            :href="`mailto:${member.email}`"
            class="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400 hover:underline text-sm"
          >
            {{ member.email }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import fazalImg from "/src/assets/images/fazal.jpeg"
import nafeesImg from "/src/assets/images/nafees.jpg"
import zeshanImg from "/src/assets/images/zeshan.jpg"
import saddiqueImg from "/src/assets/images/saddique.jpg"
import emptyImg from "/src/assets/images/empty.jpg"
import hammadImg from "/src/assets/images/hammad.jpg"
import abdullahImg from "/src/assets/images/abdullah1.jpg"

const team = [
  { name: "Fazal Ur Rehman", designation: "Director & Co-Founder", email: "fazal@aetherflow.pk", image: fazalImg },
  { name: "Nafees Ur Rehman", designation: "CEO & Co-Founder", email: "ceo@aetherflow.pk", image: nafeesImg },
  { name: "Muhammad Zeeshan", designation: "Social Media Expert & Co-Founder", email: "contact@aetherflow.pk", image: zeshanImg },
  { name: "Saddique Ur Rehman", designation: "Senior Software Engineer & CTO", email: "contact@aetherflow.pk", image: saddiqueImg },
  { name: "Danish Ali", designation: "E-commerce Manager", email: "contact@aetherflow.pk", image: emptyImg },
  { name: "Muhammad Kamran Ali", designation: "Senior Graphic Designer", email: "contact@aetherflow.pk", image: emptyImg },
  { name: "Muhammad Hassan", designation: "Employee", email: "contact@aetherflow.pk", image: emptyImg },
  { name: "Muhmmad Hammad", designation: "Employee", email: "contact@aetherflow.pk", image: hammadImg },
  { name: "Azhar", designation: "Part Time Employee", email: "contact@aetherflow.pk", image: emptyImg },
  { name: "Ali Raza", designation: "Employee", email: "contact@aetherflow.pk", image: emptyImg },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12')
          entry.target.classList.add('opacity-100', 'translate-y-0')
        }
      })
    },
    { threshold: 0.2 }
  )

  // Animate heading
  const heading = document.querySelector('.team-heading')
  if (heading) observer.observe(heading)

  // Animate cards
  const cards = document.querySelectorAll('.team-card')
  cards.forEach((card) => observer.observe(card))
})
</script>

<style scoped>
.team-heading,
.team-card {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
