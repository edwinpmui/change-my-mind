import React, { useState } from 'react';
import UserList from './firebase/UserList';
import ChatRoom from './firebase/ChatRoom';
import GlobalChatRoom from './firebase/GlobalChatRoom'; // Import the GlobalChatRoom component
import { Container, Box, Paper, Drawer, Avatar, Typography, Button, List, ListItem, AppBar, Toolbar } from '@mui/material';
import './App.css';
import { useAuth } from './firebase/AuthContext';
import { useNavigate } from 'react-router-dom';
import DebateRoom from './firebase/DebateRoom';


const DebatePage = ({ topic }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    const { logout } = useAuth();
    const handleNavigation = (path) => {
        navigate(path);
      };

    return (
        <>
            <Box display="flex" flexDirection="row" height="6vh" bgcolor="primary.main">
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', padding: '10px', color: 'white' }}>
                    Debate Topic: {topic}
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" height="94vh">
                <Drawer
                    variant="permanent"
                    anchor="left"
                    PaperProps={{ style: { width: '240px', padding: '16px' } }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" mb={4} mt={1}>
                        <Typography variant="h5" gutterBottom mb={5}>
                            Argumate
                        </Typography>
                        <Avatar style={{ width: '80px', height: '80px', marginBottom: '16px' }} />
                        <Button variant="outlined" onClick={logout}>
                            Logout
                        </Button>
                        <List>
                        <ListItem>
                <Button variant="contained" fullWidth onClick={() => handleNavigation('/home')}>
                  Home
                </Button>
              </ListItem>
                        <ListItem>
                <Button variant="contained" fullWidth onClick={() => handleNavigation('/debate-room/topic1')}>
                  Topic 1
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="contained" fullWidth onClick={() => handleNavigation('/debate-room/topic2')}>
                  Topic 2
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="contained" fullWidth onClick={() => handleNavigation('/debate-room/topic3')}>
                  Topic 3
                </Button>
              </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Container maxWidth="lg" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start" mt={4} ml={2} width="100%">
                        <Paper elevation={3} style={{ width: '30%', padding: '16px' }}>
                            <DebateRoom topic={topic} />
                        </Paper>
                    </Box>
                </Container>
                <Drawer
                    variant="permanent"
                    anchor="right"
                    PaperProps={{ style: { width: '15%', padding: '16px' } }}
                >
                    {/* Right panel content for chat */}
                    <Typography variant="h6" gutterBottom>Global Chat</Typography>
                    <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '50vh' }}>
                        <GlobalChatRoom />
                    </Box>
                </Drawer>
            </Box>
        </>
    );
};

export default DebatePage;