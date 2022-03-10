import styled from "styled-components";
import { lightTheme } from "../../constants/colors";
export const ScButton = styled.button`
  height: 40px;
  min-width: 10vw;
  font-family: "Ramabhadra", sans-serif;
  color: ${({ disabled }) => (disabled ? lightTheme.grey : lightTheme.primary)};
  display: flex;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ disabled }) => (disabled ? lightTheme.grey : lightTheme.primary)};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${lightTheme.white};
`;
