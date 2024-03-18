<script setup>
import {computed, reactive, ref} from "vue";
import NewArrival from "./NewArrival.vue";
const openModal = ref(false)

const allCategories = reactive(['men','women','kids','newborn','Accessories','Footwear'])
const closeModal = () => {
  openModal.value = false;
};
let showingName = ref([])

const showModal = (i) => {
  showingName.value = i
  openModal.value = true;
};

</script>

<template>
  <div class="px-4 md:px-52 flex justify-center items-center mt-5 relative">
      <div class="flex gap-x-4 flex-wrap justify-center items-center text-[#4d4d4d] text-xs md:text-sm font-semibold uppercase pb-2 border-b border-gray-200 w-full">
          <div @mouseover="showModal(category)" v-for="(category) in allCategories" class="cursor-pointer z-50 hover:-translate-y-1 transition-all ease-in">{{ category }}</div>
      </div>
    <div>
      <transition name="slide-fade">
        <NewArrival
            v-if="openModal"
            :showingName="showingName"
            @close-modal = closeModal
        />
      </transition>
      <div v-if="openModal" @click="openModal = false"
           class="fixed bg-black opacity-5 inset-0 z-20 h-full w-full cursor-default transition duration-300 ease-in-out">
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