import express from "express";
import { verifyToken } from "../middlware/jwt.js"
import { getOrders, intent, confirm} from "../controllers/order.controller.js"

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder); // for test.
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;