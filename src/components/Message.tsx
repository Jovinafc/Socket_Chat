import React from 'react';

interface Props {
  message: {
    user: string;
    text: string;
  };
  name: string;
}

const Message: React.FC<Props> = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <>
      {!isSentByCurrentUser && user !== 'admin' ? (
        <div className='flex justify-start mt-1 pl-2'>
          <p className='pr-2 text-sm text-gray-500'>{user}</p>
          <div className='bg-blue-600 pt-1 pb-1 pl-2 pr-2 rounded-md'>
            <p className='text-white'>{text}</p>
          </div>
        </div>
      ) : user === 'admin' ? (
        <div className='flex justify-center pr-2'>
          <div className='pt-1 pb-1 pl-4 pr-4'>
            <p className='pl-2 text-sm text-gray-500'>{text}</p>
          </div>
          {/* <p className='pl-2 text-sm text-gray-500'>{user}</p> */}
        </div>
      ) : (
        <div className='flex justify-end mt-1 pr-2'>
          <div className='bg-gray-300 pt-1 pb-1 pl-4 pr-4 rounded-md'>
            <p className='text-black'>{text}</p>
          </div>
          <p className='pl-2 text-sm text-gray-500'>{user}</p>
        </div>
      )}
    </>
  );
};

export default Message;
