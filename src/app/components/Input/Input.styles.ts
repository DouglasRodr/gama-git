import styled from "styled-components";

export const Wrapper = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  border: none;
  color: #352e3a;

  &:disabled {
    cursor: default;
    opacity: 0.9;
  }

  &::placeholder {
    color: #a6a1a9;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;
