import React from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

export const Button = ({ style, value, action }) => {
  

  return <ButtonStyles style={style} onClick={() => action(value)}>{value}</ButtonStyles>;
};
