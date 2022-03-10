import styled from "styled-components";
import { lightTheme } from "../../constants/colors";

export const ScParagraph = styled.p`
  font-family: "Ramabhadra", sans-serif;
  color: ${({ color }) => (color ? color : lightTheme.black)};
  font-size: ${({ size }) => (size ? `${size}px` : "19px")};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
  margin-top: ${({ y }) => (y ? `${y}px` : 0)};
  margin-left: ${({ x }) => (x ? `${x}px` : 0)};
  order: ${({ x }) => (x ? Math.round(Math.random() * 9) : 0)};
`;
