import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FooterLabel, Header, LoginForm, LoginPageWrapper, LogoContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@empresa.com");
  const [password, setPassword] = useState("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // signIn();
    navigate("/devices");
  };

  return (
    <LoginPageWrapper>
      <Header>
        <LogoContainer>
          <img src={logo} alt="Vanguard" />
        </LogoContainer>
        <h3>Entrar no painel</h3>
        <p>Gerencie seu parque remoto</p>
      </Header>

      <Card style={{ width: "90vw", maxWidth: "400px" }}>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            id="email"
            title="E-mail"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            type="password"
            title="Senha"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button buttonType="primary" type="submit" style={{padding: "12px 0", marginTop: "12px"}}>Entrar</Button>
        </LoginForm>
      </Card>
      <FooterLabel>Desenvolvido por — Vanguard Solutions.</FooterLabel>
    </LoginPageWrapper>
  );
}

export default LoginPage;
