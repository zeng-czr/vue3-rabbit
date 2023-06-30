<script setup>
import LayoutNav from './components/layoutNav.vue'
import LayoutHeader from './components/layoutHeader.vue'
import LayoutFooter from './components/layoutFooter.vue'
import LayoutFixed from './components/layoutFixed.vue'
import{useCategoryStore} from '@/stores/category.js'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>