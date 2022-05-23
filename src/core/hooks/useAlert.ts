import { useCallback } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function useAlert() {
  const showError = useCallback(function (message: string) {
    const swal = withReactContent(Swal);

    swal.fire({
      icon: "error",
      title: message,
      confirmButtonColor: "#9035e0",
    });
  }, []);

  return { showError };
}
