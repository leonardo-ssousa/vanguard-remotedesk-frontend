import styled from "styled-components";

export const RenameModalWrapper = styled.div`
  width: calc(100vw - 88px) ;
  max-width: 470px;


  & > header > h4 {
    font-size: .875rem;
  }

  & > header > p {
    font-size: .875rem;
    font-weight: 400;
    color: ${props => props.theme.font.secondary}
  }

  & > main {
    padding: 16px 0;
  }

  & > footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px; 
  }
`