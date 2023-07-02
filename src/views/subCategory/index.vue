<script setup>
import {getCategoryFilterApi,getSubCategoryApi} from '@/apis/category.js'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '@/views/home/components/goodsItem.vue'
import { useDisabled } from 'element-plus';
// 获取面包屑数据
const categoryfilterData = ref({})
const route = useRoute()
const getCategoryFilter = async()=>{
  const res = await getCategoryFilterApi(route.params.id)
  categoryfilterData.value = res.data.result
}
// 获取商品列表数据
const goodList = ref([])
const reqData =ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async()=>{
  const res = await getSubCategoryApi(reqData.value)
  goodList.value = res.data.result.items
}
// 切换商品分类
const tabChange = ()=>{
  getGoodList()
}
 onMounted(()=>getCategoryFilter())
 onMounted(()=>getGoodList())
// 下拉加载
const disabled =ref(false)//加载完毕禁止加载
const load = async ()=>{
  reqData.value++
  const res = await getSubCategoryApi(reqData.value)
  const goodList = [...goodList.value,...res.data.result.items]
  if(res.data.result.items.length===0){
    disabled.value = true
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryfilterData.parentId}` }">{{ categoryfilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryfilterData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="goods in goodList" :key="goods.id" :goods="goods"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>