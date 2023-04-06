 import express from "express";
 import { verifyToken } from "../middlware/jwt.js";
 import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.controller.js";

 const gigRouter = express.Router();

 gigRouter.post("/", verifyToken, createGig);
 gigRouter.delete("/:id", verifyToken, deleteGig);
 gigRouter.get("/single/:id", verifyToken,getGig);
 gigRouter.get("/", verifyToken, getGigs);

 export default gigRouter;
