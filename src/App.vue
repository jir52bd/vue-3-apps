<template>
  <div>
    <Navbar></Navbar>
    <main class="min-h-screen w-full pt-10 pb-20 flex items-center justify-center bg-lime-500">
    <!-- Shop wrapper -->
    <div class="w-full max-w-md relative">
      <router-view></router-view>
    </div>
    </main>
    <ShoppingCart/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  components: {
    Navbar,
    ShoppingCart
  },
  // App component logic goes here
};
</script>
