import { Router } from "express";
import UserController from "../controllers/user.controller";

const userController = new UserController();
const router = Router();
//Get Hello
router.get('/hello', userController.sendHello)
// Get all user
router.get('/', userController.getAll)
// Create user
router.post('/', userController.create)

export default router;