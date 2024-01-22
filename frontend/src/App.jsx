import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SupportAgentForm from './components/SupportAgentForm';
import SupportTicketForm from './components/SupportTicketForm';
import Home from './pages/Home';
import AllTickets from './pages/AllTickets';

export default function App() {
  return (
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/support-agents" element={<SupportAgentForm />} />
        <Route path="/support-tickets" element={<SupportTicketForm />} />
        <Route path='/all-tickets' element={<AllTickets />} />
      </Routes>
    </BrowserRouter>
  );
}
App.jsx
