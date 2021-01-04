import {useState } from 'react';
import './App.css';

function App() {
  //
  let[counter,setCounter] = useState(0);
  const[like, setLike] = useState(true);
  
  const incrementer = () => {
    setLike((prev) => !prev);
    if(like===true && counter <=0 ){
      setCounter(++counter);
    }
    else{
      setCounter((prev)=>prev-1)
    }
    console.log(counter, like);
  }
  
  return (
    <div className="App">
      <button onClick={incrementer}>Like {counter}</button>
 
    </div>
  );
}


export default App;
