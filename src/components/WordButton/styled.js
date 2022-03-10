import styled from "styled-components";
import { lightTheme } from "../../constants/colors";

export const ScWord = styled.p`
  font-family: "Ramabhadra", sans-serif;
  color: ${({ isSelected }) =>
    isSelected ? lightTheme.grey : lightTheme.black};
  font-size: ${({ size }) => (size ? `${size}px` : "19px")};
  padding: 10px;
  cursor: pointer;
  user-select: none;
  margin-top: ${({ y }) => (y ? `${y}px` : 0)};
  margin-left: ${({ x }) => (x ? `${x}px` : 0)};
`;
