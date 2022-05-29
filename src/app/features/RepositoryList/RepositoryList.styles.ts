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

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  ul {
    display: flex;
    list-style: none;
    gap: 4px;
    li {
      &.selected {
        a {
          background-color: rgb(0, 153, 255);
          color: rgb(243, 248, 250);
          pointer-events: none;
        }
      }
      a {
        transition: 0.25s ease;
        outline: none;
        background-color: rgb(243, 248, 250);
        color: rgb(39, 64, 96);
        border: 1px solid rgba(39, 64, 96, 0.1);
        min-width: 32px;
        height: 32px;
        padding: 0px 6px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        &:hover,
        &:focus {
          box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
          transform: translateY(-3px);
        }
      }
      &.disabled a {
        pointer-events: none;
        opacity: 0.5;
        outline: none;
      }
    }
  }
`;

export const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;
