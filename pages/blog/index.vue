<template>
  <div>
    <div class="text-3xl lg:text-5xl font-thin text-center mt-12">
      <p class="text-gray-900">Blog Coming Soon...</p>
      <p class="text-3xl text-gray-500">For now enjoy some beautiful mountians!</p>
    </div>
    <div class="mt-24 flex flex-col items-center">
      <div class="flex flex-col items-center">
        <div class="swiper flex overflow-x-scroll w-1/2 md:w-1/2 w-full lg:w-4/12">
          <img
            class="w-auto h-64 md:h-1/2 lg:h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            id="slide1"
          >
          <img
            class="w-auto h-64 md:h-1/2 lg:h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/675764/pexels-photo-675764.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            id="slide2"
          >
          <img
            class="w-auto h-64 md:h-1/2 lg:h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/629161/pexels-photo-629161.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            id="slide3"
          >
          <img
            class="w-auto h-64 md:h-1/2 lg:h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/135157/pexels-photo-135157.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            id="slide4"
          >
          <img
            class="w-auto h-64 md:h-1/2 lg:h-1/2 object-cover bg-gray-300"
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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