<script setup>
const props = defineProps([
  "modelValue",
    "index"
]);
const emits = defineEmits(["closeModal"]);
</script>

<template>
  <div class="w-[400px] bg-white absolute z-40 shadow-2xl top-10">
        <div class="grid grid-cols-2 md:grid-cols-5">
            <div class="flex justify-center items-center">
              <img src="../../../assets/images/newArrible.jpg" alt="">
            </div>
          <button @mouseleave="emits('closeModal')" class="w-6 bg-blue-300">close</button>
        </div>
  </div>
</template>