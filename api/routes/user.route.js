import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlware/jwt.js";

const router = express.Router();

// router.get("/register", );
// router.get("/login ", );
router.delete("/:id", verifyToken, deleteUser);


export default router;