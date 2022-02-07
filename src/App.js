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

  function handleFetchProxy(e){
    // var myHeaders = new Headers();

    // var myInit = { method: 'GET',
               // headers: myHeaders,
               // mode: 'no-cors',
               // cache: 'default' };

    e.preventDefault();
    let url = "/test";
    console.log("ZACK");
    fetch(url)
    .then(function(result){
      return result.json();
    })
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    })
}

  function handleFetchNoProxy(e){
    e.preventDefault();
    let url = "https://tm-stats-bknd.herokuapp.com/test";
    console.log("ZACK");
    fetch(url)
    .then(function(result){
      return result.json();
    })
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  function handleFetchLocalNoProxy(e){
    e.preventDefault();
    let url = "http://localhost:8080/test";
    console.log("ZACK");
    fetch(url)
    .then(function(result){
      return result.json();
    })
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    })
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
        <button type="button" onClick={handleFetchNoProxy}>fetch</button>
      </div>
    </div>
    
  );
}

export default App;
