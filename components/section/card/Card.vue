<template>
  <div class="bg-white shadow-md rounded-xl">
    <swiper :cssMode="true" :navigation="navigation" :pagination="{ clickable: true }" :mousewheel="true"
      :keyboard="true" :modules="modules" class="mySwiper w-full " :loop="true" :autoplay="{ delay: 5000 }">
      <swiper-slide v-for="(img, index) in images" :key="index"
        class="flex items-center justify-center bg-white text-center">
        <div class="relative w-full h-full">
          <img :src="img" :alt="`Slide image ${index + 1}`" class="block w-full object-cover rounded-t-xl" />
        </div>
      </swiper-slide>

      <div class="swiper-button-next text-white p-2 hover:opacity-75"></div>
      <div class="swiper-button-prev text-white p-2 hover:opacity-75"></div>
    </swiper>


    <div class="px-5 py-3">
      <h3 class="text-2xl font-extrabold line-clamp-2">{{ title }}</h3>
      <p class="text-md text-black mt-5 line-clamp-4 h-[7rem]">{{ description }}</p>
      <p class="text-sm text-gray-400 mt-5 line-clamp-1 ">{{ category }}</p>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
  }
};
</script>
