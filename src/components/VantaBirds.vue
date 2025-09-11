<template>
  <div ref="vantaRef" class="vanta-container" style="height:100vh; position:relative;">
    <div class="content" style="position:relative; z-index:2;">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
  mode: {
    type: String,
    default: "dark" // "dark" | "light"
  }
})

const vantaRef = ref(null)
let vantaEffect = null

function initVanta() {
  if (!window.VANTA || !window.VANTA.BIRDS) return

  // Destroy previous instance if switching mode
  if (vantaEffect?.destroy) vantaEffect.destroy()

  if (props.mode === "dark") {
    // 🌙 Dark Mode settings (from your screenshot)
    vantaEffect = window.VANTA.BIRDS({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x07192f,
      color1: 0xff0000,
      color2: 0x0d1fff,
      colorMode: "varianceGradient",
      quantity: 5.0,
      birdSize: 1.0,
      wingSpan: 30.0,
      speedLimit: 5.0,
      separation: 20.0,
      alignment: 20.0,
      cohesion: 20.0
    })
  } else {
    // ☀️ Light Mode settings
    vantaEffect = window.VANTA.BIRDS({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff, // white
      color1: 0x007bff,          // primary blue
      color2: 0xff9900,          // warm orange (contrast with blue & white)
      colorMode: "varianceGradient",
      quantity: 5.0,
      birdSize: 1.0,
      wingSpan: 30.0,
      speedLimit: 5.0,
      separation: 20.0,
      alignment: 20.0,
      cohesion: 20.0
    })
  }
}

onMounted(() => {
  initVanta()
})

watch(() => props.mode, () => {
  initVanta()
})

onBeforeUnmount(() => {
  if (vantaEffect?.destroy) vantaEffect.destroy()
})
</script>
