import { useEffect } from "react";

export default function usePageTitle(title: string) {
  const BASE_TITLE = "GamaGit";
  useEffect(() => {
    document.title = `${BASE_TITLE} - ${title}`;
  }, [title]);
}
