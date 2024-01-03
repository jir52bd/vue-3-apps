<script setup>
import { ref } from 'vue';

const sliders = ref([
  {
    name: 'Red Car',
    path: '/images/red_car.jpg',
    color: 'red'
  },
  {
    name: 'Yellow Car',
    path: '/images/yellow_car.jpg',
    color: 'yellow'
  },
  {
    name: 'Black Car',
    path: '/images/black_car.jpg',
    color: 'black'
  }
]);

const sliderActive = ref(0);

function prevSlider() {
  if (sliderActive.value) {
    sliderActive.value--;
  } else {
    sliderActive.value = sliders.value.length - 1;
  }
}

function nextSlider() {
  if (sliderActive.value < sliders.value.length - 1) {
    sliderActive.value++;
  } else {
    sliderActive.value = 0;
  }
}

</script>

<template>
  <main class="min-h-screen w-full py-20 px-5 flex items-center justify-center">
    <div v-show="sliderActive == index" v-for="(car, index) in sliders" :key="index" class="w-full max-w-md relative">
      <div>
        <img :src="car.path" alt="car" class="w-full h-56 object-cover rounded-md border-2 shadow">
        <p :style="{color: car.color}" class="text-center mt-3  text-2xl uppercase">
          {{ car.name }}
        </p>
      </div>
      <button @click="prevSlider" class="w-10 h-10 rounded-full bg-white hover:shadow-lg active:scale-90 transition absolute left-2 top-24 text-gray-700 flex items-center justify-center opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
      </button>
      <button @click="nextSlider"  tabindex="0" class="w-10 h-10 rounded-full bg-white hover:shadow-lg active:scale-90 transition absolute right-2 top-24 text-gray-700 flex items-center justify-center opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      </button>
    </div>
  </main>
</template>
