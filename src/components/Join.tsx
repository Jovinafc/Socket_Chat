import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  return (
    <div className='bg-black h-screen flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-white text-center pb-2 border-white border-solid border-b-2'>
          Join
        </h1>
        <input
          className=' mt-4 pt-4 pb-4 pr-5 pl-5 w-full rounded-none'
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <input
            className='mt-3 pt-4 pb-4 pr-5 pl-5 w-full rounded-none'
            type='text'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className='bg-cyan-800 mt-3 w-full uppercase no-underline border-none p-5'
            type='submit'
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
