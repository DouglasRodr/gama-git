import styled from "styled-components";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  min-width: 384px;
  padding: 48px 32px;
  margin: 0 8px;
  border-radius: 8px;
  background: #352e3a;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    padding: 2rem 3rem 2rem 3rem;
    min-width: 512px;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchButton = styled(Button)`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

export const Title = styled.h3`
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 1rem;
  font-size: 1.4rem;
`;
