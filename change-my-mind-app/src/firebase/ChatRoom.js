import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './AuthContext';

const ChatRoom = () => {
  const { user } = useAuth();
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (roomId) {
      const q = query(collection(db, 'messages'), where('roomId', '==', roomId));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map(doc => doc.data());
        setMessages(messages);
      });
      return () => unsubscribe();
    }
  }, [roomId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      await addDoc(collection(db, 'messages'), {
        roomId,
        userId: user.uid,
        userName: user.displayName || user.email, // Use displayName or email as the user identifier
        message: newMessage,
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span><strong>{msg.userName}</strong></span>: {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;