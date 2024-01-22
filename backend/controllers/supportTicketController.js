import TicketSupport from '../models/ticketEntry.js';
import SupportAgent from '../models/agentCreate.js';
import { errorHandler } from '../utils/error.js';

export const createSupportTicket = async (req, res, next) => {
  try {
    const { topic, description, severity, type } = req.body;

    if (!topic || !description || !severity || !type) {
      throw errorHandler(400, 'Missing required fields for support ticket creation.');
    }

    const agents = await SupportAgent.find({ active: true });
    const assignedTo = agents.length > 0 ? agents[0]._id : null;

    const newTicket = new TicketSupport({
      topic,
      description,
      dateCreated: new Date(),
      severity,
      type,
      assignedTo,
      status: 'New',
      resolvedOn: null,
    });

    const savedTicket = await newTicket.save();

    res.status(201).json(savedTicket);
  } catch (error) {
    next(error);
  }
};

export const getAllSupportTickets = async (req, res, next) => {
  try {
    const { status, assignedTo, severity, type, sortField, sortOrder, page, pageSize } = req.query;

    let query = {};

    // Add filters
    if (status) query.status = status;
    if (assignedTo) query.assignedTo = assignedTo;
    if (severity) query.severity = severity;
    if (type) query.type = type;

    // Create sorting object
    const sort = {};
    if (sortField) sort[sortField] = sortOrder === 'desc' ? -1 : 1;

    // Pagination
    const skip = (page - 1) * pageSize;
    const limit = parseInt(pageSize);

    const tickets = await TicketSupport.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec();

    res.json(tickets);
  } catch (error) {
    next(error);
  }
};