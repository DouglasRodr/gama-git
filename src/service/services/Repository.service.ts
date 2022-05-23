import { GitHub } from "../@types";
import Service from "../Service";

class RepositoryService extends Service {
  static getAllByUsername(username: string) {
    return this.Http.get<GitHub.Repository[]>(`/users/${username}/repos`).then(
      this.getData
    );
  }
}

export default RepositoryService;
