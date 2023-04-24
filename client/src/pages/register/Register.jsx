import './register.css';

export default function Register () {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">LogoSocial</h3>
          <spa className="login-desc">
            Connect with friends and the world around you on LogoSocial.
          </spa>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder='Username' type="text" className="login-input" />
            <input placeholder='Email' type="email" className="login-input" />
            <input placeholder='Password' type="password" className="login-input" />
            <input placeholder='Confirm Password' type="password" className="login-input" />
            <button className="login-button">Sign Up</button>
            <button className="login-register-button">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
