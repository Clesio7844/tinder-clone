import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Kilie'
        message='Hey! how are you'
        timestamp='40 second ago'
        profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/124592311-185073559820653-4515148187985309671-n-1605107838.jpg?crop=0.532xw:0.711xh;0.241xw,0.0159xh&resize=640:*'
      />
      <Chat
        name='Jorda'
        message='Whats up'
        timestamp='55 minutes ago'
        profilePic='https://i1.wp.com/pagesix.com/wp-content/uploads/sites/3/2020/01/jordyn-woods.jpg?quality=80&strip=all&ssl=1'
      />
      <Chat
        name='Isabela'
        message='Ola'
        timestamp='3 days ago'
        profilePic='https://ipstatic.net/thumbs/180x180/71/0b/427x800_720310009164120064_1128060615387375768.jpg?c0.186.427.427'
      />
      <Chat
        name='Nelo'
        message='Oops there is he is!....'
        timestamp='1 week ago'
        profilePic='https://pbs.twimg.com/profile_images/1218619863779831809/lmrgTCxV.jpg'
      />
    </div>
  );
}

export default Chats;
