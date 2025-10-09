import React, { useEffect } from 'react';
// import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch()
  const { count, users, isLoading, error } = useAppSelector(state => state.userReducer)
  const { increment } = userSlice.actions

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>Click me</button>
      <hr />
      {users.map(user => (
        <div>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
