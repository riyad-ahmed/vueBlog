<template>
  <section class="bg-blue-500 text-white py-16">
    <div class="container mx-auto text-center">
      <div class="relative">
        <img
          src="slider-image1.jpg"
          alt="Slider Image 1"
          class="mx-auto rounded-lg"
        />
        <img
          src="slider-image2.jpg"
          alt="Slider Image 2"
          class="mx-auto rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 opacity-0 scale-90 transition duration-500"
        />
        <img
          src="slider-image3.jpg"
          alt="Slider Image 3"
          class="mx-auto rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 opacity-0 scale-90 transition duration-500"
        />
      </div>
      <h1 class="text-4xl font-bold mb-4">Welcome to Your App</h1>
      <p class="text-lg mb-8">A powerful solution for all your needs</p>
      <a
        href="#menu"
        class="bg-white text-blue-500 hover:bg-blue-100 text-lg px-6 py-3 rounded-full"
        >Discover More</a
      >
    </div>
  </section>

  <!-- About Section -->
  <section class="py-16">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8">
          <h2 class="text-3xl font-bold mb-4">About Us</h2>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam, nisl quam condimentum justo.
          </p>
          <p class="mb-6">
            Phasellus commodo, erat vel egestas rutrum, est lorem maximus orci,
            eu tincidunt ex nisl id lectus.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam.
          </p>
          <a href="#" class="text-blue-500 hover:underline">Learn More</a>
        </div>
        <div class="bg-white shadow rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Menu Item 2</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam.
          </p>
          <a href="#" class="text-blue-500 hover:underline">Learn More</a>
        </div>
        <div class="bg-white shadow rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Menu Item 3</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam.
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam."
          </p>
          <p class="font-bold">- John Doe</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6">
          <p class="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam."
          </p>
          <p class="font-bold">- Jane Smith</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6">
          <p class="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, diam eget dapibus aliquam."
          </p>
          <p class="font-bold">- David Johnson</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Who Uses My App Section -->
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
</template>

<script>
export default {
  name: "HomePage",
};
</script>
