import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  background: #352e3a;
  width: 100%;
  border-radius: 4px;
  padding: 8px 24px;
  gap: 16px;
  min-height: 88px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px solid #ffffff;
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const RepositoryName = styled.p`
  font-size: 16px;
`;

export const RepositoryLanguage = styled.strong`
  background-color: #9035e0;
  font-size: 10px;
  padding: 2px 4px;
  margin: 0 8px;
  border-radius: 4px;
`;

export const RepositoryDetails = styled.p`
  font-size: 12px;
  color: #a6a1a9;
  font-weight: 600;
`;

export const RepositoryUpdatedA = styled.p`
  font-size: 10px;
  color: #a6a1a9;
  font-weight: 500;
`;