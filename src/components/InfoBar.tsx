import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  room: string;
}

const InfoBar: React.FC<Props> = ({ room }) => {
  return (
    <div className='flex items-center justify-between bg-[#2979FF] h-16 w-full rounded-lg'>
      <div className='flex items-center ml-4 text-white'>
        <h3>{room}</h3>
      </div>
      <div className='flex mr-4 justify-end'>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
