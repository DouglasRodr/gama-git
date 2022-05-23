import { GitHub } from "../@types";
import Service from "../Service";

class UserService extends Service {
  static getByUsername(username: string) {
    return this.Http.get<GitHub.User>(`/users/${username}`)
      .then(this.getData)
      .catch((error) => {
        if (
          error.response.data &&
          error.response.status >= 400 &&
          error.response.status <= 599
        ) {
          if (error.response.status < 500) {
            throw new Error(
              error.response.status === 404
                ? "Usuário não encontrado"
                : "Requisição Inválida"
            );
          } else {
            throw new Error("Erro Interno do Servidor");
          }
        } else if (error.code === "ERR_NETWORK") {
          throw new Error("Falha de Conexão. Tente novamente mais tarde");
        } else {
          throw new Error("Erro não catalogado");
        }
      });
  }
}

export default UserService;
