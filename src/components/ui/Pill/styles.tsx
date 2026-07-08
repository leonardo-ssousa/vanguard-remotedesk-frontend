import styled from "styled-components";

export const PillWrapper = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.font.secondary};
  padding: 2px 10px;
  border-radius: 99px;
  border: 1px solid ${(props) => props.theme.bw[300]};
  background-color: ${(props) => props.theme.background.secondary};
`;
