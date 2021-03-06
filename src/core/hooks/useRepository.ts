import { useCallback, useState } from "react";
import { GitHubRepository } from "../../service/@types";
import { RepositoryService } from "../../service/services";

export default function useRepository() {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<GitHubRepository.Detailed[]>(
    []
  );

  const fetchAllByUsername = useCallback(async function (username: string, query: GitHubRepository.Query) {
    setLoading(true);
    RepositoryService.getAllByUsername(username, query)
      .then(setRepositories)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    fetchAllByUsername,
    loading,
    repositories,
  };
}
