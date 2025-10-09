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

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>Click me</button>
      <hr />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
