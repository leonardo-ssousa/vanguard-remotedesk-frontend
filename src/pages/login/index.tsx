import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FooterLabel, Header, LoginForm, LoginPageWrapper, LogoContainer, ErrorLabel } from "./styles";
import logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../contexts/AuthContext";
import type { ApiErrorResponse } from "../../@types/api";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("usuario@empresa.com");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState<string>("");
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      setError("")
      await signIn(email, password);
      navigate("/devices")
    } catch (error) {
      const apiError = error as ApiErrorResponse
      setError(apiError?.message || "")
    }
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
          {
            error &&
            <ErrorLabel>{error}</ErrorLabel>
          }
          <Button buttonType="primary" type="submit" style={{padding: "12px 0", marginTop: "12px"}}>Entrar</Button>
        </LoginForm>
      </Card>
      <FooterLabel>Desenvolvido por — Vanguard Solutions.</FooterLabel>
    </LoginPageWrapper>
  );
}

export default LoginPage;
