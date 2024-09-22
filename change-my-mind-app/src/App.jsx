import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import ChatRoom from './firebase/ChatRoom';
import GlobalChatRoom from './firebase/GlobalChatRoom';
import VideoCall from './VideoCall';
import PreferenceForm from './firebase/PreferenceForm';
import { AuthProvider } from './firebase/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat/:userId" element={<ChatRoom />} />
          <Route path="/global-chat" element={<GlobalChatRoom />} />
          <Route path="/video-call/:userId" element={<VideoCall />} />
          <Route path="/preferences" element={<PreferenceForm />} />
          <Route path="/chat-room/:roomId" element={<ChatRoom />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;