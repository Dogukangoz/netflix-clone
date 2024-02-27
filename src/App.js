import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log('user is logged out');
      }
    });
    return unSubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
