import React from 'react';
import SocialMedia from './components/SocialMedia';

const socialMedia = [
 {
  imageUrl: './img/linkedin.png',
  href: 'https://www.linkedin.com/in/danyil-khromenko-119116249/',
  alt: 'Linkedin',
 },
 {
  imageUrl: './img/github.png',
  href: 'https://github.com/KhromenkoDaniel',
  alt: 'Github',
 },
 {
  imageUrl: './img/telegram.png',
  href: 'https://t.me/KhromenkoDaniel',
  alt: 'Telegram',
 },
 {
  imageUrl: './img/instagram.png',
  href: 'https://www.instagram.com/daniel.khr18/',
  alt: 'Instagram',
 },
];

const numberGenerator = (numberOption) => {
 return Math.round(Math.random() * numberOption);
};

function App() {
 const [numberOption, setNumberOption] = React.useState(10);

 const addNum = () => {
  setNumbers([...numbers, numberGenerator(numberOption)]);
 };

 const [numbers, setNumbers] = React.useState([
  'Make decision which diapason ',
 ]);

 const choose = (num) => {
  setNumbers([...numbers, `You choose 1-${num}`]);
 };
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
         choose(10);
        }}
       >
        1-10
       </button>
      </div>
      <div className='btnFrame hundred'>
       <button
        onClick={() => {
         setNumberOption(100);
         choose(100);
        }}
       >
        1-100
       </button>
      </div>
      <div className='btnFrame thousand'>
       <button
        onClick={() => {
         setNumberOption(1000);
         choose(1000);
        }}
       >
        1-1000
       </button>
      </div>
      <div className='btnFrame'>
       <button onClick={() => addNum(numberOption)}>Generate</button>
      </div>
     </div>
     <div className='socialMedia '>
      <h5>Me in Social Media:</h5>
      <div className='media'>
       {socialMedia.map((obj, index) => (
        <SocialMedia
         key={index}
         imageUrl={obj.imageUrl}
         href={obj.href}
         alt={obj.alt}
        />
       ))}
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
