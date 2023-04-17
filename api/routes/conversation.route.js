import express from "express";
import { verifyToken } from "../middlware/jwt.js";
import 
{ 
    getConversations,
    createConversation,
    getSingleConversation,
    updateConversation
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);  // single conversation.
router.put("/:id", verifyToken, updateConversation);

export default router;