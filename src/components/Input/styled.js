import styled from "styled-components";
import { lightTheme } from "../../constants/colors";

export const ScInput = styled.input`
  height: 40px;
  width: 20vw;
  border: 2px solid ${lightTheme.grey};
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 30px;
  color: ${lightTheme.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &&::placeholder {
    font-size: 19px;
    color: ${lightTheme.grey};
  }
`;
