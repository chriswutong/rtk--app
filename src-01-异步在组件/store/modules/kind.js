import { createSlice } from "@reduxjs/toolkit";

export const kindSlice = createSlice({
  name:'kind',
  initialState:{
    categoryList: []
  },
  reducers:{
    changeCategoryList(state,action){
      state.categoryList = action.payload
    }
  }
})

export const { changeCategoryList } = kindSlice.actions

export default kindSlice.reducer