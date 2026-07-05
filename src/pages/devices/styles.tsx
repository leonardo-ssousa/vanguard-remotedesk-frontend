import styled from "styled-components";

export const DevicesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;

  & > header {
    & > h2 {
      font-size: 1.375rem;
      font-weight: 500;
      padding: 2px 0;
    }

    & > p {
      font-size: 0.875rem;
      font-weight: 200;
      color: ${(props) => props.theme.font.secondary};
    }
  }

  & > main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
`;
