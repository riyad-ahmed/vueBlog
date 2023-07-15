<template>
  <div class="container mx-auto mt-8">
    <div class="bg-white rounded shadow p-4">
      <h2 class="text-3xl font-bold mb-2">{{ blog.title }}</h2>
      <p class="text-gray-600 mb-4">{{ blog.content }}</p>
      <router-link to="/blog" class="text-blue-500">Back to Blog</router-link>
    </div>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker';

export default {
  name: 'BlogDetailsPage',
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
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
      };
      return blog;
    },
  },
};
</script>
