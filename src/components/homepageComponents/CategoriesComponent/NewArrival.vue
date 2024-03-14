<script setup>
const props = defineProps([
  "modelValue",
    "index"
]);
const emits = defineEmits(["closeModal"]);
</script>

<template>
  <div class="w-full bg-white absolute z-40 shadow-2xl top-10 left-0 right-0">
        <div class="grid grid-cols-2 md:grid-cols-5">
            <div class="flex justify-center items-center">
              <img src="../../../assets/images/newArrible.jpg" alt="">
            </div>
        </div>
  </div>
</template>