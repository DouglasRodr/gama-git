import { useCallback, useState } from "react";
import { GitHub } from "../../service/@types";
import { RepositoryService } from "../../service/services";

export default function useUserRepositories() {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<GitHub.Repository[]>([]);

  const fetchRepositoriesByUsername = useCallback(async function (
    username: string
  ) {
    setLoading(true);
    RepositoryService.getAllByUsername(username)
      .then(setRepositories)
      .finally(() => {
        setLoading(false);
      });
  },
  []);

  return {
    fetchRepositoriesByUsername,
    loading,
    repositories,
  };
}
