import { createSlice } from "@reduxjs/toolkit";

/* 
  DESC Types for app slice
*/

type AppSliceType = {
  version: string;
  theme: string;
  mode: "light" | "dark";
};

const initialState = {
  version: "v0.0.1",
  theme: "default",
  mode: "light",
} as AppSliceType;

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    updateApp: () => {},
  },
});

export default appSlice;
