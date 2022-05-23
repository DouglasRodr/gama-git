import { useEffect } from "react";

export default function usePageTitle(title: string) {
  const BASE_TITLE = "Consulta GitHub";
  useEffect(() => {
    document.title = `${BASE_TITLE} - ${title}`;
  }, []); // eslint-disable-line
}
