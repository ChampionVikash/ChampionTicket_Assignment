import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupportAgentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    // Validate email on change and update the state
    if (id === 'email') {
      setIsEmailValid(validateEmail(value));
    }
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validate email before submitting
      if (!isEmailValid) {
        throw new Error('Invalid email format');
      }

      // Check and update the API endpoint URL here
      const res = await fetch('https://champion-ticket-assignment-vbxz.vercel.app/api/agent/support-agents', {
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
      navigate('/support-tickets');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-7 max-w-lg mx-auto bg-slate-300 p-3 sm:p-10'>
      <h1 className='text-3xl text-center font-semibold mb-4'>CreateAgent Screen</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          className='border p-3 rounded-lg'
          placeholder='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          className={`border p-3 rounded-lg ${isEmailValid ? '' : 'border-red-500'}`}
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        {!isEmailValid && formData.email.trim() !== '' && (
          <p className='text-red-500 mt-2'>Please enter a valid email address</p>
        )}


        <label htmlFor='phone'>Phone:</label>
        <input
          type='tel'
          id='phone'
          className='border p-3 rounded-lg'
          placeholder='phone'
          value={formData.phone}
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

        <button
          type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          disabled={loading}
        >
          {loading ? 'Creating Agent...' : 'Create Agent Screen'}
        </button>

        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </form>
    </div>
  );
};

export default SupportAgentForm;
