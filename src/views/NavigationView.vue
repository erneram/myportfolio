<template>
  <Disclosure as="nav" class="bg-gray-1100" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="fixed flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" size="256x256" src="/icon.png"
              alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block sm:justify-end">
            <div class="flex space-x-4 overflow-hidden">
              <a v-for="item in navigation" :key="item.name" @click="e => scrollToSection(item.href)"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium cursor-pointer']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import gsap from 'gsap'

const route = useRoute()
const emit = defineEmits(['scrollTo'])

function scrollToSection(section){
  window.history.pushState({}, "", section); 
  const element = document.getElementById(section.slice(1))
  if(!element) {
    console.warn("Element not found for id " + section)
    return
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: element,
      offsetY: 70, // ajusta según el alto del nav
    },
    ease: 'power2.inOut',
  })
}

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About me', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

</script>
