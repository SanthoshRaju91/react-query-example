import React from 'react';

import Toast from './components/Toast/Toast';
import { PostContextProvider } from './context/post';
import { UserContextProvider } from './context/user';
import Landing from './container/Landing'
import './App.css'

function App() {
  return (
    <PostContextProvider>
      <UserContextProvider>
        <Landing />
        <Toast />
      </UserContextProvider>      
    </PostContextProvider>
  );
}

export default App;
