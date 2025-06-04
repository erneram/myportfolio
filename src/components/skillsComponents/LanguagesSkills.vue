<template>
     <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 class="lowercase my-2 text-white text-5xl font-normal font-Lora">Languages</h1>
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
               <a v-for="product in products" :key="product.id" class="group">
                    <img :src="product.imageSrc"
                         class="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3" />
                    <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                         <h3 class="text-xl text-white font-Lora">{{ product.name }}</h3>
                    </div>
               </a>
          </div>
     </div>
</template>
<script setup>
const products = [
  {
    id: 1,
    name: 'Javascript',
    imageSrc: '/js.png',
  },
  {
    id: 2,
    name: 'HTML',
    imageSrc: '/html.png', 
  },
  {
    id: 3,
    name: 'CSS',
    imageSrc: '/css.png',
  },
  {
    id: 4,
    name: 'Java',
    imageSrc: '/java.png',
  },
  {
    id: 5,
    name: 'Python',
    imageSrc: '/python.png',
  },
  {
    id: 6,
    name: 'Kotlin',
    imageSrc: '/kotlin.png',
  },
]
</script>
