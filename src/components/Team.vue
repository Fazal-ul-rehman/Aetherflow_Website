<template>
  <section id="team" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <!-- Avatar -->
          <img
            :src="member.image"
            :alt="member.name"
            class="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 object-cover"
          />
          <!-- Info -->
          <h3 class="mt-6 text-xl font-semibold">{{ member.name }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ member.designation }}</p>
          <a
            :href="`mailto:${member.email}`"
            class="block mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            {{ member.email }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import fazalImg from "/src/assets/images/fazal.jpeg"
import nafeesImg from "/src/assets/images/nafees.jpg"
import zeshanImg from "/src/assets/images/zeshan.jpg"
import saddiqueImg from "/src/assets/images/saddique.jpg"
import emptyImg from "/src/assets/images/empty.jpg"
import hammadImg from "/src/assets/images/hammad.jpg"

const team = [
  {
    name: "Fazal Ur Rehman",
    designation: "Director & Co-Founder",
    email: "fazal@aetherflow.pk",
    image: fazalImg,
  },
  {
    name: "Nafees Ur Rehman",
    designation: "CEO & Co-Founder",
    email: "ceo@aetherflow.pk",
    image: nafeesImg,
  },
  {
    name: "Muhammad Zeeshan",
    designation: "Social Media Expert & Co-Founder",
    email: "contact@aetherflow.pk",
    image: zeshanImg,
  },
  {
    name: "Saddique Ur Rehman",
    designation: "Senior Software Engineer & CTO",
    email: "contact@aetherflow.pk",
    image: saddiqueImg,
  },
  {
    name: "Danish Ali",
    designation: "E-commerce Manager",
    email: "contact@aetherflow.pk",
    image: emptyImg,
  },
  {
    name: "Muhammad Kamran Ali",
    designation: "Senior Graphic Designer",
    email: "contact@aetherflow.pk",
    image: emptyImg,
  },
  {
    name: "Abdullah Attique",
    designation: "CEO Assistant",
    email: "contact@aetherflow.pk",
    image: emptyImg,
  },
  {
    name: "Muhammad Hassan",
    designation: "Employee",
    email: "contact@aetherflow.pk",
    image: emptyImg,
  },
  {
    name: "Muhmmad Hammad",
    designation: "Employee",
    email: "contact@aetherflow.pk",
    image: hammadImg,
  },
]
</script>

<style scoped>
/* Subtle fade-in animation */
section {
  animation: fadeIn 1.2s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
