import { Button } from "./components/Button";
import { Global } from "./styles/Global";
import React, { useState } from "react";
import { ButtonsBox } from "./styles/ButtonsBox";
import { CalculadorContainer } from "./styles/CalculadorContainer";
import { ButtonsContainer } from "./styles/ButtonsContainer";
import { Visor } from "./components/Visor";

const App = () => {
  const [visor, setVisor] = useState([]);
  const operators = ["+", "-", "=", ".", "x", "/"];

  const handleCalculator = (value) => {
    if (operators.includes(value)) {
      if (operators.includes(visor[visor.length - 1]) || visor.includes(value))
        return;
      setVisor((result) => (result += value));
    } else {
      setVisor((result) => (result += value));
    }
  };

  const handleClear = () => {
    setVisor((result) => (result = ""));
  };

  const handleMath = (value) => {
    switch (operators.includes(value)) {
      case "+":
        console.log(setVisor((value) => Number(value + value)));
        break;
      case "-":
        console.log(setVisor((value) => Number(value - value)));
        break;
      case "*":
        console.log(setVisor((value) => Number(value * value)));
        break;
      case "/":
        console.log(setVisor((value) => Number(value / value)));
        break;

        default:
          console.log('deu errado');
    }
  };
  return (
    <React.Fragment>
      <Global />
      <ButtonsBox>
        <h1></h1>
        <CalculadorContainer>
          <Visor value={visor} />
          <ButtonsContainer>
            <Button action={handleCalculator} value={7} />
            <Button action={handleCalculator} value={8} />
            <Button action={handleCalculator} value={9} />
            <Button action={handleCalculator} value={"x"} />
            <Button action={handleCalculator} value={4} />
            <Button action={handleCalculator} value={5} />
            <Button action={handleCalculator} value={6} />
            <Button action={handleCalculator} value={"-"} />
            <Button action={handleCalculator} value={1} />
            <Button action={handleCalculator} value={2} />
            <Button action={handleCalculator} value={3} />
            <Button action={handleCalculator} value={"+"} />
            <Button action={handleClear} value={"C"} />
            <Button action={handleCalculator} value={0} />
            <Button action={handleCalculator} value={"."} />
            <Button action={handleMath} value={"="} />
          </ButtonsContainer>
        </CalculadorContainer>
      </ButtonsBox>
    </React.Fragment>
  );
};

export default App;
