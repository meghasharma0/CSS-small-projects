import './App.css';
import Item from './function/ecommerce/Item';
import Cart from './function/ecommerce/Cart';
import { useContext } from 'react';
import { ItemContext } from './function/context/EcommerceContext';

function App() {

  const cntxt = useContext(ItemContext);

  return (
    <>
      <center><Item name="Apple" price="120" /></center>
      <center><Item name="Mango" price="140" /></center>
      <center><Item name="Banana" price="160" /></center>
      <center><Item name="Guava" price="60" /></center>
      <center><Item name="Grapes" price="50" /></center>
      <center><Item name="Watermelon" price="70" /></center>
      <center><Item name="Muskmelon" price="200" /></center>
      <center><Item name="Orange" price="120" /></center>
      <center><h1>Cart</h1></center>
      <center><Cart /></center>
    </>
  );
}

export default App;
