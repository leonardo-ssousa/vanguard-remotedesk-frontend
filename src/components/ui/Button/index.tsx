import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { ButtonWrapper } from "./style";
import { useTheme } from "styled-components";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  StartIcon?: IconType;
  EndIcon?: IconType;
  buttonType?: "primary" | "secondary" | "tertiary"
}


export const Button = ({children, StartIcon, EndIcon, buttonType}: ButtonProps) => {
  const theme = useTheme()

  const types = {
    primary: {
      textColor: theme.font.white,
      background: theme.colors.primary,
      borderColor: theme.colors.primary,
      hoverBackground: theme.colors.primary + "ee",
    },
    secondary: {
      textColor: theme.font.primary,
      background: theme.background.primary, 
      borderColor: theme.bw[200],      
      hoverBackground: theme.background.secondary,
    },
    tertiary: {
      textColor: theme.font.secondary,
      background: "none", 
      borderColor: "none",
      hoverBackground: theme.background.secondary,
    }
  }



  return (
    <ButtonWrapper $typeColors={buttonType ? types[buttonType] : types.secondary}>
      {StartIcon && <StartIcon />}
      <button>{children}</button>
      {EndIcon && <EndIcon />}
    </ButtonWrapper>
  )
}