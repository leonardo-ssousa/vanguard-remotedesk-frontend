import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${(props) => props.theme.background.secondary};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h3 {
    margin-top: 16px;
  }

  & > p {
    color: ${(props) => props.theme.font.secondary};
    font-weight: 100;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FooterLabel = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.font.secondary};
  font-weight: 100;
`;
