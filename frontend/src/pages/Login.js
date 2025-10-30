import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');

  const login = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    window.location = '/dashboard';
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
