import request from '../utils/request'

export function getBannerList () {
  return request.get('/banner/list')
}

export function getProList (params) {
  return request.get('/pro/list', { params })
}