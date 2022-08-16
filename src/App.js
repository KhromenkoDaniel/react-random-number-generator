import React from 'react';

function App() {
 //  let numbers = [1, 2, 3];
 const [numbers, setNumbers] = React.useState([1, 2, 3, 4]);
 const addNum = () => {
  numbers.push();
  const randNum = Math.round(Math.random() * numberOption);
  setNumbers([...numbers, randNum]);
 };

 const [numberOption, setNumberOption] = React.useState(10);
 const chode = (num) => {
  numbers.push(`You choose ${num}`);
 };
 console.log(numberOption);
 return (
  <div className='App clear'>
   <div className='wrapper d-flex '>
    <div className='d-flex flex-column'>
     <header>
      <h1>React Number Generator</h1>
      <h3>
       <b>In which I used Hook - useState() for my React study</b>
      </h3>
     </header>
     <div className='leftBlock'>
      <div className='btnFrame ten'>
       <button
        onClick={() => {
         setNumberOption(10);
         chode(10);
        }}
       >
        1-10
       </button>
      </div>
      <div className='btnFrame hundred'>
       <button
        onClick={() => {
         setNumberOption(100);
         chode(100);
        }}
       >
        1-100
       </button>
      </div>
      <div className='btnFrame thousand'>
       <button
        onClick={() => {
         setNumberOption(1000);
         chode(1000);
        }}
       >
        1-1000
       </button>
      </div>
      <div className='btnFrame'>
       <button onClick={addNum}>Generate</button>
      </div>
     </div>
    </div>
    <span className='verticalStickLeft'></span>
    <div className='numList'>
     <h3 className='mt-20 text-center'>List of numbers</h3>
     <span className='horizontalStick'></span>
     <ul>
      {numbers.map((num, index) => (
       <li key={index}>
        {/* <b> You choose {numberOption}</b> */}
        <span>{num}</span>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}

export default App;
