import React from "react";
import { ScParagraph } from "./styled";

export const Heading = ({ children, size, capitalize, color, x, y }) => {
  return (
    <ScParagraph size={size} capitalize={capitalize} color={color} x={x} y={y}>
      {children}
    </ScParagraph>
  );
};
