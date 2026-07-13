import styled from "styled-components";

export const DefaultLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background.tertiary};

  & > main{
    // padding: 32px;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

`