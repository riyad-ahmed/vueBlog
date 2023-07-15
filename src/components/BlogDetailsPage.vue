<template>
  <div class="w-[1000px] mx-auto mt-8">
    <div class="bg-white rounded shadow p-4">
      <h2 class="text-3xl font-bold mb-4">{{ blog.title }}</h2>
      <img class="rounded-md m-auto" :src="blog.thumb" alt="blog image" />
      <p class="text-gray-600 mb-4 mt-4">{{ blog.content }}</p>
      <img class="round-md m-auto" :src="blog.image" alt="" />
      <p class="text-gray-600 mb-4 mt-4">{{ blog.subContent }}</p>
      <router-link to="/blog" class="text-blue-500">Back to Blog</router-link>
    </div>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker";

export default {
  name: "BlogDetailsPage",
  data() {
    return {
      blog: {},
    };
  },
  created() {
    this.blog = this.generateBlog(); // Generate a random blog
  },
  methods: {
    generateBlog() {
      const blog = {
        id: this.$route.params.id,
        image: faker.image.abstract(800, 400, true),
        thumb: faker.image.abstract(1000, 400, true),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(20),
        subContent: faker.lorem.paragraphs(10),
      };
      return blog;
    },
  },
};
</script>
