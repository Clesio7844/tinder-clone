import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeBottons from './SwipeBottons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeBottons />
          </Route>
        </Switch>
      </Router>

      {/* Tinder card */}
      {/* Button below tinder card */}

      {/* Chat screen  */}
      {/* Individual chats screen */}
    </div>
  );
}

export default App;
