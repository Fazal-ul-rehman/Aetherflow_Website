
<template>
  <div :class="[isDark ? 'dark' : '']">
    <div class="min-h-screen font-sans">
      <Navbar :darkMode="isDark" @toggleDark="toggleDark" />
      <main class="pt-16">
        <Home />
        <Services />
        <Testimonials />
        <SuccessStories />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Testimonials from './components/Testimonials.vue'
import SuccessStories from './components/SuccessStories.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Team from './components/Team.vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('aetherflow-theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>
