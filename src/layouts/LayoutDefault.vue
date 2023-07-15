<template>
  <div>
    <Header />
    <main class="container mx-auto mt-4">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "LayoutDefault",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
Footer {
  position: fixed;
}
</style>
