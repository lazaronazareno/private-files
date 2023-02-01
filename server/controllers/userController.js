import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

export const newUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() })
  }

  const { email, password } = req.body

  let user = await User.findOne({ email })

  if (user) {
    return res.status(400).json({ msg: 'user exists!' })
  }

  user = new User(req.body)

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(password, salt)

  try {
    await user.save()

    res.json({ msg: 'Register Successfull!' })
  } catch (error) {
    console.log(error)
  }
}
