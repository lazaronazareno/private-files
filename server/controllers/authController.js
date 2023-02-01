import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'

export const authUser = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() })
  }

  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    res.status(401).json({ msg: 'User not found' })
    return next()
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({
      name: user.name,
      email: user.email,
      id: user._id
    }, process.env.SECRET, {
      expiresIn: '8h'
    })

    res.json({ token })
  } else {
    res.status(401).json({ msg: 'Invalid password' })
    return next()
  }
}

export const isAuth = async (req, res) => {
  res.json({ user: req.user })
}
