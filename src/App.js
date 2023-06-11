import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {Navigate, Route , Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<Navigate to="/signup"/>}/>
      </Routes>
    </div>
  );
}

export default App;
