import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import supportAgentRoutes from './routes/supportAgentRoutes.js';
import supportTicketRoutes from './routes/supportTicketRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey this is my API running ');
});

app.use('/api/agent', supportAgentRoutes);
app.use('/api/ticket', supportTicketRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

export default app;
