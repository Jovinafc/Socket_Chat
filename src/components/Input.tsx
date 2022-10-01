import React from 'react';

type InputElement = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

type Props = {
  message: string;
  submitBtn: (e: SubmitEvent) => void;
  setMessage: (val: string) => void;
};

const Input: React.FC<Props> = ({ message, setMessage, submitBtn }) => {
  return (
    <form
      className='flex border-t-2 border-solid border-black'
      onSubmit={submitBtn}
    >
      <input
        className='border-b-2 p-4 w-4/5 outline-none'
        type='text'
        placeholder='Type a message'
        value={message}
        onChange={(e: InputElement) => setMessage(e.target.value)}
      />
      <button
        className='uppercase bg-[#2979FF] p-2 border-none w-1/5'
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default Input;
