import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 32px;
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
  width: 22px;
  height: 22px;
  border: 4px solid #ffffff;
  border-top: 4px solid transparent;
  margin-right: 16px;
  border-radius: 50%;
  animation: ${Spinner} 1.5s linear infinite;
`;

export const Label = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #fff;
`;
