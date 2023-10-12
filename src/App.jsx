import { Button } from "./components/Button";
import { Global } from "./styles/Global";
import React, { useState } from "react";
import { ButtonsBox } from "./styles/ButtonsBox";
import { CalculadorContainer } from "./styles/CalculadorContainer";
import { ButtonsContainer } from "./styles/ButtonsContainer";
import { Visor } from "./components/Visor";
import { evaluate } from "mathjs";

const App = () => {
  const [visor, setVisor] = useState("");

  const isOperator = (value) => {
    if (isNaN(value) && value != "." && value != "=") {
      if(visor.includes(visor.length)) return
      setVisor((result) => (result += value));
      console.log("operador");
    } else {
      setVisor((result) => (result += value));
      console.log("numero");
    }
  };

  const handleClear = () => {
    setVisor((result) => (result = ""));
  };

  const handleMath = () => {
    if (visor) {
      setVisor(evaluate(visor));
    } 
    else {
      alert('Digite um numero')
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
            <Button action={isOperator} value={7} />
            <Button action={isOperator} value={8} />
            <Button action={isOperator} value={9} />
            <Button action={isOperator} value={"*"} />
            <Button action={isOperator} value={4} />
            <Button action={isOperator} value={5} />
            <Button action={isOperator} value={6} />
            <Button action={isOperator} value={"-"} />
            <Button action={isOperator} value={1} />
            <Button action={isOperator} value={2} />
            <Button action={isOperator} value={3} />
            <Button action={isOperator} value={"+"} />
            <Button action={handleClear} value={"C"} />
            <Button action={isOperator} value={0} />
            <Button action={isOperator} value={"."} />
            <Button action={isOperator} value={"/"} />
            <Button style={{width: '100%'}} action={handleMath} value={"="} />
          </ButtonsContainer>
        </CalculadorContainer>
      </ButtonsBox>
    </React.Fragment>
  );
};

export default App;
