import styled from "styled-components";

export const ScLayout = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  height: "100%";
  gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
  justify-content: ${({ direction }) =>
    direction === "row" ? "center" : "flex-start"};
  padding-top: ${({ pt }) => (pt ? `${pt}px` : "30vh")};
  align-items: center;
`;
