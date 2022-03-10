import styled from "styled-components";
import { lightTheme } from "../../constants/colors";

export const ScContainer = styled.div`
  height: 400px;
  width: 600px;
  border: 2px solid ${lightTheme.grey};
  padding-top: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
`;
