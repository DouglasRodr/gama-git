import { useCallback, useState } from "react";
import { RepositoryService } from "../../service/services";

export default function useUserRepositories() {
  const [repositories, setRepositories] = useState<string[]>([]);

  const fetchUserRepositories = useCallback(async function (username: string) {
    const repositoriesName: string[] = [];

    RepositoryService.getAllByUsername(username).then((userRepositories) => {
      userRepositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem(
        "repositoriesName",
        JSON.stringify(repositoriesName)
      );
    });
  }, []);

  const getUserRepositories = useCallback(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName !== null) {
      setRepositories(JSON.parse(repositoriesName));
      localStorage.clear();
    }
  }, []);

  return {
    fetchUserRepositories,
    getUserRepositories,
    repositories,
  };
}
