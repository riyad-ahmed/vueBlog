<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Blog</h1>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
      >
        <router-link :to="`/blog/${blog.id}`">
          <img class="rounded-t-lg" :src="blog.image" alt="blog image" />
        </router-link>
        <div class="p-5">
          <h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ blog.title }}
          </h2>
          <p class="font-normal text-gray-700 mb-3">{{ blog.excerpt }}</p>
          <router-link
            :to="`/blog/${blog.id}`"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker";

export default {
  name: "BlogPage",
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    this.blogs = this.generateBlogs(10); // Generate 6 random blogs
  },
  methods: {
    generateBlogs(count) {
      const blogs = [];
      for (let i = 0; i < count; i++) {
        const blog = {
          id: i + 1,
          image: faker.image.abstract(500, 300, true),
          title: faker.lorem.sentence(),
          excerpt: faker.lorem.paragraph(),
        };
        console.log(blog);
        blogs.push(blog);
      }
      return blogs;
    },
  },
};
</script>
