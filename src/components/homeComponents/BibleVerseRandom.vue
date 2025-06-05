<template>
  <div v-if="verse" class="flex flex-col justify-center items-center">
    <h2 class="text-white text-4xl font-Josefin">{{ verse.ref }}</h2>
    <p class="text-white text-2xl font-Yeseva tracking-widest">{{ verse.text }}</p>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { bibleVerses } from '@/data/bibleVerses.js'

const verse = ref(null)
const route = useRoute()

onMounted(() => {
  if (route.path) {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length)
    verse.value = bibleVerses[randomIndex]
  }
})
</script>

