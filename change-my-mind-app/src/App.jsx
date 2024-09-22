import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import ChatRoom from './firebase/ChatRoom';
import GlobalChatRoom from './firebase/GlobalChatRoom';
import VideoCall from './VideoCall';
import PreferenceForm from './firebase/PreferenceForm';
import { AuthProvider } from './firebase/AuthContext';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SideChat from './components/SideChat';
import TopBar from './components/TopBar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <TopBar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-4 ml-48 mt-16">
              <Hero />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat/:userId" element={<ChatRoom />} />
              <Route path="/global-chat" element={<GlobalChatRoom />} />
                <Route path="/video-call/:userId" element={<VideoCall />} />
            <Route path="/preferences" element={<PreferenceForm />} />
            <Route path="/chat-room/:roomId" element={<ChatRoom />} />
            <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
            <SideChat />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;