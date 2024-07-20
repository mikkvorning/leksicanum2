import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { auth, provider } from '../../config/firebase';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authing, setAuthing] = useState(false);
  const [, setUseGoogleSignin] = useState(false);
  const navigate = useNavigate();

  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    setUseGoogleSignin(true);
    setAuthing(true);
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: '320px',
      }}
    >
      <FormControl>
        <Typography variant='h2'>
          Enter your email and password to sign into Leksicanum
        </Typography>
        <TextField
          placeholder='Email'
          autoComplete='username'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder='Password'
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={authing} onClick={signIn}>
          Sign in
        </Button>
        <Button disabled={authing} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignInPage;
