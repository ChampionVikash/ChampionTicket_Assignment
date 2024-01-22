import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SupportTicketForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    severity: '',
    type: '',
  });
 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Check and update the API endpoint URL here
      const res = await fetch('https://champion-ticket-assignment-vbxz.vercel.app/api/ticket/support-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to create agent');
      }

      const data = await res.json();
      console.log(data);
      setError(null);
      navigate('/support-agents');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-7 max-w-lg mx-auto bg-slate-300 p-3 sm:p-10'>
      <h1 className='text-3xl text-center font-semibold mb-4'>SupportTicket Form</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <label htmlFor='topic'>Topic:</label>
        <input
          type='text'
          id='topic'
          className='border p-3 rounded-lg'
          placeholder='topic'
          value={formData.topic}
          onChange={handleChange}
          required
        />

        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          className='border p-3 rounded-lg'
          placeholder='description'
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor='severity'>Severity:</label>
        <input
          type='text'
          id='severity'
          className='border p-3 rounded-lg'
          placeholder='severity'
          value={formData.severity}
          onChange={handleChange}
          required
        />

        <label htmlFor='type'>Type:</label>
        <input
          type='text'
          id='type'
          className='border p-3 rounded-lg'
          placeholder='type'
          value={formData.type}
          onChange={handleChange}
          required
        />

        <button
          type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          disabled={loading}
        >
          {loading ? 'Creating Ticket...' : 'CreateSupport Ticket'}
        </button>

        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </form>
    </div>
  );
};

export default SupportTicketForm;
