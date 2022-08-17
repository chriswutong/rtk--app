import { createSlice } from "@reduxjs/toolkit";
import { getBannerList,getProList } from '../../api/home'
 export const homeSlice = createSlice({
  name :'home',

  initialState: {
    bannerList: [],
    proList: []
  },

  reducers: {
    changeBannerList(state,action){
      state.bannerList = action.payload
    },
    changeProList(state, action) {
      state.proList = action.payload
    }
  }
})

// 异步操作在状态管理器  ----------  类似于redux-thunk
export function getBannerListAction(dispatch) {
  getBannerList().then(res => dispatch(changeBannerList(res.data.data)))
}
export function changeProListAction(params) {
  return (dispatch) => {
    getProList(params).then(res => dispatch(changeProList(res.data.data)))

  }
}

export const { changeBannerList, changeProList } = homeSlice.actions
export default homeSlice.reducer