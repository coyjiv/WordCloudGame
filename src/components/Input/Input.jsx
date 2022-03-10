import React from "react";
import { ScInput } from "./styled";

export const Input = ({ placeholder, onChange }) => {
  return (
    <ScInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      type="text"
    />
  );
};
