import styled from "styled-components";

export const ButtonWrapper = styled.div<{
  $typeColors: {
    textColor: string;
    background: string;
    borderColor: string;
    hoverBackground?: string;
  };
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  
  & > button{
    width: 100%;
    background: none;
    border: none;
    color: currentColor;
    cursor: pointer;
  }
  
  border-radius: 6px;
  color: ${props => props.$typeColors.textColor};
  background-color: ${props => props.$typeColors.background};
  border: 1px solid ${props => props.$typeColors.borderColor};
  cursor: pointer;

  &:hover{
    background-color: ${props => props.$typeColors.hoverBackground};
  }
`;
