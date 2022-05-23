import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts";
import SearchGitHubUser from "../features/SearchGitHubUser";

export default function HomeView() {
  usePageTitle("Buscar Repositórios");

  return (
    <DefaultLayout>
      <SearchGitHubUser />
    </DefaultLayout>
  );
}
