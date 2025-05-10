import { createSlice } from "@reduxjs/toolkit";

/* 
  DESC Types for app slice
*/

type AppSliceType = {
  version: string
  theme: string
  mode: "light" | "dark"
}

const initialState = {
  version: "v0.0.1",
  theme: "default",
  mode: "light"
}

const appSlice = createSlice({
  name: "app",
  initialState: {},
  reducers: {
    updateApp: () => {}
  }
})

export default appSlice