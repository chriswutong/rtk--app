import { createSlice } from "@reduxjs/toolkit";

// 创建Slice需要一个字符串名称来标识切片，一个初始state，以及一个或多个定义了该如何更新state的reducer函数
// slice创建后，我么可以导出slice中生成的Redux action creators, 和reducer函数
export const homeSlice = createSlice({
  name: 'home',     //  个字符串名称来标识
  initialState: {   // 一个初始化的状态
    bannerList: [],
    proList: []
  },
  reducers: {    // 一个或多个定义了该如何更新state的reducer函数
    changeBannerList (state,action) {
      state.bannerList = action.payload
    },
    changeProList(state, action) {
      state.proList = action.payload
    }
  }
})
console.log(homeSlice)
// 导出slice中生成的Redux action creators, 和reducer函数
export const { changeBannerList, changeProList }= homeSlice.actions
// 导出slice中生成的reducer函数   ----包含组建的状态以及action
export default homeSlice.reducer     // 类似于之前的纯函数