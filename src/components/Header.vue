<script setup>
import NotificationItems from "../components/header/Notification-items.vue";
</script>

<template>
  <div class="bg-white px-4 md:px-52 py-4 flex items-center gap-x-10 shadow-sm">
        <div class="w-1/4 flex items-center gap-x-10">
          <div class="text-xl md:text-4xl font-extrabold italic text-black shadow-2xl">
            OllE
          </div>
          <button>
            <img src="../assets/icons/menu.png" class="h-4 md:h-8 w-4 md:w-8" alt="">
          </button>
        </div>
        <div class="w-1/2">
            <div class="relative">
              <input type="text" placeholder="What are you looking for?" class="w-full  bg-gray-100 py-3 rounded-full text-sm placeholder:text-gray-500 placeholder:text-sm px-20 focus:outline-none">
              <img src="../assets/icons/search.png" class="w-5 h-5 absolute left-4 top-3" alt="">
            </div>
        </div>
    <div class="w-1/4 flex items-center gap-x-4">
      <NotificationItems>
          <slot>
            <img src="../assets/icons/heart.png" alt="" class="h-4 md:h-6 w-4 md:w-6">
          </slot>
      </NotificationItems>
      <NotificationItems>
        <slot>
          <img src="../assets/icons/trolley.png" alt="" class="h-4 md:h-6 w-4 md:w-6">
        </slot>
      </NotificationItems>
    </div>
  </div>
</template>