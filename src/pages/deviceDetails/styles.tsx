import styled from "styled-components";

export const DevicesDetailsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;

  & > .backward {
    display: flex;
  }

  & > header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    & > .device-infos {
      display: flex;
      flex-direction: column;
      gap: 8px;

      & > .title {
        display: flex;
        gap: 8px;
        & > h2 {
          font-size: 1.375rem;
          font-weight: 500;
          padding: 2px 0;
        }
      }

      & > .details {
        display: flex;
        gap: 6px;
        color: ${(props) => props.theme.font.secondary};

        & > .spacer {
          padding: 0 6px;
        }
      }

      & p {
        font-size: 0.875rem;
        font-weight: 200;
        color: ${(props) => props.theme.font.secondary};
      }
    }

    & > .device-actions {
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }
  }

  & > main {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PageSectionTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CardContent = styled.div<{ $active: boolean }>`
  border: ${({ $active, theme }) =>
    $active ? "1px solid" + theme.bw[300] : "1px dashed" + theme.bw[300]};
  background: ${({ $active, theme }) =>
    $active ? theme.background.primary : ""};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.font.tertiary};

  & > .right {
    display: flex;
    gap: 18px;
    align-items: center;

    & > .session-infos {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;

      & > .title {
        font-size: 0.75rem;
        color: ${(props) => props.theme.font.secondary};
        opacity: 80%;
      }

      & > .time {
        font-size: 0.75rem;
        color: ${(props) => props.theme.font.primary};
        font-weight: 600;
      }
    }
  }
`;

export const ActiveConectionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HistoryConectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ConectionRoute = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  padding-right: 8px;

  & > .icon {
    opacity: 50%;
  }
`;

export const ConectionOrigin = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 60%;
`;
