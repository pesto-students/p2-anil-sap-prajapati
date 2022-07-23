import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import "./App.css"

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = ()=> {
    dispatch({ type : "INC"})
  };
  const Decrement = ()=> {
    dispatch({ type : "DEC"})
  };

  

  return (

      <div >
        <h1> You hava walked {counter} Today</h1>
        <div className='button'>
       <button onClick={Increment}>Add a Step</button>
        <button onClick={Decrement}>Reset Steps</button>
        </div>
      </div>
    
  );
}

export default App;
