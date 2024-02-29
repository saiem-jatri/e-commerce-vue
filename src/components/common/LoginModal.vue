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
watch(() => visible.value, (value) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value) => {
  visible.value = value
}, { immediate: true })
</script>

<template>
<div>
  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '35rem' }" class="rounded-xl">
        <div class="flex justify-between items-center">
              <button class="text-sm font-semibold w-24 rounded-full border border-gray-300 p-2">Sign in</button>
          <button class="w-24 p-2 rounded-full border-2 border-black text-sm text-semibold hover:bg-black hover:text-white transition-all ease-in-out">Register</button>
        </div>
    <div class="card flex justify-content-center">
      <InputText class="border" type="text" v-model="value" />
    </div>
  </Dialog>
</div>
</template>