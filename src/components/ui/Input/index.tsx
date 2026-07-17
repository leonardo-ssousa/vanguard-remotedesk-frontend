import type { InputHTMLAttributes } from "react";
import { InputContainer, InputHeader, InputWrapper } from "./styles";
import type { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
}

export const Input = ({ title, StartIcon, EndIcon, ...rest }: InputProps) => {
  return (
    <InputWrapper>
      {title && <InputHeader>{title}</InputHeader>}
      <InputContainer>
        {StartIcon && <StartIcon />}
        <input {...rest} />
        {EndIcon && <EndIcon />}
      </InputContainer>
    </InputWrapper>
  );
};
