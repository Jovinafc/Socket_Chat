import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
// import ReactEmoji from 'react-emoji';

type message = {
  user: string;
  text: string;
};

interface Props {
  messages: message[];
  name: string;
}

const Messages: React.FC<Props> = ({ messages, name }) => {
  return (
    <ScrollToBottom className='flex-auto overflow-auto pt-2'>
      {messages.map((mess, i) => (
        <div key={i}>
          <Message message={mess} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
