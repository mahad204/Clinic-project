import Axios from 'axios'
import React from 'react'
// import Login from './Login'
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    // const confirmedPass = document.form['Cpassword'].querySelector('input')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
          setUsernameError('Username is required');
        } else if (!password) {
          setPasswordError('Password is required');
        } else if (!confirmPassword) {
          setConfirmPasswordError('Confirm password is required');
        } else if (password !== confirmPassword) {
          setConfirmPasswordError('Passwords do not match');
        } else {
          setUsernameError('');
          setPasswordError('');
          setConfirmPasswordError('');
        // Do something with the form values, such as sending them to a server for authentication
      //   window.location.href = '/';
      navigate('/');
      }
    };
    const register = ()=>{
      Axios.post('http://localhost/5000/register',
      {username:username,
      password:password
      }).then((response)=>{
        console.log(response);
      })   
    }
  return (
    <form onSubmit={handleSubmit} action='instert.php' method='post'>
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
        <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="confirmpPassword">Confirm Password</InputLabel>
        <Input
            id="Cpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && <FormHelperText error>{confirmPasswordError}</FormHelperText>}
        </FormControl>
        <Button
        onClick={register}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<LockOutlinedIcon />}
        >
        SignUp
        </Button>
    </form>
  )
}

export default SignUp;