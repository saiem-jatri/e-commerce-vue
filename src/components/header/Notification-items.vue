<script setup>
    import {ref,watch} from "vue";
    defineProps(['isCart','favItems','cartItems'])
    const cartOpen = ref(false)
</script>

<template>
  <div class="w-full h-full">
    <div @mouseover="cartOpen = true"  @mouseleave="cartOpen=false" class="relative w-14 h-14 hover:bg-[#8DB2EE] rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out">
      <slot ></slot>
      <div class="h-4 w-4 flex justify-center items-center bg-black text-white font-bold rounded-full absolute top-2 right-2">
        <p> {{favItems ? favItems : cartItems}}</p>
        <div v-if="isCart" :class="isCart && cartOpen ? 'block transition-all ease-in-out' : 'hidden'"  class="absolute w-80 bg-white top-12 rounded-xl shadow-2xl">
          <div class="bg-[#8DB2EE] w-full rounded-t-xl text-white p-4">
            <p class="text-xs">Cart Item (1)</p>
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex justify-between items-center mt-4 p-2">
              <div class="">
                <img src="../../assets/images/bag.jpg" class="w-20 h-20" alt="">
              </div>
              <div>
                <p class="text-black font-bold text-sm">USD 35.00
                </p>
                <p class="text-black font-bold text-xs mt-2"> Circle Logo Foam Trucker Hat</p>
              </div>
            </div>
          </div>
          <hr class="border-t border-gray-300 mt-4">
          <div class="mt-2 flex justify-between items-center font-bold text-sm text-black p-2">
            <p>Subtotal </p>
            <p class="mt-2">USD 35.00</p>
          </div>
          <p class="text-xs text-black font-normal p-2">Shipping and sales tax calculated at checkout</p>
         <div class="flex justify-center items-center pb-2">
           <router-link to="/" class="block w-4/5 bg-black rounded-full text-white text-sm font-semibold text-center p-2">View cart & checkout</router-link>
         </div>
        </div>
      </div>
    </div>
  </div>

</template>