<template>
  <section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <!-- Grid 3 rows x 2 cols -->
      <div class="grid gap-8 md:grid-cols-2">

        <article v-for="(service, index) in serviceCards" :key="index"
          class="service-card rounded-3xl drop-shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition group opacity-0 translate-y-12"
        >
          <div class="relative w-100 h-56 bg-gradient-to-r from-purple-700/20 to-pink-400/10 dark:from-purple-900/40 dark:to-transparent">
            <img :src="service.img" :alt="service.title" class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-80 dark:opacity-70" />
          </div>
          
          <div class="relative h-28 bg-gradient-to-r from-purple-700/10 to-pink-400/10 dark:from-purple-900/30 dark:to-transparent">
            <div class="absolute left-6 top-6 pr-6">
              <h3 class="text-2xl font-semibold flex items-center gap-3">
                <i :class="service.icon" :style="{ color: service.iconColor || '#7c3aed' }"></i> {{ service.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">
                {{ service.description }}
              </p>
            </div>
          </div>
          <div class="p-6 space-y-4">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li v-for="(item, idx) in service.features" :key="idx">
                <i class="fa-solid fa-check text-purple-700"></i> {{ item }}
              </li>
            </ul>
            <p v-if="service.note" class="italic bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent">
              {{ service.note }}
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import webDevImg from "/src/assets/images/webDevelopment.png"
import graphicDesignImg from "/src/assets/images/graphicDesigning.png"
import ebayImg from "/src/assets/images/ebay.png"
import shopifyImg from "/src/assets/images/shopify.png"
import trendsImg from "/src/assets/images/trends.png"
import marketingImg from "/src/assets/images/digitalMarketing.png"

const serviceCards = [
  {
    title: "Website Development",
    description: "Scalable and modern business websites & web apps.",
    icon: "fa-solid fa-code",
    img: webDevImg,
    features: ["Business Websites","Web Applications","Debugging Services","CMS & Database","E-Commerce Sites"],
    note: "💡 “Your website is not just a digital presence, it’s your brand’s first impression.”"
  },
  {
    title: "Graphic Designing",
    description: "Logos, flyers, and full UI/UX for brands & stores.",
    icon: "fa-solid fa-pen-nib",
    img: graphicDesignImg,
    features: ["Logo Design","Flyers & Brochures","Business Cards","UI/UX Design"],
    note: "💡 “Design is the silent ambassador of your brand.”"
  },
  {
    title: "eBay Account Handling",
    description: "End-to-end personal & business account management.",
    icon: "fa-brands fa-ebay",
    img: ebayImg,
    features: ["Winning Product Hunting","Product Listing & SEO","Inventory Management","Customer Service","Complete Handling"],
    note: "💡 “A successful eBay business doesn’t start with products, it starts with the right strategy.”"
  },
  {
    title: "Shopify Store Handling",
    description: "From setup to growth — complete Shopify solutions.",
    icon: "fa-brands fa-shopify",
    iconColor: "#22c55e",
    img: shopifyImg,
    features: ["Product Research","Store Design","Product Listing","Account Management","Digital Marketing"],
    note: "💡 “Great design and strategy turn a store into a brand.”"
  },
  {
    title: "Winning Product Research",
    description: "Discover profitable, trending products to scale your store.",
    icon: "fa-solid fa-magnifying-glass-chart",
    img: trendsImg,
    features: ["Market Analysis","Trend Spotting","Competitive Research"]
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand reach through smart campaigns.",
    icon: "fa-solid fa-bullhorn",
    img: marketingImg,
    features: ["SEO Optimization","Social Media Marketing","Paid Ads Management"]
  },
]

import { onMounted } from "vue"

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

  document.querySelectorAll('.service-card').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.service-card {
  transition: all 1s cubic-bezier(0.4,0,0.2,1);
}
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-0 { transform: translateY(0); }
.translate-y-12 { transform: translateY(3rem); }
</style>
