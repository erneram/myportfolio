<script setup lang="ts">
/**
 * @component NavBar
 * Main navigation component with mobile responsive menu and language switcher
 */

import { ref } from 'vue'
import { 
  Disclosure, 
  DisclosureButton, 
  DisclosurePanel
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { gsap } from 'gsap'
import { useLocale } from '@/composables'
import type { NavigationItem, SupportedLocale } from '@/types'

// Initialize i18n
const { currentLocale, availableLocales, switchLocale, t } = useLocale()

// Navigation items with translated labels
const navigation = ref<NavigationItem[]>([
  { name: t('nav.home'), href: '#home', current: false },
  { name: t('nav.about'), href: '#about', current: false },
  { name: t('nav.skills'), href: '#skills', current: false },
  { name: t('nav.projects'), href: '#projects', current: false },
  { name: t('nav.contact'), href: '#contact', current: false },
])

function scrollToSection(section: string): void {
  window.history.pushState({}, '', section)
  
  const element = document.getElementById(section.slice(1))
  
  if (!element) {
    console.warn(`[NavBar] Element not found for id: ${section}`)
    return
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: element,
      offsetY: 80, // Increased offset for fixed navbar
    },
    ease: 'power2.inOut',
  })
}

function toggleLanguage(): void {
  const newLocale: SupportedLocale = currentLocale.value === 'en' ? 'es' : 'en'
  switchLocale(newLocale)
  
  // Update navigation items with new translations
  navigation.value = [
    { name: t('nav.home'), href: '#home', current: false },
    { name: t('nav.about'), href: '#about', current: false },
    { name: t('nav.skills'), href: '#skills', current: false },
    { name: t('nav.projects'), href: '#projects', current: false },
    { name: t('nav.contact'), href: '#contact', current: false },
  ]
}
</script>

<template>
  <Disclosure 
    v-slot="{ open }" 
    as="nav" 
    class="fixed top-0 left-0 right-0 w-full z-50 bg-gray-1100 shadow-lg"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon 
              v-if="!open" 
              class="block size-6" 
              aria-hidden="true" 
            />
            <XMarkIcon 
              v-else 
              class="block size-6" 
              aria-hidden="true" 
            />
          </DisclosureButton>
        </div>
        
        <!-- Desktop Layout: Logo - Nav Links - Language Button -->
        <div class="hidden sm:flex sm:items-center sm:justify-between sm:w-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img 
              class="h-10 w-auto" 
              src="/icon.png"
              alt="Portfolio Logo" 
            />
          </div>
          
          <!-- Navigation Links - Center -->
          <div class="flex space-x-6">
            <a 
              v-for="item in navigation" 
              :key="item.name" 
              :class="[
                item.current 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white', 
                'rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200'
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </div>
          
          <!-- Language Toggle Button - Right -->
          <div class="flex-shrink-0">
            <button
              @click="toggleLanguage"
              class="flex items-center justify-center w-12 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              :title="currentLocale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'"
            >
              <img 
                :src="currentLocale === 'en' ? '/spain.png' : '/united-states.png'"
                :alt="currentLocale === 'en' ? 'Spanish Flag' : 'US Flag'"
                class="w-6 h-4 object-cover rounded-sm shadow-sm"
              />
            </button>
          </div>
        </div>
        
        <!-- Mobile: Only Logo visible when menu closed -->
        <div class="flex sm:hidden w-full justify-center">
          <img 
            class="h-8 w-auto" 
            src="/icon.png"
            alt="Portfolio Logo" 
          />
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <DisclosurePanel class="sm:hidden bg-gray-900">
      <div class="px-4 pt-4 pb-6 space-y-3">
        <!-- Mobile Navigation Links -->
        <div class="space-y-2">
          <DisclosureButton 
            v-for="item in navigation" 
            :key="item.name" 
            as="button" 
            :class="[
              item.current 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 
              'block w-full text-left rounded-lg px-4 py-3 text-base font-medium transition-all duration-200'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
        
        <!-- Mobile Language Toggle -->
        <div class="pt-4 border-t border-gray-700">
          <button
            @click="toggleLanguage"
            class="flex w-full items-center justify-center space-x-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 text-white font-medium transition-all duration-200"
            :title="currentLocale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'"
          >
            <img 
              :src="currentLocale === 'en' ? '/spain.png' : '/united-states.png'"
              :alt="currentLocale === 'en' ? 'Spanish Flag' : 'US Flag'"
              class="w-8 h-5 object-cover rounded-sm shadow-sm"
            />
            <span>
              {{ currentLocale === 'en' ? 'Cambiar a Español' : 'Switch to English' }}
            </span>
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
