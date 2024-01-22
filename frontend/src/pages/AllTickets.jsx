import React, { useState, useEffect } from 'react';

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);

        const res = await fetch('https://champion-ticket-assignment-vbxz.vercel.app/api/ticket/support-ticket');
        if (!res.ok) {
          throw new Error('Failed to fetch support tickets');
        }

        const data = await res.json();
        setTickets(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []); 

  return (
    <div className='mt-7 max-w-lg mx-auto bg-slate-300 p-3 sm:p-10'>
      <h1 className='text-3xl text-center font-semibold mb-4'>All Support Tickets</h1>

      {loading && <p>Loading tickets...</p>}

      {error && <p className='text-red-500 mt-2'>{error}</p>}

      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id} className='p-3'>
            <strong>Topic:</strong> {ticket.topic}, <strong>Severity:</strong> {ticket.severity}
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTickets;
