import express from 'express'
import { newUser } from '../controllers/userController.js'
import { check } from 'express-validator'

const router = express.Router()

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email invalid').isEmail(),
  check('password', 'Password is below 6 charaters').isLength({ min: 6 })
], newUser)

export default router
