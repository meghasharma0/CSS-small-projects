import { useState } from 'react';
import './App.css';
import UseEffect from './function/UseEffect';

function App() {

  const [state, setState] = useState(true);

  return (
    <>
      <button onClick={() => setState(!state)}>Click Me</button>
      <div>{state === true ? <UseEffect /> : ""}</div>
    </>
  );
}

export default App;
