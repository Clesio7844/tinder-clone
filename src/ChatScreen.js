import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Nelo',
      image:
        'https://pbs.twimg.com/profile_images/1218619863779831809/lmrgTCxV.jpg',
      message: 'Whats up'
    },
    {
      name: 'Nelo',
      image:
        'https://pbs.twimg.com/profile_images/1218619863779831809/lmrgTCxV.jpg',
      message: 'Hows it going'
    },
    {
      message: 'Hi! How are you Nelo'
    }
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__temstemp'>YOU MATCHED WITH ELLEN ON 10/01/21</p>
      {messages.map(message =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='Type a message'
          type='text'
        />
        <button
          onClick={handleSend}
          type='submit'
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
