import express from 'express';
import { greet, remove, retrive, send, update } from '../controllers/controller.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = express.Router()

// Grret
router.get("/greet",auth,greet)

//retrive
router.get("/fetch",auth,retrive)

//sending
router.post("/send",auth,admin,send)

//updating
router.put("/update/:id",auth,admin,update)

//deleting
router.delete("/delete/:id",auth,admin,remove)


export default router

