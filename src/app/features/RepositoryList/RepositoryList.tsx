import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../core/hooks/useUser";
import useUserRepositories from "../../../core/hooks/useUserRepositories";
import getUpdatedAtDescrition from "../../../core/utils/getUpdatedAtDescription";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import RepositoryCard from "../../components/RepositoryCard";
import * as RL from "./RepositoryList.styles";

export default function RepositoryList() {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();
  const { loading, repositories, fetchRepositoriesByUsername } =
    useUserRepositories();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      fetchRepositoriesByUsername(user.login);
    }
  }, [fetchRepositoriesByUsername, navigate, user]);

  function handleVoltar() {
    clearUser();
    navigate("/");
  }

  return (
    <RL.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RL.Title>Repositórios</RL.Title>
          <RL.RepositoryCardList>
            {repositories?.map((repository) => {
              return (
                <RepositoryCard
                  key={repository.node_id}
                  name={repository.name}
                  description={repository.description}
                  language={repository.language}
                  updatedAt={getUpdatedAtDescrition(
                    new Date(repository.updated_at)
                  )}
                  repositoryUrl={repository.svn_url}
                />
              );
            })}
          </RL.RepositoryCardList>
          <RL.ReturnContainer>
            <Button label="Voltar" onClick={handleVoltar} />
          </RL.ReturnContainer>
        </>
      )}
    </RL.Wrapper>
  );
}
