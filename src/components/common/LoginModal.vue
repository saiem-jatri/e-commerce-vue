<script setup>
import {watch, defineProps, defineEmits,ref} from 'vue';
// const props = defineProps(['visible','modelValue'])
const visible = ref(false)
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  }
})
let emits = defineEmits(['update:modelValue']);
const value = ref(null);
const loginActive = ref(true);
const registerActive = ref(null);
watch(() => visible.value, (value) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value) => {
  visible.value = value
}, { immediate: true })
const activeLogin = ()=>{
  loginActive.value = true;
  registerActive.value = false;
}
const activeRegister = ()=>{
  loginActive.value = false;
  registerActive.value = true;
}
</script>

<template>
<div>
  <Dialog v-model:visible="visible" modal :header='loginActive ? "Login" : "register" ' class="rounded-xl w-[60%] md:w-2/5">
        <div class="flex justify-between items-center">
<!--          <button @click="activeLogin" class="text-sm font-semibold w-24 rounded-full border border-gray-300 p-2">Sign in</button>-->
        </div>
    <div v-if="loginActive" class="flex justify-center">
      <div class="px-8 md:px-16">
        <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
        <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

        <form action="" class="flex flex-col gap-4">
          <input class="p-2 mt-8 rounded-xl border w-full md:w-[400px]" type="email" name="email" placeholder="Email">
          <div class="relative">
            <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </div>
          <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
        </form>

        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr class="border-gray-400">
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-400">
        </div>
        <div class="flex justify-center items-center">
          <button @click="activeRegister" class="w-24 p-2 rounded-xl border-2 border-gray-400 text-sm text-semibold outline-none hover:bg-black hover:text-white transition-all ease-in-out">Register</button>
        </div>
      </div>
    </div>
    <div v-if="registerActive" class="w-full bg-grey-lightest">
      <div class="container mx-auto">
        <div class="w-5/6 lg:w-full mx-auto bg-white rounded shadow">
          <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
          <div class="py-4 px-8">
            <div class="flex-col md:flex-row gap-2 mb-4">
              <div class="w-full md:w-1/2 mr-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name">
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name">
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address">
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password">
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div class="flex items-center justify-between mt-8">
              <button class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <p class="text-center my-4">
          <button @click="activeLogin" href="#" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</button>
        </p>
      </div>
    </div>
  </Dialog>
</div>
</template>