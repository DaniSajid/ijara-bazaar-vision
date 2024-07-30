import  { useState } from 'react';
import './loginSignup.css';
import 'boxicons/css/boxicons.min.css';

const LoginSignupForm = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false,
    confirmPassword: false,
  });

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  return (
    <div className="container">
    <section className={`container7 forms ${showSignup ? 'show-signup' : ''}`}>
      <div className="form login">
        <div className="form-content">
          <header className='header-css'>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type={showPassword.login ? 'text' : 'password'}
                placeholder="Password"
                className="password"
              />
              <i
                className={`bx ${showPassword.login ? 'bx-show' : 'bx-hide'} eye-icon`}
                onClick={() => togglePasswordVisibility('login')}
              ></i>
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>Don't have an account? <a href="#" className="link signup-link" onClick={toggleForm}>Signup</a></span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className='bx bxl-facebook facebook-icon'></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="/google.png" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>

      <div className="form signup">
        <div className="form-content">
          <header className='header-css'>Signup</header>
          <form action="#">
            <div className="field input-field">
              <input type="text" placeholder="Your Name" className="input" />
            </div>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type={showPassword.signup ? 'text' : 'password'}
                placeholder="Create password"
                className="password"
              />
              <i
                className={`bx ${showPassword.signup ? 'bx-show' : 'bx-hide'} eye-icon`}
                onClick={() => togglePasswordVisibility('signup')}
              ></i>
            </div>
            <div className="field input-field">
              <input
                type={showPassword.confirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className="password"
              />
              <i
                className={`bx ${showPassword.confirmPassword ? 'bx-show' : 'bx-hide'} eye-icon`}
                onClick={() => togglePasswordVisibility('confirmPassword')}
              ></i>
            </div>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>Already have an account? <a href="#" className="link login-link" onClick={toggleForm}>Login</a></span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className='bx bxl-facebook facebook-icon'></i>
            <span>Signup with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="google.png" alt="" className="google-img" />
            <span>Signup with Google</span>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LoginSignupForm;
