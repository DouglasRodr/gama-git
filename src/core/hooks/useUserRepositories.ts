import { useCallback, useState } from "react";
import { GitHub } from "../../service/@types";
import { RepositoryService } from "../../service/services";

export default function useUserRepositories() {
  const [repositories, setRepositories] = useState<GitHub.Repository[]>([]);

  const fetchRepositoriesByUsername = useCallback(async function (username: string) {
    RepositoryService.getAllByUsername(username).then(setRepositories);
  }, []);

  return {
    repositories,
    fetchRepositoriesByUsername,
  };
}
