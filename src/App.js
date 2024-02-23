import { useEffect, useState } from 'react';
import './App.css';
import UseMemo from './UseMemo';

function App() {
  let [fruit,setFruit] = useState('apple'); //get //changeFunction
  let [count,setCount] = useState(0);
  let changeFruit  = () =>{
    // fruit = 'orange';
    // console.log(fruit);
    setFruit('orange');
  }
  let increase  = () => {
    setCount((prevState)  => prevState+1);
    setCount((prevState)  => prevState+1);
    setCount((prevState)  => prevState+1);
  }
  useEffect(()=>{
    console.log("call api");
  },[count]);
  return (
    <div className="App">
       <div>
      <h5>{fruit}</h5>
      <button onClick={changeFruit}>Change Fruit</button>
      </div>
      <div>
        <h1>Counter</h1>
        <h5>Count - {count}</h5>
        <button onClick={increase}>Increase</button>
      </div>
      <UseMemo/>
    </div>
  );
}

export default App;
