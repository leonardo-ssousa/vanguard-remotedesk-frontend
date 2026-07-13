import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { StyledButton } from "./style";
import { useTheme } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  StartIcon?: IconType;
  EndIcon?: IconType;
  buttonType?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  StartIcon,
  EndIcon,
  buttonType,
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  const types = {
    primary: {
      textColor: theme.font.white,
      background: theme.colors.primary,
      border: "1px solid" + theme.colors.primary,
      hoverBackground: theme.colors.primary + "ee",
    },
    secondary: {
      textColor: theme.font.primary,
      background: theme.background.primary,
      border: "1px solid" + theme.bw[200],
      hoverBackground: theme.background.secondary,
    },
    tertiary: {
      textColor: theme.font.secondary,
      background: "none",
      border: "none",
      hoverBackground: theme.background.secondary,
    },
  };

  return (
      <StyledButton $typeColors={buttonType ? types[buttonType] : types.secondary} {...rest}>
        {StartIcon && <StartIcon />} {children} {EndIcon && <EndIcon />}
      </StyledButton>
  );
};
