import React from 'react';

type user = {
  id: string;
  name: string;
  room: string;
};

interface Props {
  users: Array<user>;
}

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div className='bg-white p-2 ml-2 rounded-md'>
      <h3 className='border border-b-2 p-1 border-gray-500'>
        User's Active ({users.length})
      </h3>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UsersList;
