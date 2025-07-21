import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../hooks/useDocs';
import './login.css';
import imagine from './imagine.png';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const success = await checkLogin(username, password);
    if (success) {
      localStorage.setItem('username', username);
      navigate('/main');
    } else {
      setError('Incorrect username or password');
    }
  }

  return (
    <div className="login-page">
        
      <p className='VINTAGE'><b>VINTAGE ART</b></p>
      <div className="left-section">
        <img src={imagine} alt="Logo" />
      </div>

      <div className="pirveli1">
        <div className="meore">
          <h2>VINTAGE</h2>
          <form id="form" onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p><a href="/register">Don't have an account? Sign up</a></p>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>

    </div>
  );
}

export default Login;