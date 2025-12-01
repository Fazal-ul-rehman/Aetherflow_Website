<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur shadow-md">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 group">
        <span>
          <img src="/src/assets/logo/logoDark.png" alt="Logo" class="w-40 h-auto hidden dark:block" />
          <img src="/src/assets/logo/logoLight1.png" alt="Logo" class="w-40 h-auto block dark:hidden" />
        </span>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="item in nav" :key="item.href">
          <a 
            :href="item.href" 
            class="hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Dark Mode Toggle -->
        <button 
          @click="$emit('toggleDark')" 
          class="w-10 h-10 grid place-items-center rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-md transition" 
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <i 
            :class="[isDark ? 'fa-solid fa-sun text-purple-600' : 'fa-solid fa-moon text-purple-700']">
          </i>
        </button>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden w-10 h-10 grid place-items-center" 
          @click="open = !open" 
          aria-label="Toggle menu"
        >
          <i class="fa-solid fa-bars text-purple-700 dark:text-purple-400"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <div v-if="open" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95">
      <ul class="px-4 py-3 space-y-2">
        <li v-for="item in nav" :key="'m'+item.href">
          <a 
            :href="item.href" 
            @click="open=false" 
            class="block py-2 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Initialize darkMode prop to true by default
const props = defineProps({
  darkMode: {
    type: Boolean,
    default: true
  }
})

const isDark = computed(() => props.darkMode)
const open = ref(false)

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'VPS Pricing', href: '#vpspricing' },
  { label: 'Customer Remarks', href: '#testimonials' },
  { label: 'Our Success Stories', href: '#success' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
]

// Apply dark class on mount
onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// Watch for changes if toggleDark is emitted from parent
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>
