import { useNavigate } from 'react-router-dom';
import { useAuth } from './firebase/AuthContext';
import { Button, Container, Typography, Box } from '@mui/material';
import './App.css';

const Chat = () => {
  const { user: currentUser, login } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <Container maxWidth="sm">
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          height="100vh"
        >
          <Typography variant="h6" gutterBottom>
            Please sign in to view the user list.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={login} 
            startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google logo" style={{ width: 20, height: 20 }} />}
            style={{ backgroundColor: '#fff', color: '#4285F4', marginTop: '20px' }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Container>
    );
  } else {
    navigate("/home");
    return null;
  }
};

export default Chat;