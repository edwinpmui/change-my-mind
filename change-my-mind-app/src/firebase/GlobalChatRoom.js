import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './AuthContext';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';
import '../App.css';

const GlobalChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'globalChat'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    await addDoc(collection(db, 'globalChat'), {
      text: input,
      timestamp: serverTimestamp(),
      user: user.displayName,
    });

    setInput('');
    scrollToBottom();
  };

  if (!user) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Typography variant="h6" gutterBottom>
          Please sign in to view the global chat room.
        </Typography>
        <Button variant="contained" color="primary" onClick={login}>
          Sign In
        </Button>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" height="97%">
      <Paper elevation={3} style={{ flex: 1, overflowY: 'auto', padding: '16px', position: 'relative' }}>
        <Box className="messages" display="flex" flexDirection="column" justifyContent="flex-end" gap={2} height="100%">
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
      <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" p={2} gap={1}>
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

export default GlobalChatRoom;