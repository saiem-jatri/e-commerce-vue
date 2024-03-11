<script setup>
import {reactive, ref} from "vue";
import NewArrival from "./NewArrival.vue";
const openModal = ref(false)

const allCategories = reactive(['men','WOMEN','kids','newborn','Accessories','Footwear'])
const closeModal = () => {
  openModal.value = false;
};
const showModalCabin = () => {
  openModal.value = true;
};
</script>

<template>
  <div class="px-4 md:px-52 flex justify-center items-center mt-5 relative">
      <div class="flex gap-x-4 flex-wrap items-center text-[#4d4d4d] text-xs md:text-sm font-semibold uppercase">
          <div @mouseover="showModalCabin" v-for="(category) in allCategories" class="cursor-pointer z-50 hover:-translate-y-1 transition-all ease-in">{{ category }}</div>
      </div>
    <div>
      <transition name="slide-fade">
        <NewArrival
            v-if="openModal"
            @close-modal = closeModal
        />
      </transition>
      <div v-if="openModal" @click="openModal = false"
           class="fixed bg-black bg-opacity-20 inset-0 z-20 h-full w-full cursor-default transition duration-300 ease-in-out">
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>