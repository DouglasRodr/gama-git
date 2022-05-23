import { useEffect } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import HomeView from "./view/Home.view";

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      console.log("Houve um Erro");
    };
  }, []);

  const Routes = () =>
    useRoutes([
      { path: "/", element: <HomeView /> },
      { path: "/home", element: <HomeView /> },
    ]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
