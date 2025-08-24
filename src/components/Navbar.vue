
<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur shadow-sm drop-shadow-xl">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-2 group">
        
        <span>
          <img src="/src/assets/logo/logoDark.png" alt="Logo" class="w-40 h-auto hidden dark:block" />
          <!-- <img src="@/assets/logo/logoLight.png" alt="Logo" class="w-40 h-auto block dark:hidden" /> -->
        </span>
      </a>
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="item in nav" :key="item.href">
          <a :href="item.href" class="hover:text-primary transition-colors">{{ item.label }}</a>
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <button @click="$emit('toggleDark')" class="w-10 h-10 grid place-items-center rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-soft transition" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <i :class="[isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon']" class="text-primary"></i>
        </button>
        <button class="md:hidden w-10 h-10 grid place-items-center" @click="open = !open" aria-label="Toggle menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
    <div v-if="open" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90">
      <ul class="px-4 py-3 space-y-2">
        <li v-for="item in nav" :key="'m'+item.href">
          <a :href="item.href" @click="open=false" class="block py-2 hover:text-primary">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ darkMode: Boolean })
const isDark = computed(() => props.darkMode)
const open = ref(false)
const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Customer Remarks', href: '#testimonials' },
  { label: 'Our Success Stories', href: '#success' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
]
</script>
