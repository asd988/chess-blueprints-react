import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { CreateGame } from './pages/CreateGame';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <CreateGame/> }/>

        <Route path='*' element={<p>404</p>}/>
      </Routes>
    </div>
  );
}

export default App;
