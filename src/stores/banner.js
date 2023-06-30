import instance from "@/utils/http"
export function getBannerApi () {
  return instance({
    url: 'home/banner'
  })
}