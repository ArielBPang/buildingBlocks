import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation';
import MainContent from './components/main/MainContent'

function App() {
  return (
    <div className="App" >
      <Header />
      <div className='Main'>
      <Navigation />
      <MainContent />
      </div>
     <h1>yo sup loser</h1>
    </div>
  );
}

export default App;
