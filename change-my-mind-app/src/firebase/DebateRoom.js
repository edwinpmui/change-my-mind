import React, { useEffect, useState, useRef } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './AuthContext';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';
import '../App.css';

const DebateRoom = ({ topic }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, `debateRoom_${topic}`), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, [topic]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    await addDoc(collection(db, `debateRoom_${topic}`), {
      text: input,
      user: user ? user.displayName : 'anonymous',
      timestamp: serverTimestamp(),
    });

    setInput('');
    scrollToBottom();
  };

  return (
    <Box display="flex" flexDirection="column" height="85vh">
      <Paper elevation={3} style={{ flex: 1, overflowY: 'auto', padding: '16px', position: 'relative' }}>
        <Box className="messages" display="flex" flexDirection="column" justifyContent="flex-end" gap={2} height="calc(100vh - 120px)">
          {messages.map((msg) => (
            <Paper key={msg.id} elevation={1} style={{ padding: '8px 16px', borderRadius: '8px' }}>
              <Typography variant="subtitle2" color="textSecondary">
                {msg.user}
              </Typography>
              <Typography variant="body1">
                {msg.text}
              </Typography>
            </Paper>
          ))}
          <div ref={messagesEndRef} />
        </Box>
      </Paper>
      <Box component="form" onSubmit={handleSendMessage} display="flex" alignItems="center" p={2} gap={1} style={{ backgroundColor: 'white', boxSizing: 'border-box' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1 }}
          InputProps={{ style: { height: '40px', fontSize: '14px' } }} // Adjust the height and font size as needed
        />
        <Button type="submit" variant="contained" color="primary" style={{ height: '40px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default DebateRoom;