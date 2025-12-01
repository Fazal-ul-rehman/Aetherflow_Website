<template>
  <section id="vpspricing" class="py-16 bg-[#0b1120] text-white">
    <h2 class="text-4xl font-bold text-center mb-2">Compare Our Pricing Plans</h2>
    <p class="text-center mb-6 text-gray-300">Find the perfect fit for your needs</p>

    <!-- Flags / Locations Selector -->
    <div class="flex items-center justify-center gap-4 mb-4">
      <button
        v-for="country in countries"
        :key="country.code"
        @click="selectCountry(country.code)"
        :class="[
          'p-2 rounded-lg border-2 bg-[#071026] hover:scale-150 transition',
          selected === country.code ? 'border-cyan-300 shadow-lg glow-flag' : 'border-transparent'
        ]"
      >
        <span :class="`fi fi-${country.code}`"></span>
      </button>
    </div>

    <!-- Choose Country Notice -->
    <p v-if="!showCards" class="text-center text-gray-400 mb-10 text-lg">
      Choose a country to see pricing
    </p>

    <!-- Selected Country Label -->
    <h3
      v-if="showCards"
      class="text-center text-cyan-300 text-xl font-semibold mb-6 fade-in"
    >
      Selected Country: {{ selected.toUpperCase() }}
    </h3>

    <!-- Cards Container with fade animation -->
    <transition name="fade">
      <div
        v-if="showCards"
        class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <!-- Card (reused for 3 plans) -->
        <div 
          v-for="plan in vpsPlans"
          :key="plan.title"
          class="bg-[#0f172a] rounded-2xl p-8 shadow-xl relative border hover:scale-[1.02] transition slide-up"
          :class="plan.borderClass"
        >

          <!-- heading with gradient border -->
          <div class="mx-auto mb-6 p-[3px] w-fit rounded-full" :class="plan.headerGradient">
            <div class="px-5 py-1 rounded-full bg-[#0f172a] text-white text-lg font-semibold">
              {{ plan.title }}
            </div>
          </div>

          <!-- Price Circle -->
          <div class="mx-auto w-40 h-40 rounded-full flex items-center justify-center mb-4"
              :class="plan.priceWrapperClass">
            <div
              class="w-full h-full rounded-full flex flex-col items-center justify-center bg-[#0f172a]"
              :class="plan.circlePrice"
            >
              <span class="text-3xl font-bold">${{ plan.price }}<span class="text-lg">.99</span></span>
              <span class="text-gray-400 text-sm">per month</span>
            </div>
          </div>

          <!-- Best Deal badge -->
          <div v-if="plan.best"
            class="absolute top-20 left-1/2 -translate-x-1/2 bg-green-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            Best Deal
          </div>

          <!-- Resources -->
          <div class="mt-6">
            <div class="grid grid-cols-2 text-left text-gray-300 text-sm gap-y-2">
              <span class="font-semibold">Resources</span>
              <span class="font-semibold">Specification</span>

              <span>vCPU</span><span>{{ plan.vcpu }}</span>
              <span>RAM</span><span>{{ plan.ram }}</span>
              <span>NVME</span><span>{{ plan.nvme }}</span>
              <span>Bandwidth</span><span>{{ plan.bandwidth }}</span>
              <span>Dedicated IP</span><span>✔️</span>
              <span>OS Reinstallation</span><span>✔️</span>
              <span>Location</span><span>{{ selected }}</span>
            </div>
          </div>

          <button class="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
            Buy VPS
          </button>

        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const countries = [
  { name: 'USA', code: 'us' },
  { name: 'UK', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'Turkey', code: 'tr' },
  { name: 'France', code: 'fr' },
  { name: 'Netherlands', code: 'nl' }
]

const selected = ref('')
const showCards = ref(false)

function selectCountry(code) {
  showCards.value = false
  setTimeout(() => {
    selected.value = code
    showCards.value = true
  }, 200) // fade-out then fade-in
}

const vpsPlans = [
  {
    title: 'Basic VPS',
    price: '9',
    vcpu: '2 vCPU',
    ram: '2GB',
    nvme: '20GB',
    bandwidth: '10TB',
    best: false,
    headerGradient: 'bg-gradient-to-r from-green-400 to-cyan-400',
    priceWrapperClass: 'rounded-full border-[3px] border-transparent bg-gradient-to-r from-green-300 to-cyan-300 p-[3px]'
  },
  {
    title: 'Standard VPS',
    price: '14',
    vcpu: '2 vCPU',
    ram: '3GB',
    nvme: '30GB',
    bandwidth: '20TB',
    best: true,
    headerGradient: 'bg-gradient-to-r from-cyan-300 to-green-300',
    priceWrapperClass: 'rounded-full bg-gradient-to-b from-cyan-400 to-green-400',
    circlePrice: 'rounded-full bg-gradient-to-b from-cyan-400 to-green-400'
  },
  {
    title: 'Premium VPS',
    price: '19',
    vcpu: '4 vCPU',
    ram: '4GB',
    nvme: '40GB',
    bandwidth: '30TB',
    best: false,
    headerGradient: 'bg-gradient-to-r from-green-400 to-blue-400',
    priceWrapperClass: 'rounded-full border-[3px] border-transparent bg-gradient-to-r from-blue-300 to-green-300 p-[3px]'
  }
]
</script>

<style scoped>
/* Glow animation */
.glow-flag {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.8),
              0 0 20px rgba(0, 255, 255, 0.6);
  transition: 0.3s ease;
}

/* Fade in cards */
.fade-enter-active {
  animation: fadeIn 0.4s ease;
}
.fade-leave-active {
  animation: fadeOut 0.3s ease;
}

/* Slide-up for cards */
.slide-up {
  animation: slideUp 0.6s ease;
}

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Label fade */
.fade-in {
  animation: fadeIn 0.5s ease;
}
</style>
