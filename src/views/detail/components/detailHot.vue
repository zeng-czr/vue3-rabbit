<script setup>
import {getchHotGoodsApi} from '@/apis/detail.js'
import {ref,onMounted,defineProps} from 'vue'
import {useRoute} from 'vue-router'

// 接收参数
const props = defineProps({
  hotType:{
    type:Number
  },
  title:{
    type:String
  }
})
const hotList = ref([])//热门数据
const route = useRoute()
const reqData = ref({
  id:route.params.id,
  type:props.hotType,
  limit:3
})//请求数据
const routr = useRoute()//获取路由参数
//发送请求获取数据
const getHotList = async ()=>{
  const res = await getchHotGoodsApi(reqData)
  hotList.value = res.data.result
}
onMounted(() =>getHotList())
</script>


<template>
  <div class="goods-hot">
    <h3>{{props.title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>