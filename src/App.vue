<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-white border-2 rounded-md shadow-lg  w-full max-w-xs">
      <h1 class="text-center text-indigo-500 text-3xl pt-2">Counter</h1>
      <div class="m-2 p-5">
        <!--Counter-->
        <div class="text-center py-4 border-2">
          <p class="text-indigo-400 font-semibold text-3xl">{{ counter }}</p>
        </div>
        <!--Counter end-->

        <!--Decrease button-->
        <div class="flex mt-5 border-t">
          <button @click="counter--"
            class="text-gray-400 text-3xl flex items-center justify-center border w-1/2 py-3 hover:bg-blue-100"
          >
            -</button
          >
          <!--Decrease button end-->

          <!--Increase button-->
          <button @click="counter++"
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
