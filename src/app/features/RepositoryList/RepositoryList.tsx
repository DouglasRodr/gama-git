import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../core/hooks/useUser";
import useUserRepositories from "../../../core/hooks/useUserRepositories";
import * as RL from "./RepositoryList.styles";

export default function RepositoryList() {
  const { user } = useUser();
  const { repositories, fetchRepositoriesByUsername } = useUserRepositories();

  useEffect(() => {
    if (!user) {

    } else {
      fetchRepositoriesByUsername(user.login);
    }
  }, [fetchRepositoriesByUsername, user]);

  return (
    <RL.Wrapper>
      <RL.Title>Repositórios</RL.Title>
      <RL.List>
        {repositories?.map((repository) => {
          return (
            <RL.ListItem key={repository.node_id}>
              Repositório: {repository.name}
            </RL.ListItem>
          );
        })}
      </RL.List>
      <RL.LinkHome to="/">Voltar</RL.LinkHome>
    </RL.Wrapper>
  );
}
