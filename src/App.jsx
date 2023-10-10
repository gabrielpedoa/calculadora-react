import { Button } from "./components/Button";
import { Global } from "./styles/Global";
import React, { useState } from "react";
import { ButtonsBox } from "./styles/ButtonsBox";
import { CalculadorContainer } from "./styles/CalculadorContainer";
import { ButtonsContainer } from "./styles/ButtonsContainer";
import { Visor } from "./components/Visor";

const App = () => {
  const [result, setResult] = useState("");

  const operators = ["+", "-", "=", "C", ",", "x"];
  const handleCalculator = (value) => {
     if(operators.includes(value)){
        if(result[length -1]){}
     }
  };

  return (
    <React.Fragment>
      <Global />
      <ButtonsBox>
        <h1>Calculadora Gabriel</h1>
        <CalculadorContainer>
          <Visor value={result} />
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
            <Button action={handleCalculator} value={"C"} />
            <Button action={handleCalculator} value={0} />
            <Button action={handleCalculator} value={","} />
            <Button action={handleCalculator} value={"="} />
          </ButtonsContainer>
        </CalculadorContainer>
      </ButtonsBox>
    </React.Fragment>
  );
};

export default App;
