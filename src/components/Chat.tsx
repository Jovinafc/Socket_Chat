import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import UsersList from './UsersList';

let socket: any;

type message = {
  user: string;
  text: string;
};

type user = {
  id: string;
  name: string;
  room: string;
};

type roomData = {
  room: string;
  users: user[];
};

const Chat: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<message[]>([]);
  const [currentUsers, setCurrentUsers] = useState<user[]>([]);
  const END_POINT = 'https://react-chat-app14jvn.herokuapp.com/';

  useEffect(() => {
    socket = io(END_POINT, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });

    setName(searchParams.get('name')!);
    setRoom(searchParams.get('room')!);

    console.log(socket);
    socket.emit(
      'join',
      {
        name: searchParams.get('name'),
        room: searchParams.get('room'),
      },
      () => {}
    );

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on('message', (mess: message) => {
      setMessages([...messages, mess]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on('roomData', (roomData: roomData) => {
      const { users, room } = roomData;
      setCurrentUsers([...users]);
    });
  }, []);

  const submitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <div className='flex flex-col justify-between bg-white rounded-lg w-6/12 h-4/5 '>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />

        <Input
          message={message}
          setMessage={setMessage}
          submitBtn={submitBtn}
        />
      </div>
      <UsersList users={currentUsers} />
    </div>
  );
};

export default Chat;
