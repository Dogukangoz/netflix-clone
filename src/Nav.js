import React from 'react';
import { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  console.log(show);

  return (
    <div className={`nav  ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png'
          alt='Nteflix Logo'
        />
        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Netflix Avatar'
        />
        {/* <h1>Nav</h1> */}
      </div>
    </div>
  );
}

export default Nav;
