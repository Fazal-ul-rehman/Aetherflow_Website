<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const layers = document.querySelectorAll<SVGGElement>(".layer");
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    const y = window.scrollY || window.pageYOffset;
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed || "0.25");
      const offset = y * speed * -0.25;
      layer.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", update);
  });
});
</script>

<template>
  <main
    class="hero relative h-[160vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-sky-200"
  >
    <!-- Background SVG -->
    <div class="absolute inset-0 w-full h-full pointer-events-none z-10">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="pulseLine" x1="0" x2="1">
            <stop offset="0" stop-color="#38bdf8" stop-opacity="0.95" />
            <stop offset="1" stop-color="#ffffff" stop-opacity="0.9" />
          </linearGradient>
        </defs>

        <!-- BACKGROUND CLOUDS -->
        <g class="layer" data-speed="0.1">
          <ellipse
            cx="400"
            cy="120"
            rx="100"
            ry="40"
            fill="rgba(255,255,255,0.5)"
            class="animate-[drift_18s_linear_infinite]"
          />
          <ellipse
            cx="1200"
            cy="160"
            rx="140"
            ry="50"
            fill="rgba(255,255,255,0.4)"
            class="animate-[drift_24s_linear_infinite]"
          />
        </g>

        <!-- NETWORK LINES + NODES -->
        <g class="layer" data-speed="0.25">
          <!-- Lines -->
          <path
            d="M 300 500 C 500 300, 1100 300, 1300 500"
            class="network-line"
          />
          <path
            d="M 600 700 C 800 500, 1000 500, 1200 700"
            class="network-line"
          />

          <!-- Nodes -->
          <circle
            cx="300"
            cy="500"
            r="14"
            class="node"
          />
          <circle
            cx="1300"
            cy="500"
            r="14"
            class="node"
          />
          <circle
            cx="600"
            cy="700"
            r="14"
            class="node"
          />
          <circle
            cx="1200"
            cy="700"
            r="14"
            class="node"
          />

          <!-- Icons as small nodes -->
          <g transform="translate(950,400)">
            <rect
              x="-16"
              y="-12"
              width="32"
              height="24"
              rx="4"
              fill="#fff"
              stroke="#38bdf8"
              stroke-width="2"
            />
            <circle cx="0" cy="14" r="3" fill="#38bdf8" />
          </g>

          <g transform="translate(700,580)">
            <rect
              x="-18"
              y="-14"
              width="36"
              height="28"
              rx="5"
              fill="#38bdf8"
              opacity="0.2"
            />
            <text
              x="-12"
              y="2"
              font-size="10"
              fill="#38bdf8"
              opacity="0.9"
            >
              DB
            </text>
          </g>
        </g>

        <!-- FOREGROUND CLOUDS -->
        <g class="layer" data-speed="0.4">
          <ellipse
            cx="800"
            cy="800"
            rx="200"
            ry="70"
            fill="rgba(255,255,255,0.6)"
            class="animate-[drift_22s_linear_infinite]"
          />
        </g>
      </svg>
    </div>

    <!-- Foreground Content -->
    <div class="relative z-40 text-center max-w-3xl px-6">
      <h1 class="text-4xl md:text-6xl font-bold text-sky-900 mb-4">
        Cloud IT Services
      </h1>
      <p class="text-lg text-sky-700 mb-6">
        Seamless connectivity with secure cloud servers, laptops, and data
        centers — a living network of infinite digital possibilities.
      </p>
      <div class="flex gap-4 justify-center">
        <a
          href="#"
          class="bg-gradient-to-r from-sky-400 to-white text-sky-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          Get Started
        </a>
        <a
          href="#"
          class="border border-sky-300 text-sky-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/60 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Glowing network lines */
.network-line {
  stroke: url(#pulseLine);
  stroke-width: 2.5;
  stroke-dasharray: 8 6;
  animation: flowPulse 3s linear infinite;
  fill: none;
}

/* Nodes */
.node {
  fill: white;
  stroke: #38bdf8;
  stroke-width: 3;
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.5));
  animation: nodePulse 4s ease-in-out infinite;
}

@keyframes flowPulse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -36;
  }
}

@keyframes nodePulse {
  0% {
    r: 12;
    opacity: 0.8;
  }
  50% {
    r: 16;
    opacity: 1;
  }
  100% {
    r: 12;
    opacity: 0.8;
  }
}

/* Cloud drift */
@keyframes drift {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-8px) translateX(5px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
</style>
