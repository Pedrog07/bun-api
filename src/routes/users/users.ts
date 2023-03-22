export const signupHandler = async (req, res) => {
  res.status(200).json({ message: 'Signup' })
}

export const loginHandler = (req, res) => {
  res.status(200).json({ message: 'Login' })
}

export const changePasswordHandler = (req, res) => {
  res.status(200).json({ message: 'Change password' })
}

export const getAllUsersHandler = (req, res) => {
  res.status(200).json({ message: 'Get all users' })
}

export const getUserHandler = (req, res) => {
  res.status(200).json({ message: 'Get user' })
}

export const updateUserHandler = (req, res) => {
  res.status(200).json({ message: 'Update user' })
}

export const deleteUserHandler = (req, res) => {
  res.status(200).json({ message: 'Delete user' })
}
