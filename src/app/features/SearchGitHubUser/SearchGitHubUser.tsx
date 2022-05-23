import useUser from "../../../core/hooks/useUser";
import Input from "../../components/Input";
import UserCard from "../../components/UserCard";
import * as SG from "./SearchGitHubUser.styles";
import { useNavigate } from "react-router-dom";

export default function SearchGitHubUser() {
  const { username, setUsername, loading, fetchUser, user } = useUser();

  const navigate = useNavigate();

  function handlePesquisa() {
    fetchUser();
  }

  function handleClickRepositories() {
    navigate("/repositories");
  }

  return (
    <SG.Wrapper>
      <SG.Title>Buscar Repositórios do GitHub</SG.Title>
      <SG.SearchForm>
        <Input
          placeholder="Digite o Usuário do GitHub"
          value={username}
          disabled={loading}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SG.SearchButton
          label="Buscar"
          loading={loading}
          onClick={handlePesquisa}
        />
      </SG.SearchForm>
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
    </SG.Wrapper>
  );
}
