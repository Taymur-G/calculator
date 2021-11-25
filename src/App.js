import { useState, useEffect } from "react";
import './App.css';

const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInputState] = useState("0");
const [operator, setOperatorState] = useState(null);
const [total, setTotalState] = useState(false);

const inputNum = (e) => {

}

const operatorType = (e) => {

}

const equals = (e) => {

}

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-grey" onClick={reset}>AC</div>
        <div className="btn light-grey" onClick={percent}>%</div>
        <div className="btn light-grey" onClick={minusPlus}>+/-</div>
        <div className="btn orange" onClick={operatorType}>/</div>
        <div className="btn" onClick={inputNum}>7</div>
        <div className="btn" onClick={inputNum}>8</div>
        <div className="btn" onClick={inputNum}>9</div>
        <div className="btn orange" onClick={operatorType}>X</div>
        <div className="btn" onClick={inputNum}>4</div>
        <div className="btn" onClick={inputNum}>5</div>
        <div className="btn" onClick={inputNum}>6</div>
        <div className="btn orange" onClick={operatorType}>+</div>
        <div className="btn" onClick={inputNum}>1</div>
        <div className="btn" onClick={inputNum}>2</div>
        <div className="btn" onClick={inputNum}>3</div>
        <div className="btn orange" onClick={operatorType}>-</div>
        <div className="btn" onClick={inputNum}>0</div>
        <div className="btn" onClick={inputNum}>.</div>
        <div className="btn" onClick={equals}>=</div>
      </div>
    </div>
  )
}

export default App;
