import instance from '@/utils/http.js'
export function getCategoryApi () {
  return instance({
    url: 'home/category/head'
  })
}