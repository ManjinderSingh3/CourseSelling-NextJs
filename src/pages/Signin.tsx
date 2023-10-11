import { BASE_URL } from '@/config';
import { userState } from '@/store/atoms/user';
import { Button, Card, TextField, Typography } from '@mui/material';
import axios from 'axios';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';


function Signin() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div
        style={{
          paddingTop: 120,
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant={'h5'}> Welcome back. Please Sign In</Typography>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={async () => {
                const response = await axios.post(
                  `${BASE_URL}/admin/login`,
                  {
                    username: username,
                    password: password,
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );
                localStorage.setItem('token', response.data.token);
                setUser({ isLoading: false, userEmail: username });
                router.push('/courses');
              }}
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
