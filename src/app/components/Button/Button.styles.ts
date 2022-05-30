import styled, { keyframes } from "styled-components";

const THEME = {
  primary: {
    bg: "#9035e0",
    color: "#ffffff",
  },
  secondary: {
    bg: "#63db3e",
    color: "#ffffff",
  },
};

export const Wrapper = styled.button<{
  variant: "primary" | "secondary";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${p => THEME[p.variant].bg};
  color: ${p => THEME[p.variant].color};
  border-radius: 4px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:enabled {
    transition: 0.3s ease-in-out;
  }

  &:enabled:hover {
    filter: opacity(0.85);
    transition: 0.3s ease-in-out;
  }

  &:disabled {
    cursor: default;
    opacity: 0.85;
  }
`;

const Spinner = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 16px;
  height: 16px;
  border: 4px solid #ffffff;
  border-top: 4px solid #9035e0;
  margin-right: 5px;
  border-radius: 50%;
  animation: ${Spinner} 1.5s linear infinite;
`;
