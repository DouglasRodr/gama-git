import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 32px;
`;

export const RepositoryCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;
