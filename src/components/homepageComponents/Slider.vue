<script>
import { Navigation, Pagination } from 'swiper/modules';
</script>

<template>
<div class="mt-20 px-4 md:px-52">
  <swiper-container pagination="true" speed="500" loop="true" autoplay-delay="2500" space-between="30">
    <swiper-slide class="max-h-72">
      <img class="w-full h-full relative" src="@/assets/images/slider1.png" alt="">
      <img class="absolute z-10 top-5 h-[80%] right-[42%]" src="@/assets/images/discount1.png" alt="">
    </swiper-slide>
    <swiper-slide class="max-h-72">
      <img class="w-full h-full relative" src="@/assets/images/slider2.png" alt="">
      <img class="absolute z-10 top-5 h-[80%] right-[42%]" src="@/assets/images/discount2.png" alt="">
    </swiper-slide>
    <swiper-slide class="max-h-72">
      <img class="w-full h-full relative" src="@/assets/images/slider3.png" alt="">
      <img class="absolute z-10 top-5 h-[80%] right-[42%]" src="@/assets/images/discount3.png" alt="">
    </swiper-slide>
  </swiper-container>
</div>
</template>
<style>
.swiper-pagination-bullet-active  {
  background: #7c0e0e !important;
  width: 20px;
  height: 20px;
}
</style>