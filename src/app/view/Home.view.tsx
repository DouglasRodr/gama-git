import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts";
import SearchGitHubUser from "../features/SearchGitHubUser";

export default function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <SearchGitHubUser />
    </DefaultLayout>
  );
}
