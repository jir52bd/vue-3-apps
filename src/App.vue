<script setup>

</script>

<template>
  <div class="h-screen flex items-center justify-center">
      <div class="bg-white border-1 rounded-md shadow-md w-full max-w-xs">
          <h1 class="text-center text-3xl">Counter</h1>
          <div class="m-2 p-5">
            <div class="text-center py-4 border-2">
          <p class="text-indigo-400 font-semibold text-3xl">0</p>
           
        </div>
        <!--email and phone button-->
        <div class="flex mt-5 border-t">
          <a href="#" class="text-gray-400 text-3xl flex items-center justify-center border w-1/2 py-3 hover:bg-blue-100">
            -</a>

            <a href="#" class="text-gray-400 text-3xl flex items-center justify-center border w-1/2 py-3 hover:bg-blue-100 ">
            +</a>

        </div>
          </div>
      </div>
  </div>
</template>
