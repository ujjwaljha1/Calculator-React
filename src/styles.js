import styled, { createGlobalStyle } from 'styled-components';
import background from './cool-background.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top:100px;
`;

export const CalculatorWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: white;
  text-align: center;
`;

export const Display = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.div`
  min-height: 30px;
  font-size: 1.5em;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Result = styled.div`
  font-size: 1.2em;
  color: #80ff00;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const Button = styled.button`
  padding: 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.15);
  }
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.25);
  }
`;
