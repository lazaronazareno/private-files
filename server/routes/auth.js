import express from 'express'
import { authUser, isAuth } from '../controllers/authController.js'
import { check } from 'express-validator'
import { AuthMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/', [
  check('email', 'Type a valid Email').isEmail(),
  check('password', 'Type a Password').not().isEmpty()
], authUser)

router.get('/', AuthMiddleware, isAuth)

export default router
