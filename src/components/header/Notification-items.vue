<script setup>
    defineProps(['isCart'])
</script>

<template>
  <div class="relative w-14 h-14 hover:bg-gray-300 rounded-full flex justify-center items-center cursor-pointer">
      <slot ></slot>
    <div class="h-4 w-4 flex justify-center items-center bg-black text-white font-bold rounded-full absolute top-2 right-2">
          0
    </div>
  </div>
</template>