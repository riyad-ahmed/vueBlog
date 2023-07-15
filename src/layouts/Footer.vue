<template>
  <footer class="bg-gray-800 py-4 w-[100%]">
    <div class="container mx-auto text-center">
      <ul class="flex justify-center space-x-4">
        <li>
          <router-link to="/terms" class="text-white"
            >Terms of Service</router-link
          >
        </li>
        <li>
          <router-link to="/privacy" class="text-white"
            >Privacy Policy</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="text-white">Contact</router-link>
        </li>
      </ul>
      <p class="text-white mt-2">© 2023 My Website. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
