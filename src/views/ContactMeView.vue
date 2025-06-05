<template>
  <div class="relative isolate">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <!-- Columna de Información -->
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="font-Lora text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Ponte en contacto
          </h2>
          <!-- Información general -->
          <dl class="mt-10 space-y-4 text-base/7 text-white">
            <div v-for="(item, index) in contact" :key="index" class="flex gap-x-4">
              <dt class="flex-none">
                <img :src="item.img" class="w-8 h-8">
              </dt>
              <dd><a class="hover:text-gray-900" :href="item.href">{{ item.name }}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form-contact-me />
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import FormContactMe from '@components/contactComponents/FormContactMe.vue'
// Lista de contactos temporal
const contact = [
  {
    name: 'Ernesto Ascencio',
    img: '/linkedin.png',
    href: 'https://www.linkedin.com/in/ernesto-ascencio-476208314/'
  },
  {
    name: '@Ernesto Ascencio',
    img: '/behance.png',
    href: 'https://www.behance.net/ernestoascencio'
  },
  {
    name: '@erneram',
    img: '/github.png',
    href: 'https://github.com/erneram'
  },
]
</script>
