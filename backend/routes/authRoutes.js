import express from "express";
import { googleLogin, login, logout, register } from "../controller/authController.js";

const authRoutes  = express.Router();

authRoutes.post("/register",register);
authRoutes.post("/login",login);
authRoutes.post("/logout",logout)
authRoutes.post("/googlelogin",googleLogin)

export default authRoutes