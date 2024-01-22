import express from 'express';
import { createSupportAgent} from '../controllers/supportAgentController.js';

const router = express.Router();

router.post('/support-agents', createSupportAgent);


export default router;
