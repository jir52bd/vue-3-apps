<script setup>
import { useStore } from '../store/store';
const store = useStore();
</script>
<template>
    <div class="flex items-center justify-center h-full">
        <div class="border-2 rounded-sm shadow mt-10 p-5 text-center">
            <h1>Home Page</h1>
            <br>
            
            <p>{{ store.count }}</p>
            <p>{{ store.doubleCount }}</p>
            <button @click="store.increment">Increment</button>
        </div>  
    </div>
</template>