import { useState } from 'react';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setUsernameError('Username is required');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      setUsernameError('');
      setPasswordError('');
      // Do something with the form values, such as sending them to a server for authentication
    //   window.location.href = '/';
    navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <FormHelperText error>{usernameError}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<LockOutlinedIcon />}
      >
        Login
      </Button>
      <Link to="/signup">Don't have an account? Sign up</Link>
    </form>
  );
};

export default Login;