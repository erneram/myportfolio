<template>
  <div class="relative h-screen w-screen overflow-hidden bg-black">
    <div ref="sliderContainer" class="relative w-full h-full">
      <Card
        v-for="(project, index) in projects"
        :key="project.id"
        :data="project"
        class="box"
        :class="{ 'z-20': index === count }"
      />
    </div>

    <!-- Botones -->
   <!-- Flechas fijas al borde -->
  <button @click="slidePrev" class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 text-white text-4xl">‹</button>
  <button @click="slideNext" class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 text-white text-4xl">›</button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import Card from '@components/projectsComponents/CardProjects.vue'

const sliderContainer = ref(null)
const count = ref(0)

const projects = [
  {
    id: 1,
    name: "Visualizador de Estructuras de datos",
    href: "https://github.com/AscencioSIUU/DataStructureVisualizer-",
    img: "/visualizador-datos.png"
  },
  {
    id: 2,
    name: "Calculadora en React",
    href: "https://github.com/AscencioSIUU/calculator-react",
    img: "/calcu.png"
  },
  {
    id: 3,
    name: "Memoria con React",
    href: "https://github.com/AscencioSIUU/lab6react",
    img: "/memoria-tenis.png"
  }
]

let targets = []

onMounted(async () => {
  await nextTick()
  targets = sliderContainer.value.querySelectorAll('.box')
  gsap.set(targets, { xPercent: 100, zIndex: 0 })
  gsap.set(targets[0], { xPercent: 0, zIndex: 1 })
})

function slideNext() {
  if (!targets.length) return

  const current = targets[count.value]
  const nextIndex = (count.value + 1) % targets.length
  const next = targets[nextIndex]

  gsap.to(current, { duration: 1.2, xPercent: -100, zIndex: 0 })
  gsap.fromTo(next, { xPercent: 100, zIndex: 1 }, { duration: 1.2, xPercent: 0 })

  count.value = nextIndex
}

function slidePrev() {
  if (!targets.length) return

  const current = targets[count.value]
  const prevIndex = (count.value - 1 + targets.length) % targets.length
  const prev = targets[prevIndex]

  gsap.to(current, { duration: 1.2, xPercent: 100, zIndex: 0 })
  gsap.fromTo(prev, { xPercent: -100, zIndex: 1 }, { duration: 1.2, xPercent: 0 })

  count.value = prevIndex
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
