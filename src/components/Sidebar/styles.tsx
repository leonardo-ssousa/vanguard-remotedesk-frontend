import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 24px;
  border-right: 1px solid ${(props) => props.theme.bw[200]};

  & > header {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;

    & > .icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      border-radius: 6px;
      overflow: hidden;
    }

    & > .brand {
      display: flex;
      flex-direction: column;

      & > p {
        font-size: 0.75rem;
        font-weight: 400;
      }

      & > h1 {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  & > .sidebar-buttons {
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: 100%;
  }

   > footer {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const SidebarButtonWrapper = styled.button<{$isActive: boolean}>`
  display: flex;
  padding: 8px 16px;
  gap: 12px;
  cursor: pointer;

  color: ${props => props.$isActive ?  props.theme.font.primary : props.theme.font.secondary};
  background: none;
  background-color: ${props => props.$isActive ?  props.theme.background.secondary : ""};

  border: none;
  border-radius: 4px;

  &:hover {
    color: ${props => props.theme.font.primary};
    background-color: ${props => props.theme.background.secondary};
  }

  & > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;
