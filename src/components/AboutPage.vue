<template>
  <div>
    <main class="w-[1000px] mx-auto mt-4">
      <p>
        about page Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quidem, provident, sit sint assumenda, nostrum quisquam non voluptas
        dolor itaque tempore porro culpa! Repellendus dicta assumenda sequi sint
        commodi voluptates non.
      </p>
      <p class="text-gray-600 mb-4 mt-4">{{ about.content }}</p>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker";
export default {
  name: "AboutPage",
  data() {
    return {
      about: {},
    };
  },
  created() {
    this.about = this.generateAbout();
  },
  methods: {
    generateAbout() {
      const about = {
        id: this.$route.params.id,
        content: faker.lorem.paragraphs(40),
      };
      return about;
    },
  },
};
</script>
