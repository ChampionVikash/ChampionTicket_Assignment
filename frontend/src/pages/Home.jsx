import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/support-agents'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Champion</span>
            <span className='text-slate-700'>Ticket</span>
          </h1>
        </Link>
     
        <ul className='flex gap-4'>
          <Link to='/support-agents'>
            <li className='text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/all-tickets'>
            <li className='text-slate-700 hover:underline'>
              Tickets
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
