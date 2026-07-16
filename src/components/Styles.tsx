import styled from "styled-components";

export const PageHeader = styled.h1`
  font-size: 1.375rem;
  font-weight: 500;
  padding: 2px 0;
`;

export const PageDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 200;
  color: ${(props) => props.theme.font.secondary};
`;
