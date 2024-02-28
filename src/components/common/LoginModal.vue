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
watch(() => visible.value, (value) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value) => {
  visible.value = value
}, { immediate: true })
</script>

<template>
<div>
  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>

    <div class="flex justify-content-end gap-2">
      <Button @click="visible=false"  type="button" label="Cancel" severity="secondary">ssssss</Button>
    </div>
  </Dialog>
</div>
</template>