import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #352e3a;

  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 4px;

  padding: 8px 24px;
  gap: 16px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const UserName = styled.p`
  font-size: 16px;
`;

export const UserLogin = styled.strong`
  font-size: 10px;
  color: #a6a1a9;
  font-weight: 500;
`;

export const UserDetails = styled.p`
  font-size: 12px;
  color: #a6a1a9;
  font-weight: 600;
`;

export const RepositoriesLink = styled.a`
  margin-top: 8px;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
  opacity: 1;
  transition: 0.25s ease;

  &::after {
    content: " >";
  }

  &:hover {
    opacity: 0.7;
  }
`;
