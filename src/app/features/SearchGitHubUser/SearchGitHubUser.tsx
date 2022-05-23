import useUser from "../../../core/hooks/useUser";
import Input from "../../components/Input";
import UserCard from "../../components/UserCard";
import * as SG from "./SearchGitHubUser.styles";
import { useNavigate } from "react-router-dom";

export default function SearchGitHubUser() {
  const { username, setUsername, loading, fetchUser, user } = useUser();

  const navigate = useNavigate();

  function handleKeyDownSearch(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handlePesquisa();
    }
  }

  function handlePesquisa() {
    fetchUser();
  }

  function handleClickRepositories() {
    navigate("/repositories");
  }

  return (
    <SG.Wrapper>
      <SG.Content>
        <SG.Title>Buscar Repositórios do GitHub</SG.Title>
        <SG.Form>
          <Input
            placeholder="Digite o Usuário do GitHub"
            value={username}
            disabled={loading}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDownSearch}
          />
          <SG.SearchButton
            label="Buscar"
            loading={loading}
            onClick={handlePesquisa}
          />
        </SG.Form>
        {user && !loading && (
          <UserCard
            name={user.name}
            login={user.login}
            location={user.location}
            avatarUrl={user.avatar_url}
            publicRepositories={user.public_repos}
            onClickRepositoriesLink={handleClickRepositories}
          />
        )}
      </SG.Content>
    </SG.Wrapper>
  );
}
