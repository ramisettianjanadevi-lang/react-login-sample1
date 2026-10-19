
import { useNavigate } from 'react-router-dom';
import './Sample.css';

function Sample() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  return (
    <div className="sample-page">
      <nav className="sample-navbar">
        <h2>KodeBlooms</h2>
        <button onClick={handleLogout}>Logout ↗</button>
      </nav>

      <main className="sample-content">
        <div className="welcome-card">
          <div className="welcome-icon">🎉</div>

          <p className="welcome-label">LOGIN SUCCESSFUL</p>

          <h1>Welcome to KodeBlooms!</h1>

          <p className="welcome-description">
            You have successfully logged in.
            <br />
            We are happy to have you here!
          </p>

          <div className="sample-info">
            <div className="info-icon">💙</div>
            <div>
              <h3>You're All Set!</h3>
              <p>Your login navigation is working correctly.</p>
            </div>
          </div>

          <button
            className="home-button"
            onClick={() => navigate('/')}
          >
            ← Back to Login
          </button>
        </div>

        <p className="sample-footer">
          Made with 💙 using React
        </p>
      </main>
    </div>
  );
}

export default Sample;
