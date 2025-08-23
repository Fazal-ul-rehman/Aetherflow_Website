<template>
  <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black reveal">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">📩 Let’s Build Something Great Together!</h2>
        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-center gap-3"><i class="fa-solid fa-envelope text-primary"></i> contact@aetherflow.pk</li>
          <li class="flex items-center gap-3"><i class="fa-solid fa-phone text-primary"></i> +923484473442</li>
          <li class="flex items-center gap-3"><i class="fa-solid fa-location-dot text-primary"></i> Pindi Das road, Shahdara Lahore, Pakistan</li>
        </ul>
        <p class="mt-6 italic text-primary">✨ “The future belongs to those who dare to create it.”</p>
      </div>
      <form @submit.prevent="submitForm" class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-4">
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="text-sm">Name</label>
            <input v-model="name" required type="text" class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>
          <div>
            <label class="text-sm">Email</label>
            <input v-model="email" required type="email" class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>
        </div>
        <div>
          <label class="text-sm">Subject</label>
          <input v-model="subject" required type="text" class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"/>
        </div>
        <div>
          <label class="text-sm">Message</label>
          <textarea v-model="message" required rows="5" class="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <div class="flex items-center justify-between gap-4">
          <button type="submit" class="px-6 py-3 rounded-2xl bg-primary text-white hover:opacity-90 transition shadow-soft">Send Message</button>
          <p class="text-xs text-gray-500">By submitting, you agree to our terms.</p>
        </div>
        <p v-if="successMessage" class="mt-6 text-green-600 dark:text-green-400">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-6 text-red-600 dark:text-red-400">{{ errorMessage }}</p>
      </form>
      
  
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const successMessage = ref("")
const errorMessage = ref("")
const status = ref("pending")

async function submitForm() {
  try {
    await addDoc(collection(db, "website_inquiry"), {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      receivedAt: serverTimestamp(),
      status: status.value,

    })

    successMessage.value = "✅ Your message has been sent successfully!"
    errorMessage.value = ""

    // Clear form
    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""
  } catch (error) {
    console.error("Error adding document: ", error)
    errorMessage.value = "❌ Failed to send message. Please try again."
  }
}
</script>
