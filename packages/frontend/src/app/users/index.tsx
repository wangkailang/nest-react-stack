import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string>();
  const fetchBooks = () => {
    fetch('http://localhost:3333/api/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie('token')}`
      },
      method: 'GET',
      credentials: 'include', // 允许服务器传递cookie过来
    })
    .then((res) => {
      if (!res.ok) {
        setError(res.statusText);
      } else {
        setError(undefined)
      }
      return res.json()
    })
    .then((res) => {
      setUsers(res.data)
    });
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Typography component="h2" variant="h3">用户中心</Typography>
      {error || JSON.stringify(users, null, 2)}
    </div>
  )
}