<template>
  <section
    id="contact"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-700/10 via-purple-800/10 to-white dark:to-black/40 reveal"
  >
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <!-- Left Content -->
      <div class="contact-left opacity-0 -translate-x-12">
        <h2
          class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
        >
          📩 Let’s Build Something Great Together!
        </h2>

        <!-- 🌍 Pakistan Office -->
        <h3
          class="mt-6 text-xl font-semibold text-purple-700 dark:text-purple-300"
        >
          Pakistan Office
        </h3>

        <ul class="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-envelope bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Contact@aetherflow.pk
          </li>
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-phone bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            +923391434249
          </li>
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-location-dot bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Pindi Das Road, Shahdara Lahore, Pakistan
          </li>
        </ul>

        <!-- 🇵🇹 Portugal Office -->
        <h3
          class="mt-8 text-xl font-semibold text-purple-700 dark:text-purple-300"
        >
          Portugal Office
        </h3>

        <ul class="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-envelope bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Contact@aetherflow.pk
          </li>
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-phone bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            +351935888466
          </li>
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-location-dot bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Rua Jardim 59, Vila Nova de Gaia, 4405-827, Porto, Portugal
          </li>
        </ul>

        <!-- 🇩🇪 Germany Office -->
        <h3
          class="mt-8 text-xl font-semibold text-purple-700 dark:text-purple-300"
        >
          German Office
        </h3>

        <ul class="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-envelope bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Contact@aetherflow.pk
          </li>
            <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-phone bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            +4915750634907
          </li>
          <li class="flex items-center gap-3">
            <i
              class="fa-solid fa-location-dot bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
            ></i>
            Hirtenstr. 10, 30952, Ronnenberg, Germany
          </li>
        
        </ul>

        <p
          class="mt-6 italic bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent"
        >
          ✨ “The future belongs to those who dare to create it.”
        </p>

        <div class="mt-6 rounded-2xl overflow-hidden shadow-md">
          <!-- You can later switch map dynamically, keeping Pakistan for now -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.3347025776722!2d74.26996429894608!3d31.624122541901386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d5111d9b187%3A0xf22d04a0e2d49429!2sAetherflow%20Pakistan!5e0!3m2!1sen!2sde!4v1756635072855!5m2!1sen!2sde"
            width="100%"
            height="200"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <form
        @submit.prevent="submitForm"
        class="contact-form opacity-0 translate-x-12 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-4"
      >
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="text-sm">Name</label>
            <input
              v-model="name"
              required
              type="text"
              class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>
          <div>
            <label class="text-sm">Email</label>
            <input
              v-model="email"
              required
              type="email"
              class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>
        </div>

        <div>
          <label class="text-sm">Subject</label>
          <input
            v-model="subject"
            required
            type="text"
            class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>

        <div>
          <label class="text-sm">Message</label>
          <textarea
            v-model="message"
            required
            rows="5"
            class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-700"
          ></textarea>
        </div>

        <div class="flex items-center justify-between gap-4">
          <button
            type="submit"
            class="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-400 text-white hover:opacity-90 transition shadow-lg"
          >
            Send Message
          </button>
          <p class="text-xs text-gray-500">
            By submitting, you agree to our terms.
          </p>
        </div>

        <p
          v-if="successMessage"
          class="mt-6 text-green-600 dark:text-green-400"
        >
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="mt-6 text-red-600 dark:text-red-400">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const status = ref("pending");

async function submitForm() {
  try {
    await addDoc(collection(db, "website_inquiry"), {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      receivedAt: serverTimestamp(),
      status: status.value,
    });
    successMessage.value = "✅ Your message has been sent successfully!";
    errorMessage.value = "";
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    console.error(error);
    errorMessage.value = "❌ Failed to send message. Please try again.";
  }
}

// Scroll-triggered animation (repeats every time)
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-x-0");
          el.classList.remove("opacity-0", "-translate-x-12", "translate-x-12");
        } else {
          if (el.classList.contains("contact-left")) {
            el.classList.add("opacity-0", "-translate-x-12");
            el.classList.remove("opacity-100", "translate-x-0");
          } else if (el.classList.contains("contact-form")) {
            el.classList.add("opacity-0", "translate-x-12");
            el.classList.remove("opacity-100", "translate-x-0");
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  document
    .querySelectorAll(".contact-left, .contact-form")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.contact-left,
.contact-form {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.translate-x-0 {
  transform: translateX(0);
}
.-translate-x-12 {
  transform: translateX(-3rem);
}
.translate-x-12 {
  transform: translateX(3rem);
}
</style>
