import API, { UserAPI, UserAPIUpdatePassword } from '../api/UserAPI'
import AuthController from './AuthController'

export class UserController {
  private readonly api: UserAPI
  constructor() {
    this.api = API
  }

  async updatePassword(data: UserAPIUpdatePassword) {
    try {
      const response = await this.api.updatePassword(data)
      AuthController.fetchUser()
      if (response?.status == 200) {
        return true
      }
      return false
    } catch (e: unknown) {
      console.error(e as Error)
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data)
      AuthController.fetchUser()
      alert('Аватар успешно изменен') // после добавления RTK заменить на Snackbar (UserProfile, DropZone)
    } catch (e: unknown) {
      console.error(e as Error)
    }
  }
}

export default new UserController()