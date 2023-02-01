import jwt from 'jsonwebtoken'

export const AuthMiddleware = (req, res, next) => {
  const authHeader = req.get('Authorization')

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    try {
      const user = jwt.verify(token, process.env.SECRET)

      req.user = user
    } catch (error) {
      console.log('Invalid JWT')
      console.log(error)
    }
  }

  return next()
}
