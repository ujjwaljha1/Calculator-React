import React from 'react';
import Calculator from './Calculator';
import { GlobalStyle, Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Calculator />
      </Container>
    </>
  );
}

export default App;
