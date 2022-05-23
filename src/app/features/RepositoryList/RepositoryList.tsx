import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserRepositories from "../../../core/hooks/useUserRepositories";
import * as RL from "./RepositoryList.styles";

export default function RepositoryList() {
  const navigate = useNavigate();
  
  const { repositories, getUserRepositories } = useUserRepositories();

  useEffect(() => {
    getUserRepositories();
    console.log(repositories);
    if (!repositories) {
      navigate("/")
    }

  }, []); 

  return (
    <RL.Wrapper>
      <RL.Title>Repositórios</RL.Title>
      <RL.List>
        {repositories?.map((repository) => {
          return <RL.ListItem key={repository}>Repositório: {repository}</RL.ListItem>;
        })}
      </RL.List>
      <RL.LinkHome to="/">Voltar</RL.LinkHome>
    </RL.Wrapper>
  );
}
