import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date,
      required: true,
    },
    severity: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SupportAgent',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    resolvedOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

const TicketSupport = mongoose.model('TicketSupport', ticketSchema);

export default TicketSupport;
