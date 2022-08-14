import React from 'react';
import MacroCss from 'macro-css';

function App() {
 //  let numbers = [1, 2, 3];
 const [numbers, setNumbers] = React.useState([1, 2, 3]);
 const addNum = () => {
  numbers.push();
  const randNum = Math.round(Math.random() * 10);
  setNumbers([...numbers, randNum]);
 };

 return (
  <div className='App clear'>
   <header>
    <h1> React Number Generator</h1>
    <h3>
     <b>In which I used Hook - useState() for my React study</b>
    </h3>
   </header>
   <div className='wrapper d-flex '>
    <button onClick={addNum}>Generate</button>
    <span className='verticalStickLeft'></span>
    <div className='numList'>
     <ul>
      {numbers.map((num, index) => (
       <li key={index}>{num}</li>
      ))}
     </ul>
    </div>
    <span className='verticalStickRight'></span>
   </div>
  </div>
 );
}

export default App;
