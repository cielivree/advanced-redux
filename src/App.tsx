import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsersAll } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import './App.css'
import PostContainer2 from './components/PostContainer2';

function App() {
const dispatch = useAppDispatch()
const { count, users, isLoading, error } = useAppSelector(state => state.userReducer)
const { increment } = userSlice.actions

//  useEffect(() => {
//    dispatch(fetchUsersAll())
//  }, []) 
 
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() =>  dispatch(increment(1))}>Click me</button>
      <hr />
      {/*isLoading && <h1>Loading...</h1>*/}
      {/*error && <h1>{error}</h1>*/}
      {/*JSON.stringify(users, null, 2)*/}
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
          <button>Add new post</button>
      </div>
      <div style={{ display: "flex" }}>
        <PostContainer/>
        <PostContainer2/>
      </div>
     
    </div>
  );
}

export default App;
