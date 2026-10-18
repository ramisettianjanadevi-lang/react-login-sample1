
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      navigate('/sample');
    } else {
      alert('Please enter username and password');
    }
  }

  return (
    <div className="login-page">
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <div className="login-card">
        <div className="login-icon">🔐</div>

        <h1>Welcome Back!</h1>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <div className="input-box">
            <span>👤</span>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <span>🔑</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login <span>→</span>
          </button>
        </form>

        <p className="footer-text">✨ Welcome to our website</p>
      </div>
    </div>
  );
}

export default Login;
