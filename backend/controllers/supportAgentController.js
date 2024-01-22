import SupportAgent from '../models/agentCreate.js';
import { errorHandler } from '../utils/error.js';

export const createSupportAgent = async (req, res, next) => {
  try {
    const { name, email, phone, description } = req.body;

    if (!name || !email || !phone || !description) {
      throw errorHandler(400, 'Missing required fields for support agent creation.');
    }

    const newAgent = new SupportAgent({
      name,
      email,
      phone, 
      description,
      active: true,
      dateCreated: new Date(),
    });

    const savedAgent = await newAgent.save();

    res.status(201).json(savedAgent);
  } catch (error) {
    next(error);
  }
};

