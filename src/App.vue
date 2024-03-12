<script setup>
import Header from "./components/Header.vue";
import Categories from "./components/homepageComponents/CategoriesComponent/categories.vue";
import HomePage from "./pages/homePage/index.vue"
import {ref} from "vue";
const visible = ref(false)
</script>

<template>
<Header/>
<HomePage/>
</template>

<style scoped>

</style>
