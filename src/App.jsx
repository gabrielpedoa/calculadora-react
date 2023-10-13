import { Button } from "./components/Button";
import { Global } from "./styles/Global";
import React, { useState } from "react";
import { ButtonsBox } from "./styles/ButtonsBox";
import { CalculadorContainer } from "./styles/CalculadorContainer";
import { ButtonsContainer } from "./styles/ButtonsContainer";
import { Visor } from "./components/Visor";
import { evaluate } from "mathjs";

const op = ["+", "-", "/", "*"];

const actions = {
  "+": (v1, v2) => v1 + v2,
  "-": (v1, v2) => v1 - v2,
  "/": (v1, v2) => v1 / v2,
  "*": (v1, v2) => v1 * v2,
};
const App = () => {
  const [visor, setVisor] = useState("");

  const isOperator = (value) => {
    if (isNaN(value) && value != "." && value != "=") {
      for (const i of op) {
        if (visor.includes(i)) return;
      }
      setVisor((result) => (result += value));
    } else {
      setVisor((result) => (result += value));
    }
  };

  const handleClear = () => {
    setVisor((result) => (result = ""));
  };

  const handleMath = () => {
    console.log(visor.split(""));
    const operator = visor.split("").filter((i) => isNaN(Number(i)))[0];
    const [v1, v2] = visor.split(operator);
    const act = actions[operator];
    setVisor(()=> act(Number(v1), Number(v2)));
    console.log(visor);
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
            <Button style={{ width: "100%" }} action={handleMath} value={"="} />
          </ButtonsContainer>
        </CalculadorContainer>
      </ButtonsBox>
    </React.Fragment>
  );
};

export default App;
