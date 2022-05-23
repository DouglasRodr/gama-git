import { useState } from "react";
import useAlert from "../../../core/hooks/useAlert";
import useUser from "../../../core/hooks/useUser";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as SG from "./SearchGitHubUser.styles";

export default function SearchGitHubUser() {
  const { loading, fetchUserByUsername } = useUser();

  const [username, setUsername] = useState("");

  const { showError } = useAlert();

  function handlePesquisa() {
    if (username.length > 0) {
      fetchUserByUsername(username);
      setUsername("");
    } else {
      showError("Usuário deve ser informado");
    }
  }

  return (
    <SG.Wrapper>
      <SG.Title>Buscar Repositórios do GitHub</SG.Title>
      <SG.SearchForm>
        <Input
          placeholder="Digite o Usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button label="Buscar" loading={loading} onClick={handlePesquisa} />
      </SG.SearchForm>
    </SG.Wrapper>
  );
}
