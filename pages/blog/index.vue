<template>
  <div>
    <div class="text-3xl lg:text-5xl font-thin text-center mt-12">
      <p class="text-gray-900">Blog Coming Soon...</p>
      <p class="text-3xl text-gray-500">For now enjoy some beautiful mountians!</p>
    </div>
    <div class="mt-24 flex flex-col items-center">
      <div class="flex flex-col items-center">
        <div class="swiper flex overflow-x-scroll px-3 md:w-1/2 w-full lg:w-4/12">
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            id="slide1"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            id="slide2"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/1482927/pexels-photo-1482927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            id="slide3"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            id="slide4"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            id="slide5"
          >
        </div>
      </div>
      <div class="flex mt-4 mb-12">
        <a href="#slide1" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide2" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide3" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide4" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide5" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
      </div>
    </div>
  </div>
</template>
<style type="text/css">
.swiper {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.swiper > img {
  scroll-snap-align: start;
}
</style>