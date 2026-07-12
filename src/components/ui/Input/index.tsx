import type { InputHTMLAttributes } from "react";
import { InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export const Input = ({ title, ...rest }: InputProps) => {
  return (
    <InputWrapper>
    {
      title &&
      <h4>{title}</h4>
    }
    <div className="input-container">
      <input {...rest}/>
    </div>
    </InputWrapper>
  )
}