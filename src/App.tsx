import React from 'react';
import './App.css';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

function App() {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector(state => state.userReducer)
  const { increment } = userSlice.actions

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>Click me</button>
    </div>
  );
}

export default App;
