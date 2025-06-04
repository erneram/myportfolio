<template>
  <div class="relative isolate">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <!-- Columna de Información -->
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="font-Lora text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Ponte en contacto
          </h2>

          <!-- Lista de contactos con v-for -->
          <div class="mt-10 flex flex-col items-center gap-8">
            <div v-for="(contacto, index) in contactos" :key="index" class="flex flex-col items-center gap-2">
              <img :src="contacto.imagen" :alt="`Imagen de ${contacto.nombre}`"
                class="w-28 h-28 object-cover rounded-full shadow-lg" />
              <p class="text-white text-lg font-semibold rotate-90 origin-bottom-left sm:rotate-0 sm:origin-center">
                {{ contacto.nombre }}
              </p>
            </div>
          </div>

          <!-- Información general -->
          <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none"><span class="sr-only">Address</span></dt>
              <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <PhoneIcon class="h-7 w-6 text-gray-400" />
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <EnvelopeIcon class="h-7 w-6 text-gray-400" />
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:hello@example.com">hello@example.com</a></dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Formulario -->
      <form action="#" method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
              <input type="email" name="email" id="email" autocomplete="email"
                class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">Phone number</label>
              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
              <textarea name="message" id="message" rows="4"
                class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"></textarea>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600">Send
              message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

// Lista de contactos temporal
const contactos = [
  {
    nombre: 'Joel Pérez',
    imagen: '/images/contacto1.jpg'
  },
  {
    nombre: 'Lucía Gómez',
    imagen: '/images/contacto2.jpg'
  },
  {
    nombre: 'Carlos Rivera',
    imagen: '/images/contacto3.jpg'
  }
]
</script>
