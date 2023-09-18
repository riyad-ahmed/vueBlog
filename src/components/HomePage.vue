<template>
  <div class="relative">
    <section class="text-white">
      <div class="bg-image py-40">
        <div class="container mx-auto text-center">
          <!-- <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li
                  class="glide__slide w-full bg-center bg-cover"
                  v-for="item in sliderItems"
                  :key="item?.id"
                >
                  <img :src="item?.image" alt="Slide 1" />
                </li>
              </ul>
            </div>
          </div> -->
          <h1 class="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p class="text-lg mb-8">A powerful solution for all your needs</p>
          <a
            href="#menu"
            class="bg-white text-blue-500 hover:bg-blue-100 text-lg px-6 py-3 rounded-full"
            >Discover More</a
          >
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8">
            <h2 class="text-3xl font-bold mb-4">About Us</h2>
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam, nisl quam
              condimentum justo.
            </p>
            <p class="mb-6">
              Phasellus commodo, erat vel egestas rutrum, est lorem maximus
              orci, eu tincidunt ex nisl id lectus.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="about-image.jpg" alt="About Us" class="rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Card Section -->
    <section id="menu" class="bg-gray-100 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Menu</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Menu Item 1</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam.
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Menu Item 2</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam.
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Menu Item 3</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam.
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow rounded-lg p-6">
            <p class="mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam."
            </p>
            <p class="font-bold">- John Doe</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <p class="mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam."
            </p>
            <p class="font-bold">- Jane Smith</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <p class="mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla, diam eget dapibus aliquam."
            </p>
            <p class="font-bold">- David Johnson</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Who Uses Our App</h2>
        <div class="flex justify-center">
          <img src="client-logo1.png" alt="Client 1" class="h-16 mx-4" />
          <img src="client-logo2.png" alt="Client 2" class="h-16 mx-4" />
          <img src="client-logo3.png" alt="Client 3" class="h-16 mx-4" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { faker } from "@faker-js/faker";
// import Glide from "@glidejs/glide";
export default {
  name: "HomePage",
  data() {
    return {
      // sliderItems: [],
    };
  },
  // created() {
  //   this.sliderItems = this.generateSliderItem(5);
  // },

  // methods: {
  //   generateSliderItem(count) {
  //     const sliderItems = [];
  //     for (let i = 0; i < count; i++) {
  //       const sliderItem = {
  //         id: i + 1,
  //         image: faker.image.abstract(2000, 400, true),
  //       };
  //       sliderItems.push(sliderItem);
  //     }
  //     console.log(sliderItems);
  //     return sliderItems;
  //   },
  // },
  // mounted() {
  //   const glide = new Glide(".glide", {
  //     type: "carousel",
  //     autoplay: 5000,
  //     hoverpause: true,
  //   });
  //   glide.mount();
  // },
};
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/Capture-pJNanQKmno-transformed.png");
  background-size: cover;
  display: flex;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
}
</style>
