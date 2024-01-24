import express from "express";
import groceriesController from "../controllers/groceries.controller.js"

const router = express.Router();

router.post('/insertOne/', groceriesController.insertOne)
router.get('/getAll/', groceriesController.getAll)
router.get('/getOne/:matricula', groceriesController.getOne)
router.patch('/updateOne/:matricula', groceriesController.updateOne)
router.delete('/deleteOne/:matricula', groceriesController.deleteOne)

export default router;