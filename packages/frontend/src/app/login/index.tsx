import { 
  Container, Box, Avatar, Typography,  Button,
  TextField
} from "@mui/material"
import { LockOpenOutlined } from '@mui/icons-material';
import React from "react";

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('http://localhost:3333/api/users/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: data.get('name'),
        password: data.get('password'),
      }),
      credentials: 'include', // 允许服务器传递cookie过来
    })
    .then((res) => res.json())
    .then((res) => console.log(res));

  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          登录
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="用户名"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="密码"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登录
          </Button>
        </Box>
      </Box>
    </Container>
  )
}