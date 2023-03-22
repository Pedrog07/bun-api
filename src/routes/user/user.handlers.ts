import { BunRequest } from 'bunrest/src/server/request'
import { BunResponse } from 'bunrest/src/server/response'
import { UserService } from '../../services'
import { User } from '../../entities'

export const signupHandler = async (req: BunRequest, res: BunResponse) => {
  const data = req.body || {}
  const result = await UserService.signup(<User>data)
  res.status(200).json(result)
}

export const loginHandler = async (req: BunRequest, res: BunResponse) => {
  const { email, password } = req.body || {}

  const result = await UserService.login(email, password)

  res.status(200).json(result)
}

export const changePasswordHandler = async (req: BunRequest, res: BunResponse) => {
  const { email, newPassword } = req.body || {}

  const result = await UserService.changePassword(email, newPassword)

  res.status(200).json(result)
}

export const getAllUsersHandler = async (
  req: BunRequest,
  res: BunResponse,
  sub?: string
) => {
  res.status(200).json({ message: 'Get all users' })
}

export const getUserHandler = async (
  req: BunRequest,
  res: BunResponse,
  sub?: string
) => {
  res.status(200).json({ message: 'Get user' })
}

export const updateUserHandler = async (
  req: BunRequest,
  res: BunResponse,
  sub?: string
) => {
  res.status(200).json({ message: 'Update user' })
}

export const deleteUserHandler = async (
  req: BunRequest,
  res: BunResponse,
  sub?: string
) => {
  res.status(200).json({ message: 'Delete user' })
}
