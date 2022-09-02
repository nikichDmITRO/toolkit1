import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/redusers/UseSlise';
import { fetchUsers } from './store/redusers/ActionCreators';

function App() {


const {users,isLoading, error}=useAppSelector(state=>state.userReducer)
const dispatch=useAppDispatch()
useEffect(()=>{dispatch(fetchUsers())},[])


  return (
    <div className="App">
  {isLoading&&<h1>Идет загрузка...</h1>}
  {error&&<h1>{error}</h1>}
    {JSON.stringify(users,null,2)}
    </div>
  );
}

export default App;
