import { createSlice } from "@reduxjs/toolkit";
import { profile } from "console";

/* 
  DESC Types for user slice
*/
type AccountProfileType = {
  user_id: string
  lang: string
  bind_weixin: string
  bind_google: string
  roles: string[]
  permission: string[]
  notice_setting: string
  phone_verified: boolean
  email_verified: boolean
}

type UserProfileType = {
  username: string
  nickname: string
  gender: string
  avatar: string
  phone: string
  email: string
}

const initialState = {
  account: {} as AccountProfileType,
  profile: {} as UserProfileType
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
  }
})

export default userSlice