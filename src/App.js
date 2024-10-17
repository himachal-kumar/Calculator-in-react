import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString()); // Use eval carefully in real apps
      } catch (error) {
        setInput("Error");
      }
    } else if (value === 'AC') {
      setInput("");
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} placeholder="0" readOnly />
        <div>
          <button className="button operator" onClick={() => handleClick('AC')}>AC</button>
          <button className="button operator" onClick={() => handleClick('DEL')}>DEL</button>
          <button className="button operator" onClick={() => handleClick('%')}>%</button>
          <button className="button operator" onClick={() => handleClick('/')}>/</button>
        </div>
        <div>
          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button operator" onClick={() => handleClick('*')}>*</button>
        </div>
        <div>
          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button operator" onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button operator" onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button className="button" onClick={() => handleClick('00')}>00</button>
          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={() => handleClick('.')}>.</button>
          <button className="button equalBtn" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
