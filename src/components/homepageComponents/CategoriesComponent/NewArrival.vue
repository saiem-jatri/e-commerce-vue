<script setup>
const props = defineProps([
  "modelValue",
    "index",
    'showingName'
]);
const emits = defineEmits(["closeModal"]);

const details = {
  'men' : ['Formal-Shirt','Casual-shirt','SweatShirt','pant', 'panjabi'],
  'women' : ['shari','three-pices','SweatShirt'],
  'kids' : ['t-shirts','pant','panjabi'],
  'newborn' : ['t-shirts','dyper','pants'],
  'Accessories' : ['watch','sunglass','belt'],
  'Footwear' : ['snikkers','shoe','casual shoe'],
}


</script>

<template>
  <div class="w-1/2 bg-white absolute z-40 shadow-black shadow-2xl top-10 left-1/2 transform -translate-x-1/2">
        <div class="grid grid-cols-2">
            <div class="flex justify-center items-center p-4">
              <img class="relative" src="../../../assets/images/newArrible.jpg" alt="">
              <div class="absolute top-4 right-[51.8%] w-32 h-32 bg-red-600 text-white italic text-sm z-20 flex flex-col justify-center items-center">
                <div class="text-xl md:text-4xl font-extrabold italic shadow-2xl flex justify-center">
                  <p class="text-white text-4xl flex">O <span class="text-black">llE</span></p>
                </div>
                <p class="text-xl md:text-2xl font-extrabold">
                  New
                </p>
                <p class="text-xl md:text-3xl font-extrabold">Arrial</p>
              </div>
            </div>
          <div class="p-4">
            <h1 class="text-xl font-bold col-span-3">Showing Items For {{ props.showingName }}</h1>

              <ul v-for="value in details[props.showingName]" class="flex flex-col flex-wrap  gap-x-2 list-disc pl-4 mt-4">
                <li class=""><router-link to="">
                  {{value}}
                </router-link>
                </li>
              </ul>


          </div>
        </div>
  </div>
</template>