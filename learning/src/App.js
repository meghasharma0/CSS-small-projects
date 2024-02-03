import { useContext } from 'react';
import './App.css';
import Counter from './function/Counter';
import { MyContext } from './function/context/useContext';

function App() {

  const counterState = useContext(MyContext);

  return (
    <>
    <h1>Counter : {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
