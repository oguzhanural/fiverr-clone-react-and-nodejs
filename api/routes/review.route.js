import express from "express";
import {  verifyToken } from "../middlware/jwt.js"
const router = express.Router();
import { createReview, getReviews, deleteReview } from "../controllers/review.controller.js"

router.post("/", verifyToken, createReview);
router.get("/:id", getReviews );
router.delete("/:id", deleteReview);

export default router;
