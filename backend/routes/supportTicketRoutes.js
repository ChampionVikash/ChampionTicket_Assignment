import express from 'express';
import { createSupportTicket, getAllSupportTickets } from '../controllers/supportTicketController.js';

const router = express.Router();

router.post('/support-tickets', createSupportTicket);
router.get('/support-ticket', getAllSupportTickets);

export default router;
