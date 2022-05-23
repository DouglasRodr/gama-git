import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts";
import RepositoryList from "../features/RepositoryList";

export default function RepositoryListView() {
  usePageTitle("Lista de Repositórios");

  return (
    <DefaultLayout>
      <RepositoryList />
    </DefaultLayout>
  );
}
