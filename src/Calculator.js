import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { useSpring, animated } from '@react-spring/web';
import {
  CalculatorWrapper,
  Display,
  ButtonGrid,
  Button,
  Input,
  Result
} from './styles';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const displayAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <CalculatorWrapper>
      <animated.div style={displayAnimation}>
        <Display>
          <Input>{input}</Input>
          <Result>{result}</Result>
        </Display>
      </animated.div>
      <ButtonGrid>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleBackspace}>←</Button>
        <Button onClick={() => handleClick('(')}>(</Button>
        <Button onClick={() => handleClick(')')}>)</Button>
        <Button onClick={() => handleClick('7')}>7</Button>
        <Button onClick={() => handleClick('8')}>8</Button>
        <Button onClick={() => handleClick('9')}>9</Button>
        <Button onClick={() => handleClick('/')}>/</Button>
        <Button onClick={() => handleClick('4')}>4</Button>
        <Button onClick={() => handleClick('5')}>5</Button>
        <Button onClick={() => handleClick('6')}>6</Button>
        <Button onClick={() => handleClick('*')}>*</Button>
        <Button onClick={() => handleClick('1')}>1</Button>
        <Button onClick={() => handleClick('2')}>2</Button>
        <Button onClick={() => handleClick('3')}>3</Button>
        <Button onClick={() => handleClick('-')}>-</Button>
        <Button onClick={() => handleClick('0')}>0</Button>
        <Button onClick={() => handleClick('.')}>.</Button>
        <Button onClick={handleEvaluate}>=</Button>
        <Button onClick={() => handleClick('+')}>+</Button>
        <Button onClick={() => handleClick('sin(')}>sin</Button>
        <Button onClick={() => handleClick('cos(')}>cos</Button>
        <Button onClick={() => handleClick('tan(')}>tan</Button>
        <Button onClick={() => handleClick('log(')}>log</Button>
        <Button onClick={() => handleClick('sqrt(')}>√</Button>
        <Button onClick={() => handleClick('^')}>^</Button>
        <Button onClick={() => handleClick('exp(')}>exp</Button>
        <Button onClick={() => handleClick('ln(')}>ln</Button>
        <Button onClick={() => handleClick('asin(')}>asin</Button>
        <Button onClick={() => handleClick('acos(')}>acos</Button>
        <Button onClick={() => handleClick('atan(')}>atan</Button>
        <Button onClick={() => handleClick('abs(')}>abs</Button>
      </ButtonGrid>
    </CalculatorWrapper>
  );
};

export default Calculator;
