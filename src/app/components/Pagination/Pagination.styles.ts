import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const PageButton = styled(Button)`
  font-size: 0.8rem;
  padding: 10px;
  font-weight: 600;

  &:enabled:hover {
    transform: none;
  }

  @media only screen and (min-width: 992px) {
    &:enabled:hover {
      transform: translateY(-4px);
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 0.9rem;
    padding: 16px;
    font-weight: 800;
  }
`;
