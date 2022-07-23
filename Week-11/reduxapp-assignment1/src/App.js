import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import "./App.css"

function App() {

  const light = useSelector((state) => state.light);
  const dispatch = useDispatch();

  const flipLight = ()=> {
    dispatch({ type : "lit"})
  };


  const lightedness = light ? "lit" : "dark";

  return (

      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={flipLight}>flip</button>
      </div>
    
  );
}

export default App;
