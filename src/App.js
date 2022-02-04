import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [value, setValue] = useState("");
  let [result, setResult] = useState(null);
  function handleChange(e){
    setValue(e.target.value);
  }

  function handleSumbit(e){
    e.preventDefault();
    let newResult = 0
    if(value%64 === 0){
      newResult = Math.floor(value/64);
    } else {
      newResult = Math.floor(value/64) +1;
    }
    setResult(newResult); 
  }

  return (
    <div className='form'>
      <div className='form-content'>
        <form>
          <input type="number" placeholder="Your qualification position" value={value} onChange={handleChange}/>
          <button onClick={handleSumbit}>Submit</button>
          {result !== null && (
            <div>Your division is:{result}</div>
          )}
        </form>
        
      </div>
    </div>
    
  );
}

export default App;
