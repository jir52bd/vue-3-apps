<script setup>
import { ref } from "vue";

const counter = ref(0);

//decrease function  if greater than 0
function decrease(){
  if(counter.value > 0){
    counter.value--
  }
}

//increase function if less then 10
function increase(){
  if(counter.value <10){
    counter.value++
  }
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-white border-2 rounded-md shadow-lg  w-full max-w-xs">
      <h1 class="text-center text-indigo-500 text-3xl pt-2">Counter</h1>
      <p class="text-center text-sm text-indigo-400">counter from 0 to 10</p>
      <div class="m-2 p-5">
        <!--Counter-->
        <div class="text-center py-4 border-2">
          <p class="text-indigo-400 font-semibold text-3xl">{{ counter }}</p>
        </div>
        <!--Counter end-->

        <!--Decrease button-->
        <div class="flex mt-5 border-t">
          <button @click="decrease()"
            class="text-gray-400 text-3xl flex items-center justify-center border w-1/2 py-3 hover:bg-blue-100"
          >
            -</button
          >
          <!--Decrease button end-->

          <!--Increase button-->
          <button @click="increase()"
            class="text-gray-400 text-3xl flex items-center justify-center border w-1/2 py-3 hover:bg-blue-100"
          >
            +</button
          >
          <!--Increase button end-->
        
        </div>
      </div>
      
    </div>
  </div>
</template>
