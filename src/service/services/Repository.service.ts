import { GitHubRepository } from "../@types";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";

class RepositoryService extends Service {
  static getAllByUsername(username: string, query: GitHubRepository.Query) {
    const queryString = generateQueryString(query);
    return this.Http.get<GitHubRepository.Detailed[]>(
      `/users/${username}/repos`.concat(queryString)
    ).then(this.getData);
  }
}

export default RepositoryService;
