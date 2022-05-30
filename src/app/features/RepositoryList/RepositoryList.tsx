import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../core/hooks/useUser";
import useRepository from "../../../core/hooks/useRepository";
import getUpdatedAtDescrition from "../../../core/utils/getUpdatedAtDescription";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import RepositoryCard from "../../components/RepositoryCard";
import Pagination from "../../components/Pagination";
import * as RL from "./RepositoryList.styles";
import { useMediaQuery } from "react-responsive";

export default function RepositoryList() {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();
  const [page, setPage] = useState(1);

  const isDesktop = useMediaQuery(
    { query: "(min-width: 992px)" },
    undefined,
    (matches) => {
      if (matches) {
        handlePagination(15);
      }
    }
  );

  const isTablet = useMediaQuery(
    {
      query: "(min-width: 768px) and (max-width: 992px)",
    },
    undefined,
    (matches) => {
      if (matches) {
        handlePagination(10);
      }
    }
  );

  const isMobile = useMediaQuery(
    { query: "(max-width: 768px)" },
    undefined,
    (matches) => {
      if (matches) {
        handlePagination(5);
      }
    }
  );

  const [pageSize, setPageSize] = useState(isDesktop ? 15 : isTablet ? 10 : 5);

  const { loading, repositories, fetchAllByUsername } = useRepository();

  const handlePagination = useCallback(
    (pageSize: number) => {
      if (user) {
        let totalPages = Math.ceil(user.public_repos / pageSize);
        setPageSize(pageSize);
        if (page > totalPages) {
          setPage(totalPages);
        }
      }
    },
    [page, user]
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      fetchAllByUsername(user.login, {
        page,
        per_page: pageSize,
      });
    }
  }, [fetchAllByUsername, page, pageSize, user, navigate]);

  function handleReturn(): void {
    clearUser();
    navigate("/");
  }

  return (
    <RL.Wrapper>
      <RL.Title>Repositórios</RL.Title>
      {loading ? (
        <RL.LoadingContainer>
          <Loading label="Carregando..." />
        </RL.LoadingContainer>
      ) : (
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
      )}
      {user && user.public_repos > pageSize && (
        <RL.PaginationContainer>
          <Pagination
            firstLabel={isMobile ? "<<" : "Primeira"}
            lastLabel={isMobile ? ">>" : "Última"}
            currentPage={page}
            pageSize={pageSize}
            totalElements={user.public_repos}
            onPageChange={(page) => setPage(page)}
          />
        </RL.PaginationContainer>
      )}
      <RL.ReturnContainer>
        <Button label="Voltar" onClick={handleReturn} />
      </RL.ReturnContainer>
    </RL.Wrapper>
  );
}
