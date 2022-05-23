import { unwrapResult } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import * as UserActions from "../store/User.store";
import useAlert from "./useAlert";

export default function useUser() {
  const { showError } = useAlert();

  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) => state.user.fetching);

  const user = useSelector((state: RootState) => state.user.user);

  const fetchUserByUsername = useCallback(
    async function (username: string) {
      dispatch(UserActions.fetchByUsername(username))
        .then(unwrapResult)
        .catch((error) => {
          showError(error.message);
        });
    },
    [dispatch, showError]
  );

  return { loading, user, fetchUserByUsername };
}
