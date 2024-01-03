<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  // Navbar component logic goes here
};
</script>

<style scoped>
/* Add your styling for the navbar here */
.navbar {
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  color: white;
}

.navbar a {
  color: white;
  text-decoration: none;
}
</style>
