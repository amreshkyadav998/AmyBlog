import { register, login } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

// Register and Login routes
router.post("/register", register);
router.post("/login", login);

// Export the router (not the register function)
export default router;
