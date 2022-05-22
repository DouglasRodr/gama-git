import { InputHTMLAttributes } from "react";
import * as I from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <I.Wrapper {...props} type="text" placeholder={placeholder}/>
  );
}
