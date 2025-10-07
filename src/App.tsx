import React from 'react';
import './App.css';
import { useAppSelector } from './hooks/redux';

function App() {
  const {} = useAppSelector(state => state)

  return (
    <div className="App">
      IT
    </div>
  );
}

export default App;
