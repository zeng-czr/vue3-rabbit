import instance from "@/utils/http"
export function getCategoryApi (id) {
  return instance({
    url: '/category',
    params: {
      id
    }
  })
}