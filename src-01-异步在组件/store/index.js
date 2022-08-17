import { configureStore } from '@reduxjs/toolkit'
import home from './modules/home'
import kind from './modules/kind'

// 引入reducer函数，并将它添加到我们的store函数中
// 通过在reducer参数中定义一个字段，我们告诉store使用这个slice  reducer函数来处理改装天的所有更新
const store = configureStore({
  reducer:{   // 此处可以设置多模块
    home,kind
  }
})

export default store