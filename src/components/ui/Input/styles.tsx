import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > h4{
    font-weight: 500;
    font-size: .875rem;
  }

  & > .input-container {
    border-radius: 8px;
    border: 1px solid ${props => props.theme.bw[200]};
    padding: 8px 12px;

    & > input {
      border: none;
      outline: none;
      width: 100%;
    }
  }
`;
