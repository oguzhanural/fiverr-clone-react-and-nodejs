 import express from "express";
 import { verifyToken } from "../middlware/jwt.js";
 import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.controller.js";

 const gigRouter = express.Router();

 gigRouter.post("/", verifyToken, createGig);
 gigRouter.delete("/:id", verifyToken, deleteGig);
 gigRouter.get("/single/:id", getGig);
 gigRouter.get("/", getGigs);

 export default gigRouter;
