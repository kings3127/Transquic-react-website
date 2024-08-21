import React from 'react';
import { Link } from 'react-router-dom';

// CSS styles in JS
const styles = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Caveat:wght@400..700&family=Cookie&family=Kalnia+Glaze:wght@100..700&family=Outfit:wght@100..900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap')",
  loginContainer: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    margin: 0,
  },
  loginCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    position: 'relative',
  },
  loginHeading: {
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #000',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    fontSize: '1rem',
    color: '#333',
  },
  label: {
    position: 'absolute',
    top: '0.75rem',
    left: '0.75rem',
    background: 'white',
    padding: '0 0.25rem',
    fontSize: '0.75rem',
    color: 'orange',
    transition: '0.2s ease all',
    pointerEvents: 'none',
  },
  labelFocused: {
    top: '-0.5rem',
    left: '0.75rem',
    fontSize: '0.75rem',
    color: 'orange',
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgotPasswordLink: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '0.875rem',
    marginLeft: '0.5rem',
    fontFamily: "'Prompt', sans-serif",
  },
  keyIcon: {
    fontSize: '1.125rem',
    marginRight: '0.5rem',
  },
  loginButton: {
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'orange',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  signupLink: {
    textAlign: 'right',
    marginTop: '1rem',
  },
  signupLinkAnchor: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '0.875rem',
    fontFamily: "'Prompt', sans-serif",
  },
  signupLinkAnchorHover: {
    textDecoration: 'underline',
  },
};

const Login = () => {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={styles.loginHeading}>LOGIN</div>
        <form style={styles.loginForm}>
          <div style={styles.formGroup}>
            <input
              type="text"
              id="email"
              required
              placeholder="Enter Email"
              style={styles.input}
            />
            {/* <label htmlFor="email" style={styles.label}>
              Email ID
            </label> */}
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter Password"
              style={styles.input}
            />
            {/* <label htmlFor="password" style={styles.label}>
              Password
            </label> */}
          </div>
          <div style={styles.forgotPassword}>
            <a href="/forgot-password" style={styles.forgotPasswordLink}>
              <i className="fa-solid fa-key" style={styles.keyIcon}></i> Forgot
              Password?
            </a>
          </div>
          <button type="submit" style={styles.loginButton}>
            SIGN-IN
          </button>
          <div style={styles.signupLink}>
            <Link to="/register" style={styles.signupLinkAnchor}>
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
