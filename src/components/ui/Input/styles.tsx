import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputHeader = styled.h4`
  font-weight: 500;
  font-size: 0.875rem;
`;

export const InputContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.bw[200]};
  padding: 8px 12px;

  &:focus-within{
    border: 1px solid ${(props) => props.theme.border.heavy};
    box-shadow: ${props => props.theme.shadows.secondBorder};
  }

  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;
