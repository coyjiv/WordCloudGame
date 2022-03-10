import React from "react";
import { ScButton } from "./styled";

export const Button = ({ name, onClick, disabled }) => {
  return (
    <ScButton disabled={disabled} onClick={() => onClick()}>
      {name}
    </ScButton>
  );
};
