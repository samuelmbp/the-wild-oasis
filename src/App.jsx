import React from "react";

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 500;
  background-color: lightcoral;
`;

const StyledApp = styled.div`
  background-color: beige;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Hello, world.")}>Check in</Button>
        <Button onClick={() => alert("Hello, world.")}>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
};

export default App;
