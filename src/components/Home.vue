
<template>
  <section id="home" class="relative min-h-[88vh] grid place-items-center overflow-hidden">
    <img src="/src/assets/vectors/homeDark.png" alt="Aetherflow background"
         class="absolute inset-0 w-full h-full object-cover opacity-35 dark:opacity-35 select-none pointer-events-none hidden dark:block" />
    
    <img src="/src/assets/vectors/homeLight.jpg" alt="Aetherflow background"
         class="absolute inset-0 w-full h-full object-cover opacity-35 dark:opacity-35 select-none pointer-events-none block dark:hidden" />
   
    <div class="relative z-10 max-w-3xl text-center px-6">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight animate-fadeInUp">
        🚀 Turning Ideas into <span class="text-primary">Digital Success</span>
      </h1>
      <p class="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fadeInUp">
        At Aetherflow, we empower businesses and individuals with modern digital solutions – from eBay account handling to web development, graphic designing, and Shopify store management. Our mission is simple: to help you grow, scale, and succeed in the digital world.
      </p>
      <p class="mt-6 italic text-primary animate-fadeInUp">✨ “Success in business today is all about being agile, adaptable, and digital.”</p>
      <div class="mt-8 flex items-center justify-center gap-4 animate-fadeInUp">
        <a href="#services" class="px-6 py-3 rounded-2xl bg-primary text-white hover:opacity-90 transition shadow-soft">Explore Services</a>
        <a href="#contact" class="px-6 py-3 rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white transition">Get in Touch</a>
      </div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-black/90"></div>
  </section>
</template>
