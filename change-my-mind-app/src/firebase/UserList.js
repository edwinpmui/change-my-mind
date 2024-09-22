import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Box, Button, CircularProgress, Typography, List, ListItem, ListItemText } from '@mui/material';
import './UserList.css';

const UserList = () => {
  const { findUsers, user: currentUser, login, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await findUsers();
      setUsers(users);
      setLoading(false);
    };
    fetchUsers();
  }, [findUsers]);

  const handleSelectUser = (user) => {
    if (currentUser && user.uid !== currentUser.uid) {
      navigate(`/chat/${user.uid}`);
    }
  };

  const handleVideoCall = (user) => {
    if (currentUser && user.uid !== currentUser.uid) {
      navigate(`/video-call/${user.uid}`);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!currentUser) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <Typography variant="h6" gutterBottom>
          Please sign in to view the user list.
        </Typography>
        <Button variant="contained" color="primary" onClick={login}>
          Sign In
        </Button>
      </Box>
    );
  }

  return (
    <Box className="user-list" p={2}>
      <Typography variant="h4" gutterBottom>
        Registered Users
      </Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.uid} className={user.uid === currentUser.uid ? 'current-user' : ''}>
            <ListItemText
              primary={`${user.displayName} ${user.uid === currentUser.uid ? '(You)' : ''}`}
            />
            {user.uid !== currentUser.uid && (
              <Box display="flex" gap={1}>
                <Button variant="contained" color="primary" onClick={() => handleSelectUser(user)}>
                  Chat
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleVideoCall(user)}>
                  Video Call
                </Button>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;