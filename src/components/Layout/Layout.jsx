import React from "react";
import { ScLayout } from "./styled";

export const Layout = ({ children, direction, gap, pt }) => {
  return (
    <ScLayout direction={direction} gap={gap} pt={pt}>
      {children}
    </ScLayout>
  );
};
