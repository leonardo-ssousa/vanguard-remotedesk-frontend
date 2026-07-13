import styled from "styled-components";

export const StyledButton = styled.button<{
  $typeColors: {
    textColor: string;
    background: string;
    border: string;
    hoverBackground?: string;
  };
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  color: ${(props) => props.$typeColors.textColor};
  white-space: nowrap;
  background: ${(props) => props.$typeColors.background};
  border: ${(props) => props.$typeColors.border};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$typeColors.hoverBackground};
  }
`;
