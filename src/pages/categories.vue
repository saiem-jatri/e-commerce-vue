<script setup>
import {reactive, ref} from "vue";
import NewArrival from "../components/CategoriesComponent/NewArrival.vue";
const openModal = ref(false)

// const onHoverController=(items,index)=>{
//   return  items.value = !items.value
// }

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
          <div @click="showModalCabin" v-for="(category) in allCategories" class="cursor-pointer hover:-translate-y-1 transition-all ease-in">{{ category }}</div>
      </div>
    <div>
      <NewArrival
          v-if="openModal"
          @close-modal = closeModal
      />
    </div>

  </div>
</template>