import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './firebase/AuthContext';
import Login from './Login';
import HomePage from './HomePage';
import ChatRoom from './firebase/ChatRoom';
import GlobalChatRoom from './firebase/GlobalChatRoom';
import VideoCall from './VideoCall';
import DebateRoom from './firebase/DebateRoom'; // Import the DebateRoom component
import DebatePage from './DebatePage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat/:userId" element={<ChatRoom />} />
          <Route path="/global-chat" element={<GlobalChatRoom />} />
          <Route path="/video-call/:userId" element={<VideoCall />} />
          <Route path="/debate-room/topic1" element={<DebatePage topic="More Doors or Wheels" />} />
          <Route path="/debate-room/topic2" element={<DebatePage topic="Trump vs Kamala" />} />
          <Route path="/debate-room/topic3" element={<DebatePage topic="Flat Earth?" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;