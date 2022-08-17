import { createSlice } from "@reduxjs/toolkit";
import { getCategoryList } from '../../api/kind'
export  const kindSlice = createSlice({
  name: 'kind',

  initialState: {
    categoryList: []
  },

  reducers: {
    changeCategoryList(state, action) {
      state.categoryList = action.payload
    }
  }
})

export function getCategoryListAction(dispatch) {
  getCategoryList().then(res => dispatch(changeCategoryList(res.data.data)))
}

export const { changeCategoryList } = kindSlice.actions
export default kindSlice.reducer