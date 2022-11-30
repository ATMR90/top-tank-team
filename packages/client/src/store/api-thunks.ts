import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthController from '../controllers/AuthController'
import { ISignInData, IChangeDataForm, ISingUpForm } from '../typings'
import UserController from '../controllers/UserController'
import { UserAPIUpdatePassword } from '../api/UserAPI'

export const loginThunk = createAsyncThunk(
  'user/login',
  async (data: ISignInData) => {
    await AuthController.signin(data)
  }
)

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async (data: ISingUpForm) => {
    const res = await AuthController.signup(data)
    return res?.data
  }
)

export const getUserThunk = createAsyncThunk('user/getUser', async () => {
  const res = await AuthController.fetchUser()
  return res?.data
})

export const logoutThunk = createAsyncThunk('user/logout', async () => {
  await AuthController.logout()
})

export const updateProfileThunk = createAsyncThunk(
  'user/updateProfile',
  async (data: IChangeDataForm) => {
    const res = await UserController.updateProfile(data)
    return res?.data
  }
)

export const updatePasswordThunk = createAsyncThunk(
  'user/updatePassword',
  async (data: UserAPIUpdatePassword) => {
    const res = await UserController.updatePassword(data)
    return res?.data
  }
)

export const updateAvatarThunk = createAsyncThunk(
  'user/updateAvatar',
  async (data: FormData) => {
    const res = await UserController.updateAvatar(data)
    return res?.data
  }
)