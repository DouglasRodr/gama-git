import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as B from "./Button.styles";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string | React.ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

export default function Button({ label, loading, ref, ...props }: ButtonProps) {
  return (
    <B.Wrapper
      {...props}
      disabled={loading || props.disabled}
      variant={props.variant || 'primary'}
    >
      {loading && <B.Loading />}
      {label}
    </B.Wrapper>
  );
}
