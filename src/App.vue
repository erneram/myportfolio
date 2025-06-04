<script setup>
import NavigationView from './views/NavigationView.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import * as THREE from 'three'

const container = ref(null)

let scene, camera, renderer, starGeo, stars
let velocities = []
let animationId = null

// Parámetros ajustables
const STAR_COUNT = 4000
const ACCELERATION = 0.02
const STAR_SPEED_MULTIPLIER = 1 // para controlar velocidad general

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 1
  camera.rotation.x = Math.PI / 2

  renderer = new THREE.WebGLRenderer({ alpha: false }) // alpha true para fondo transparente
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  const positions = new Float32Array(STAR_COUNT * 3)
  velocities = new Float32Array(STAR_COUNT)

  for (let i = 0; i < STAR_COUNT; i++) {
    const x = Math.random() * 600 - 300
    const y = Math.random() * 600 - 300
    const z = Math.random() * 600 - 300

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    velocities[i] = 0
  }

  starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const sprite = new THREE.TextureLoader().load('white_dot.png')
  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite,
    transparent: true
  })

  stars = new THREE.Points(starGeo, starMaterial)
  scene.add(stars)

  animate()
}

function animate() {
  const positions = starGeo.attributes.position.array

  for (let i = 0; i < positions.length / 3; i++) {
    velocities[i] += ACCELERATION * STAR_SPEED_MULTIPLIER
    positions[i * 3 + 1] -= velocities[i]

    if (positions[i * 3 + 1] < -200) {
      positions[i * 3 + 1] = 200
      velocities[i] = 0
    }
  }

  starGeo.attributes.position.needsUpdate = true
  stars.rotation.y += 0.002
  renderer.render(scene, camera)
  animationId = requestAnimationFrame(animate)
}

// Montaje y limpieza
onMounted(() => {
  init()
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onWindowResize)
  renderer.dispose()
  starGeo.dispose()
})

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <!-- Fondo canvas -->
  <div ref="container" class="fixed bg-black top-0 left-0 w-screen h-screen -z-10 overflow-hidden"></div>

  <!-- Contenido -->
  <header>
    <navigation-view />
  </header>
  <main>
    <RouterView />
  </main>
</template>

