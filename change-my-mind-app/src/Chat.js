import React, { useState } from 'react';
import UserList from './firebase/UserList';
import ChatRoom from './firebase/ChatRoom';
import { Container, Box, Paper } from '@mui/material';
import './App.css';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container maxWidth="lg">
      <Box 
        display="flex" 
        flexDirection="row" 
        justifyContent="space-between" 
        alignItems="flex-start" 
        mt={4}
      >
        <Paper elevation={3} style={{ width: '30%', padding: '16px' }}>
          <UserList onSelectUser={setSelectedUser} />
        </Paper>
        {selectedUser && (
          <Paper elevation={3} style={{ width: '65%', padding: '16px' }}>
            <ChatRoom selectedUser={selectedUser} />
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default Chat;