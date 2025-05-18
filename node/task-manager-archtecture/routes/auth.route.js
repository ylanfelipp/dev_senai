import AuthController from "../controllers/AuthController.js";
import express from "express";

const authRouter = express.Router();

authRouter.post('/login', AuthController.login)
authRouter.get('/token', AuthController.refreshToken)
authRouter.get('/logout', AuthController.logout)

export default authRouter