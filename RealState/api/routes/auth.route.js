import express from 'express';
import {signup} from '../controller/auth.controller.js';
import {signIn} from '../controller/auth.controller.js';

const router = express();

router.post("/signup", signup)
router.post("/signIn", signIn)

export default router;