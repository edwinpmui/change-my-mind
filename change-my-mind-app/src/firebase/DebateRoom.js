import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './AuthContext';
import Message from '../Message';
import '../App.css';

const DebateRoom = ({ topic }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const q = query(collection(db, `debateRoom_${topic}`), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [topic]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    await addDoc(collection(db, `debateRoom_${topic}`), {
      text: input,
      user: user ? user.displayName : 'anonymous',
      timestamp: serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map(({ id, text, user }) => (
          <Message key={id} text={text} user={user} />
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default DebateRoom;