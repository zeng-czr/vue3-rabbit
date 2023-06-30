<script setup>
import HomePanal from './homePanal.vue'
import { getGoodsApi } from '@/apis/home'
import { ref,onMounted } from 'vue'
const goodsProduct = ref([])
const getGoods = async () => {
  const res = await getGoodsApi()
  console.log(res)
  goodsProduct.value = res.data.result
}
onMounted( ()=> getGoods() )
</script>

<template>
  <div class="home-product">
    <HomePanal :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="goods in cate.goods" :key="goods.id">
            <RouterLink to="/" class="goods-item">
              <img :src="goods.picture" alt="" />
              <p class="name ellipsis">{{ goods.name }}</p>
              <p class="desc ellipsis">{{ goods.desc }}</p>
              <p class="price">&yen;{{ goods.price }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </HomePanal>
  </div>
</template>