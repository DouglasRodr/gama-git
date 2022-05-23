import { useEffect } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import useAlert from "../core/hooks/useAlert";
import HomeView from "./view/Home.view";
import RepositoryListView from './view/RepositoryList.view';

export default function App() {
  const { showError } = useAlert();

  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      showError(error.reason.message);
    };
  }, [showError]);

  const Routes = () =>
    useRoutes([
      { path: "/", element: <HomeView /> },
      { path: "/home", element: <HomeView /> },
      { path: "/repositories", element: <RepositoryListView /> }
    ]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
