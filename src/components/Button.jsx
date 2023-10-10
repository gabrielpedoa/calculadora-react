import React from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

export const Button = ({ value, action }) => {
  

  return <ButtonStyles onClick={() => action(value)}>{value}</ButtonStyles>;
};
