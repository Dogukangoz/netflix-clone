import React, { useState } from 'react';

import './LoginScreen.css';
import SingUpScreen from './SingUpScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png'
          alt=''
        />
        <button className='loginScreen__button' onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
        {setSignIn ? (
          <SingUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='loginScreen__input'>
              <form className='loginScreen__form'>
                <input type='email' placeholder='Email Address'></input>
                <button
                  className='loginScreen__getStarted'
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
