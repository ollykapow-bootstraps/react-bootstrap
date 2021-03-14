import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  color: ${props => (props.primary ? 'cornflowerblue' : 'black')};
  border:  2px solid  ${props => (props.primary ? 'cornflowerblue' : 'black')};
  margin: 0;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover,
  &:active {
    background-color: ${props => (props.primary ? 'cornflowerblue' : 'black')};
    color: white;
  }
`;

function App () {
  return (
    <>
      <h1>
        Hello, World!
      </h1>
      <Button onClick={() => alert('Clicked.')}>
        Click me!
      </Button>
      <Button primary onClick={() => alert('Clicked.')}>
        Click me!
      </Button>
    </>
  );
}

export default App;
