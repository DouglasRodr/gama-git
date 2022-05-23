import styled from "styled-components";
import Logo from "../components/Logo";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Layout>
      <TopBar>
        <Logo />
      </TopBar>
      <Content>{props.children}</Content>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
`;

const TopBar = styled.div`
  text-align: center;
  padding: 16px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;
