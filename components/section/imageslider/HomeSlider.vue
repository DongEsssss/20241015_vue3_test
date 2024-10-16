<template>
    <swiper :cssMode="true" :navigation="navigation" :pagination="{ clickable: true }" :mousewheel="true"
        :keyboard="true" :modules="modules" class="mySwiper w-full h-full lg:h-[500px] md:h-[350px] sm:h-[200px]"
        :loop="true" :autoplay="{ delay: 5000 }">
        <swiper-slide v-for="(slide, index) in slides" :key="index"
            class="flex items-center justify-center bg-white text-center">
            <div class="relative w-full h-full">
                <img :src="slide.image" :alt="slide.alt" class="block w-full h-full object-cover" />
                <div class="max-w-[800px] absolute inset-0 flex items-center justify-start w-50 px-20 py-4 text-white">
                    <div class="text-left">
                        <h2 class="text-[4vw] font-bold mb-3">{{ slide.title }}</h2>
                        <p class="text-[2vw] md:text-[1.5vw] lg:text-[1.5vw]">{{ slide.description }}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>

        <div class="swiper-button-next text-white p-2 hover:opacity-75"></div>
        <div class="swiper-button-prev text-white p-2 hover:opacity-75"></div>
    </swiper>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import mainImage from '@/assets/image/main.jpg';
import secondImage from '@/assets/image/img1.jpg';
import thirdImage from '@/assets/image/img2.jpg';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const slides = ref([
            {
                image: mainImage,
                title: 'Lorem Ipsum dolor sit amet,',
                description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                alt: '메인 이미지1'
            },
            {
                image: secondImage,
                title: 'Lorem Ipsum dolor sit amet,',
                description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                alt: '메인 이미지2'
            },
            {
                image: thirdImage,
                title: 'Lorem Ipsum dolor sit amet,',
                description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                alt: '메인 이미지3'
            }
        ]);

        const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay];
        const navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        };

        return {
            slides,
            modules,
            navigation,
        };
    },
};
</script>
