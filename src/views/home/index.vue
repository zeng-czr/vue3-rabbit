<script setup>
import HomeBanner from './components/homeBanner.vue'
import HomeCategory from './components/homeCategory.vue'
import HomeNew from './components/homeNew.vue'
import HomeHot from './components/homeHot.vue'
import HomeProduct from './components/homeProduct.vue'
</script>
<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
  </div>
  
</template>