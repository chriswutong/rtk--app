import { configureStore } from "@reduxjs/toolkit";
import home from "./modules/home";
import kind from "./modules/kind";
const store = configureStore({
  reducer: {
    home,kind
  }
})

export default store