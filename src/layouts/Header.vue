<template>
  <header class="bg-gray-800">
    <div class="container mx-auto py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="logo.png" alt="Logo" class="w-8 h-8 mr-2" />
        <!-- Replace "logo.png" with your logo path -->
        <h1 class="text-white font-bold text-lg">My Website</h1>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="text-white">Home</router-link></li>
          <li><router-link to="/blog" class="text-white">Blog</router-link></li>
          <li>
            <router-link to="/about" class="text-white">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
