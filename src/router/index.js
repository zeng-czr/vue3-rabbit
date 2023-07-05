import { createRouter, createWebHistory } from 'vue-router'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import { useUserStore } from '@/stores/user.js'

import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from "@/views/checkout/index.vue"
import Pay from "@/views/pay/index.vue"
import PayCallback from "@/views/payCallback/index.vue"
import Member from "@/views/member/index.vue"
import MemberInfo from '@/views/member/components/memberInfo.vue'

import MemberOrder from '@/views/member/components/memberOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/home',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'payCallback',
          component: PayCallback
        },
        {
          path: '/member',
          component: Member,
          children: [
            {
              path: '',
              component: MemberInfo
            },
            {
              path: 'order',
              component: MemberOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由转换行为
  scrollBehavior () {
    return {
      top: 0
    }
  }
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (!token && to.path === '/checkout') {
    next('/login')
    ElMessage({
      type: 'warning',
      message: '请先登录后下单'
    })
  } else {
    next()
  }
})
export default router
