import express from "express";
import {
    register,
    login,

    logout,

    myProfile,

} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/user/register").post(register);

userRouter.route("/user/login").post(login);

userRouter.route("/user/logout").get(logout);


userRouter.route("/user/me").get(isAuthenticated, myProfile);


