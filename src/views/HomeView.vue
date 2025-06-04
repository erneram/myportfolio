<script setup>
import TheWelcome from '../components/homeComponents/TheWelcome.vue'
import BibleVerseRandom from '@/components/homeComponents/BibleVerseRandom.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center align-center  h-screen items-center">
    <div class="m-4">
      <the-welcome />
    </div>
    <div class="mt-8">
      <bible-verse-random />
    </div>
  </div>
</template>
